
const RibbonColors = `
precision highp float;

varying vec2 vUv;
varying vec3 vColor;

uniform float time;
uniform float offset;
uniform float index;
uniform vec3 colorA;
uniform vec3 colorB;

vec2 tile(vec2 _st, float _zoom){
  _st.y *= _zoom;
  return fract(_st);
}

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}


void main(void){
    vec2 st = vUv;
    vec3 color = vec3(.0);
    
    // Check if this line should have color
    if (mod(index, 2.0) == 0.0) {
      vec3 coloMixed = mix(colorA, colorB, st.y);
      float totalDivisions = 20.;
      float divisionPercentage = 0.96;
      st = tile(st + ((time + fract(offset*20.0)) * 0.1),totalDivisions);
      vec2 separation = smoothstep(divisionPercentage,divisionPercentage,st);
      color = vec3(separation.y);
      color += coloMixed;

    } else {
      
      color = vec3(1.);
    }



    gl_FragColor = vec4(color,1.0);
  
}
`
