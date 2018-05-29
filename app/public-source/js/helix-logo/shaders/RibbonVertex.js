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

  float R = outerRadius;
  if (mod(vertexIndex, 2.0) == 0.0) {
    pos.x = ((R + width) + (((innerRadius + width) + offset) * cos(totalCurls * vertexAngle))) * cos(vertexAngle);
    pos.y = ((R + width) + (((innerRadius + width) + offset) * cos(totalCurls * vertexAngle))) * sin(vertexAngle);
    pos.z = ((innerRadius + width) + offset) * sin(totalCurls * vertexAngle) * (amplitude * sin(vertexNoise)); 
  } else {
   pos.x = ((R + width) + ((innerRadius + offset) * cos(totalCurls * vertexAngle))) * cos(vertexAngle);
    pos.y = ((R + width) + ((innerRadius + offset) * cos(totalCurls * vertexAngle))) * sin(vertexAngle);
    pos.z = (innerRadius + offset) * sin(totalCurls * vertexAngle) * (amplitude * sin(vertexNoise));
  }

  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(pos, 1.0);
}
`