const RibbonNoiseTexture = `
precision highp float;

varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;



void main(void){
  gl_FragColor = vec4(vec3(1.), 1.);
}
`