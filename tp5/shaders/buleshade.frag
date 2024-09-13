#ifdef GL_ES
precision highp float;
#endif

varying vec4 vert;

void main() {
    vec3 color = mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 1.0, 0.0), step(0.5, vert.y));
    gl_FragColor = vec4(color, 1.0);
}
