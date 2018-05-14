const RibbonVertex = `
precision highp float;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

uniform float time;
uniform float offset;

uniform float innerRadius;
uniform float outerRadius;
uniform float totalCurls;
uniform float amplitude;
uniform float width;

attribute float vertexIndex;
attribute float vertexAngle;
attribute float vertexNoise;

void main() {
  vUv = uv;
  vNormal = normal;
  vec3 pos = position;

  float R = (outerRadius);
  if (mod(vertexIndex, 2.0) == 0.0) {
    pos.x = ((R + width) + ((innerRadius + width) * cos(totalCurls * vertexAngle))) * cos(vertexAngle) + (vertexNoise * cos(140.5));
    pos.y = ((R + width) + ((innerRadius + width) * cos(totalCurls * vertexAngle))) * sin(vertexAngle) + (vertexNoise * cos(150.5)) * (amplitude * sin(vertexNoise));
    pos.z = (innerRadius + width) * sin(totalCurls * vertexAngle) * (amplitude * sin(vertexNoise)) + cos(vertexNoise); 
  } else {
   pos.x = ((R + width) + (innerRadius * cos(totalCurls * vertexAngle))) * cos(vertexAngle) + (vertexNoise * cos(140.5));
    pos.y = ((R + width) + (innerRadius * cos(totalCurls * vertexAngle))) * sin(vertexAngle) + (vertexNoise * sin(150.5)) * (amplitude * sin(vertexNoise));
    pos.z = innerRadius * sin(totalCurls * vertexAngle) * (amplitude * sin(vertexNoise)) + cos(-vertexNoise);
  }

  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(pos, 1.0);
}
`