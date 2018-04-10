
const RibbonColors = `
precision highp float;

varying vec2 vUv;
varying vec3 vColor;

uniform float time;
uniform float offset;

vec3 checker(vec2 uv, vec2 size) {
  vec2 m = sign(fract(uv.y*size) - .5);
  return vec3(m.x * m.y);
}

void main(){
  vec2 uv = vUv * (50.0 * offset);        
  vec2 size = .5 + vec2(15.0, 0.5 + (time * 0.2));
  vec3 color = checker(1.0 - uv, size);

  color = vColor * color;

  gl_FragColor = vec4(color, 1.0);
}
`
