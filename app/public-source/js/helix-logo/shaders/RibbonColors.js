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

uniform float line1;
uniform float line2;
uniform float line3;
uniform float line4;
uniform float line5;
uniform float line6;
uniform float line7;
uniform float line8;
uniform float line9;
uniform float line10;


uniform float lineSpeed;
uniform float lineBreakSeparation;
uniform float lineCount;

uniform float breakSize;
uniform float breakFrequency;

uniform bool coloredDivisions;
uniform bool colorIsDark;

float random (in float x) {
  return fract(sin(x)*1e4);
}

vec2 tile(vec2 _st, float _zoomX, float _zoomY ){
  _st.x *= _zoomX;
  _st.y *= _zoomY;
  return fract(_st);
}

float rect(in vec2 _st, in vec2 _size){
  _size = 0.1-_size*0.5;
  vec2 uv = smoothstep(_size,_size,_st);

  uv *= smoothstep(_size,_size,vec2(1.0, breakSize)-_st);
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
  vec3 colorSeparation = vec3(1.0);

  colorSt *= 16.0; 
  colorSt = fract(colorSt);
  float d = distance(colorSt.y, 0.5);

  vec3 coloMixed = mix(colorB, colorA, fract(d*1.5));
  float totalDivisions = lineCount;
  float divisionPercentage = lineBreakSeparation;
  
  st = tile(st, totalDivisions, totalDivisions);
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
  
  vec2 stY = vUv;

  if (stY.x < 1./lineCount) {
    stY.y = fract(stY.y - line1);
  }
  else if (stY.x < 2./lineCount) {
    stY.y = fract(stY.y - line2);
  }
  else if (stY.x < 3./lineCount) {
      stY.y = fract(stY.y - line3);
  } 
  else if (stY.x < 4./lineCount) {
      stY.y = fract(stY.y - line4);
  }
  else if (stY.x < 5./lineCount) {
      stY.y = fract(stY.y - line5);
  }
  else if (stY.x < 6./lineCount) {
      stY.y = fract(stY.y - line6);
  }
    else if (stY.x < 7./lineCount) {
      stY.y = fract(stY.y - line7);
  }
    else if (stY.x < 8./lineCount) {
      stY.y = fract(stY.y - line8);
  }
    else if (stY.x < 9./lineCount) {
      stY.y = fract(stY.y - line9);
  }
    else if (stY.x < 10./lineCount) {
      stY.y = fract(stY.y - line10);
  }

  stY = tile(stY + (time * lineSpeed), totalDivisions, breakFrequency);
  if (coloredDivisions) {
    colorSeparation = vec3(colorA);
  }
  
  color = mix(color, colorSeparation,
    rect(fract(vec2(stY)) - vec2(-separation.x), vec2(separation.x + lineBreakSeparation, 0.00001)));
  
  gl_FragColor = vec4(color,.9);
}
`