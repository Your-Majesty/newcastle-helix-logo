const RibbonColors = `
precision highp float;

varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

uniform float time;
uniform float index;
uniform float offsetLines;

uniform vec3 colorA;
uniform vec3 colorLastA;

uniform vec3 colorB;
uniform vec3 colorLastB;

uniform float colorTiming;

uniform float lineSpeed;
uniform float lineBreakSeparation;
uniform float lineCount;

uniform float breakSize;
uniform float breakFrequency;

uniform bool coloredDivisions;
uniform bool colorIsDark;
uniform bool isMonochrome;
uniform float monochromeColorA;
uniform float monochromeColorB;

float random (in float x) {
  return fract(sin(x)*1e4);
}

vec2 tile(vec2 _st, float _zoom){
  _st.y *= _zoom;
  return fract(_st);
}

float rect(in vec2 _st, in vec2 _size){
  _size = 0.1-_size*0.5;
  vec2 uv = smoothstep(_size,_size,_st);
  uv *= smoothstep(_size,_size,vec2(1.0, breakSize)-_st);
  return uv.x*uv.y;
}

void main(void){
  vec2 st = vUv;
  vec3 color = vec3(.0);
  float alpha = 1.0;
  vec3 colorSeparation = vec3(1.0);

  vec2 colorSt = st;
  colorSt *= 18.; 
  colorSt = fract(colorSt);
  float d = distance(colorSt.y, 0.5);

  float totalDivisions = lineCount;
  float divisionPercentage = lineBreakSeparation;
  

  st = tile(st + ((time + fract(offsetLines*20.0)) * lineSpeed),totalDivisions);
  vec2 separation = smoothstep(divisionPercentage,divisionPercentage,st);

  vec3 colorMixedLight = mix(colorLastA, colorA, colorTiming);
  vec3 colorMixedDark = mix(colorLastB, colorB, colorTiming);

  if (isMonochrome) {
    colorMixedLight = vec3(monochromeColorB);
    colorMixedDark = vec3(monochromeColorA);
  }

  if (mod(index, 2.0) == 0.0) {
    alpha = 1.;

  } else {
    if (coloredDivisions) {
      color += mix(colorMixedLight, colorMixedDark, fract(d)) * mix(colorMixedDark, colorMixedDark, fract(d));
      if (colorIsDark) {
        color *= mix(colorMixedDark, colorMixedLight, fract(d));
      }


    } else {
      color = vec3(1.);
    }
  }

  if (coloredDivisions) {
    colorSeparation = vec3(colorMixedLight);
  }
  
  color += mix(colorMixedDark, colorMixedLight, fract(d));

  // color += vec3(separation.y);
  gl_FragColor = vec4(color, alpha);
}
`