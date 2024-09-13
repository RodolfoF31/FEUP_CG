attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float timeFactor;
uniform sampler2D waterMap;
varying vec2 vTextureCoord;

void main() {
    vTextureCoord = aTextureCoord;
    float textureOffset = 0.1 * timeFactor;
    vec3 offset = aVertexNormal * 0.1 * texture2D(waterMap, vTextureCoord + vec2(textureOffset, textureOffset)).b;
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}
