const RibbonColors = `
// precision mediump float;
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
uniform bool colorCurrentIndex;

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

float rect(in vec2 _st, in vec2 _size, in float separationSize){
  _size = 0.1-_size*separationSize;
  vec2 uv = smoothstep(_size,_size,_st);

  uv *= smoothstep(_size,_size,vec2(1.0, 0.1)-_st);
  return uv.x*uv.y;
}

vec2 tile(vec2 _st, float _zoomX, float _zoomY ){
  _st.x *= _zoomX;
  _st.y *= _zoomY;
  return fract(_st);
}

void main(void){
  vec2 st = vUv;
  vec3 color = vec3(.0);
  float alpha = 1.0;
  gl_FragColor.a = 0.5;

  vec3 colorSeparation = vec3(1.0);

  vec2 colorSt = st;
  colorSt *= 18.; 
  colorSt = fract(colorSt);
  float d = distance(colorSt.y, 0.5);

  float totalDivisions = lineCount;
  float divisionPercentage = lineBreakSeparation;

  st = tile(st, 0., totalDivisions);


  // st = tile(st + ((time + fract(offsetLines*20.0)) * lineSpeed),totalDivisions);
  // vec2 separation = smoothstep(divisionPercentage,divisionPercentage,st);

  vec3 colorMixedLight = mix(colorLastA, colorA, colorTiming);
  vec3 colorMixedDark = mix(colorLastB, colorB, colorTiming);

  if (isMonochrome) {
    colorMixedLight = vec3(monochromeColorB);
    colorMixedDark = vec3(monochromeColorA);
  }

  if (mod(index, 2.0) == 0.0) {
    alpha = 1.;
    // color += vec3(separation.y);
  } else {
    if (isMonochrome) {
      alpha = .0;
    } else {
      alpha = 1.0;
      if (coloredDivisions) {
          color += mix(colorMixedLight, colorMixedDark, fract(d)) * mix(colorMixedDark, colorMixedDark, fract(d));
        if (colorIsDark) {
          color *= mix(colorMixedDark, colorMixedLight, fract(d));
        }
      } else {
        color = vec3(1.);
      }
    }
  }

  color += mix(colorMixedDark, colorMixedLight, fract(d));
  if (mod(index, 2.0) == 0.0) {
    vec2 stY = vUv;
    stY.y = fract((stY.y - offsetLines) + (time * lineSpeed));
    stY = tile(stY, 1., breakFrequency);
    
    if (coloredDivisions) {
      if (colorCurrentIndex) {
        colorSeparation = vec3(colorMixedDark);
      } else {
        colorSeparation = vec3(colorMixedLight);
      }
    } else {
      colorSeparation = vec3(1.0);
    }
    
    color = mix(color, colorSeparation, rect(fract(vec2(stY)), vec2(1., .7), breakSize));
  }
  gl_FragColor = vec4(color, alpha);
}
`