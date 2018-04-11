
const RibbonColors = `
precision highp float;

varying vec2 vUv;
varying vec3 vColor;

uniform float time;
uniform float offset;

vec3 colorA = vec3(0.149,0.141,0.912);

void main(){
    vec2 st = vUv;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(st.y);

    color = mix(vColor, colorA, pct.y);
    gl_FragColor = vec4(color,1.0);
}
`
