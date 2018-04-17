const RibbonVertex = `
precision highp float;

varying vec3 vNormal;
varying vec2 vUv;

uniform float time;
uniform float offset;
uniform float index;

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


  float angle = (360. / (totalVertices / 2.)) * (PI / 180.);
  float radius = childRadius + offset;
  float R = parentRadius + offset;

  if (mod(index, 2.0) == 0.0) {
    // posX = (R + (radius * cos(totalLoops * (index * angle)))) * cos(index * angle);
    // posY = (R + (radius * cos(totalLoops * (index * angle)))) * sin(index * angle);
    // posZ = radius * sin(totalLoops * (index * angle));

  } else {

    // posX = ((R + width) + ((radius + width) * cos(totalLoops * (index * angle)))) * cos(index * angle);
    // posY = ((R + width) + ((radius + width) * cos(totalLoops * (index * angle)))) * sin(index * angle);
    // posZ = (radius + width) * sin(totalLoops * (index * angle));

  }

  // float sineTime = sin(time); 


  // float r = cos(sineTime + cos(time * 5.71) + time *.141); 
  // float s = cos(time + sineTime * 1.23 - r);
  
  // float f = ((posX * 1.71 + sineTime ) * ( posY* 2.91 - r ) * ( 1.0 + posY + posX * posX * r * 2.1 + sineTime * r ) *.6 + ( posY - posX * 1.35 - s ) * ( posY - sineTime * posX * 1.14 - 2.0 + s ) * .6);
  
  // vec3 ribbon = vec3(-cos(wrap(f)+time) * posX * 2.0, posY, sin(wrap(f) + time) * posX * 2.0);
  
  
  // gl_Position = projectionMatrix *
  //               modelViewMatrix *
  //               vec4(ribbon, 1.0);


  




  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(posX, posY, posZ, 1.0);
}
`