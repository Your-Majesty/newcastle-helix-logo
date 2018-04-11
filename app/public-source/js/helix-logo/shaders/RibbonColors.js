
const RibbonColors = `
precision highp float;

varying vec2 vUv;
varying vec3 vColor;

uniform float time;
uniform float offset;

vec2 tile(vec2 _st, float _zoom){
  _st.y *= _zoom;
    return fract(_st);
}

vec3 influenced_color = vec3(0.577,0.441,0.700);

void main(void){
    vec2 st = vUv;
    vec3 color = vec3(.0);
    float totalDivisions = 60.;
    float divisionPercentage = 0.9;
    st = tile(st + (time * 0.2),totalDivisions);
    vec2 separation = smoothstep(divisionPercentage,divisionPercentage,st);
    color = vec3(separation.y);

    color += vColor;
    gl_FragColor = vec4(color,1.0);
}






// vec3 colorA = vec3(0.149,0.141,0.912);

// void main(){
//     vec2 st = vUv;
//     vec3 color = vec3(0.0);

//     vec3 pct = vec3(st.y);

//     color = mix(vColor, colorA, pct.y);
//     gl_FragColor = vec4(color,1.0);
// }
// `
