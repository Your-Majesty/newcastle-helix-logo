const RibbonVertex = `
uniform float time;
uniform float offset;

varying vec3 vColor;

float wrap(float x) {
  if (abs(x) < 1.0) return x*1.5708;
  if (x > 0.0) return (2.0 - 1.0/x)*1.5708;
  return (-2.0 - 1.0/x)*1.5708;
}

void main() {
  float q = position.x + offset,
        t = position.y,
        p = sin(time), 
        r = cos(p+cos(time*.71)+time*.141), 
        s = cos(time + p*1.23 - r);
  
  float f = ((t-q*1.71+p)*(t-q*2.91-r)*(1.0+t+q*q*r*2.1+p*r)*.6+(t-q*1.35-s)*(t-p*q*1.14-2.0+s)*.6);
  
  vec3 ribbon = vec3(
    -cos(wrap(f)+time)*q*2.0,
    t,
    sin(wrap(f)+time)*q*2.0
  );

  vColor = color;
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(ribbon, 1.0);
}

`