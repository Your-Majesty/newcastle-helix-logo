const RibbonVertex = `
precision highp float;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

uniform float time;
uniform float offset;

uniform float parentRadius;
uniform float childRadius;
uniform float width;

attribute float newXPositions;
attribute float newYPositions;
attribute float newZPositions;

void main() {
  vUv = uv;
  vNormal = normal;
  vec3 pos = position;
  // pos.x = (1. - 0.1) * pos.x + 0.1 * newXPositions;   
  // pos.y = (1. - 0.1) * pos.y + 0.1 * newYPositions;   
  // pos.z = (1. - 0.1) * pos.z + 0.1 * newZPositions;   

  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(pos, 1.0);
}
`