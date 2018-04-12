
const RibbonColors = `
precision highp float;

varying vec3 vNormal;
varying vec2 vUv;

uniform float time;
uniform float offset;
uniform float index;
uniform vec3 colorA;
uniform vec3 colorB;
uniform float lineSpeed;
uniform float lineBreakSeparation;
uniform float lineBreakSize;

vec2 tile(vec2 _st, float _zoom){
  _st.y *= _zoom;
  return fract(_st);
}

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(15.9898,78.233)))* 43758.5453123);
}


void main(void){
  vec2 st = vUv;
  vec3 color = vec3(.0);
  
  // Check if this line should have color
  if (mod(index, 2.0) == 0.0) {
    vec3 coloMixed = mix(colorA, colorB, st.y);
    float totalDivisions = lineBreakSize;
    float divisionPercentage = lineBreakSeparation;
    st = tile(st + ((time + fract(offset*20.0)) * lineSpeed),totalDivisions);
    vec2 separation = smoothstep(divisionPercentage,divisionPercentage,st);
    color = vec3(separation.y);
    color += coloMixed;

  } else {
    color = vec3(1.);
  }
  gl_FragColor = vec4(color,1.0);
}
`
