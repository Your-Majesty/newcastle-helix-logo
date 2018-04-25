
const RibbonColors = `
precision highp float;

varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

uniform vec3 lightPosition;
uniform float time;
uniform float offset;

uniform vec3 colorA;
uniform vec3 colorB;
uniform float lineSpeed;
uniform float lineBreakSeparation;
uniform float lineCount;

vec2 tile(vec2 _st, float _zoom){
  _st *= _zoom;
  return fract(_st);
}

float rand(float n){return fract(sin(n) * 43758.5453123);}

float noise(float p){
  float fl = floor(p);
  float fc = fract(p);
  return mix(rand(fl), rand(fl + 1.0), fc);
}

void main(void){

  vec2 st = vUv;

  vec3 color = vec3(.0);
  vec2 colorSt = st;

  // vec3 lightDirection = normalize(lightPosition - vWorldPosition);
  colorSt *= 10.0; 
  colorSt = fract(colorSt);
  float d = distance(colorSt.y, 0.5);

  // float c = 0.3 + max(0.0, dot(vNormal, lightDirection)) * 0.3;
  vec3 coloMixed = mix(colorA, colorB, fract(d*1.5));
  // vec3 coloMixed2 = mix(colorB, colorA, fract(d*.5));

  float totalDivisions = lineCount;
  float divisionPercentage = lineBreakSeparation;

  st = tile(st, totalDivisions);

  vec2 separation = smoothstep(divisionPercentage, divisionPercentage, fract(st));
  float divisionX = (1. - lineSpeed);
  vec2 separationX = smoothstep(divisionX,divisionX, (fract(st * 5. + (time * 1.))));
  
  color += vec3(separationX.y);
  color += vec3(separation.x);
  
  color += coloMixed;
  // color += coloMixed;

  gl_FragColor = vec4(color,.9);
}
`
