const RibbonVertex = `
precision highp float;
varying vec3 vNormal;
varying vec2 vUv;

uniform float time;
uniform float offset;

uniform float totalVertices;
uniform float parentRadius;
uniform float childRadius;
uniform float totalLoops;
uniform float width;

#define PI 3.14159265359

float wrap(float x) {
  if (abs(x) < 1.0) return x * 1.5708;
  if (x > 0.0) return (2.0 - 1.0/x)*1.5708;
  return (-2.0 - 1.0/x)*1.5708;
}

void main() {
  vUv = uv;
  vNormal = normal;
  float posX = position.x;
  float posY = position.y;
  float posZ = position.z;

  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(posX, posY, posZ, 1.0);
}
`