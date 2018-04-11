
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

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

vec3 influenced_color = vec3(0.577,0.441,0.700);

void main(void){
    vec2 st = vUv;
    vec3 color = vec3(.0);
    float totalDivisions = 10.;
    float divisionPercentage = 0.96;
    st = tile(st + ((time + fract(offset*10.0)) * 0.5),totalDivisions);
    vec2 separation = smoothstep(divisionPercentage,divisionPercentage,st);
    color = vec3(separation.y);

    color += vColor;
    gl_FragColor = vec4(color,1.0);
}
`
