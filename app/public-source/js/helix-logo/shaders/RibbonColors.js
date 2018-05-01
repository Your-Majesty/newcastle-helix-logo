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
uniform bool coloredDivisions;
uniform bool colorIsDark;

vec2 tile(vec2 _st, float _zoom){
  _st *= _zoom;
  return fract(_st);
}

float random (in float x) {
  return fract(sin(x)*1e4);
}

float rect(in vec2 _st, in vec2 _size){
  _size = 0.1-_size*0.5;
  vec2 uv = smoothstep(_size,_size,_st);
  uv *= smoothstep(_size,_size,vec2(1.0,0.25)-_st);
  // vec2 uv = step(size,st*(1.0-st));
  return uv.x*uv.y;
}

float noise(float p){
  float fl = floor(p);
  float fc = fract(p);
  return mix(random(fl), random(fl + 1.0), fc);
}

void main(void){
  vec2 st = vUv;
  vec3 color = vec3(.0);
  vec2 colorSt = st;
  vec3 lightDirection = normalize(lightPosition - vWorldPosition);
  colorSt *= 18.0; 
  colorSt = fract(colorSt);
  float d = distance(colorSt.y, 0.5);

  float c = 0.3 + max(0.0, dot(vNormal, lightDirection)) * 0.3;
  vec3 coloMixed = mix(colorB, colorA, fract(d*1.5));

  float totalDivisions = lineCount;
  float divisionPercentage = lineBreakSeparation;
  
  st = tile(st, totalDivisions);
  vec2 separation = smoothstep(divisionPercentage, divisionPercentage, fract(st));

  if (separation.x > .9 && coloredDivisions) {
    color += mix(colorA, colorB, fract(d*.5)) * mix(colorB, colorB, fract(d*.5));
    if (colorIsDark) {
      color *= mix(colorB, colorA, fract(d*.5));
    }
  } else {
    color += vec3(separation.x);
  }
  color += coloMixed;

  color = mix(color,
               vec3(1.0),
               rect(fract(st * 1.)- vec2(-separation.x), vec2(separation.x + lineBreakSeparation, 0.001)));



  gl_FragColor = vec4(color,.9);
}
`