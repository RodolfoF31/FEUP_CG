attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;

void main() {

    float swayAmount = 0.2; 
    float speedFactor = 0.4; 

    vec3 positionOffset = vec3(
        sin(timeFactor * speedFactor + aVertexPosition.y) * swayAmount * aVertexPosition.y, 
        0.0,
        cos(timeFactor * speedFactor + aVertexPosition.y) * swayAmount * aVertexPosition.y
    );

    vec3 displacedPosition = aVertexPosition + positionOffset;
    gl_Position = uPMatrix * uMVMatrix * vec4(displacedPosition, 1.0);
    vTextureCoord = aTextureCoord;
}
