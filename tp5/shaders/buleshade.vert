attribute vec3 aVertexPosition;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float normScale;
uniform float timeFactor;

varying vec4 vert;

void main() {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.x + normScale + sin(timeFactor), aVertexPosition.y, aVertexPosition.z, 1.0);
    vert = gl_Position;
}