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

#define PI 3.14159265359

void main() {
  vUv = uv;
  vNormal = normal;
  vec3 pos = position + offset;
  
  vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(position, 1.0);
}
`