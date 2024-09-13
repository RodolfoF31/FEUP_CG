import { CGFobject } from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyUnitCubeQuad extends CGFobject {
    constructor(scene, topTexture, frontTexture, rightTexture, backTexture, leftTexture, bottomTexture) {
        super(scene);
        this.face = new MyQuad(this.scene);
        this.topTexture = topTexture;
        this.frontTexture = frontTexture;
        this.rightTexture = rightTexture;
        this.backTexture = backTexture;
        this.leftTexture = leftTexture;
        this.bottomTexture = bottomTexture;
    }

    display() {
        // Front face
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.frontTexture.bind();
        this.face.display();
        this.scene.popMatrix();

        // Back face
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.backTexture.bind();
        this.face.display();
        this.scene.popMatrix();

        // Top face
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.topTexture.bind();
        this.face.display();
        this.scene.popMatrix();

        // Bottom face
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.bottomTexture.bind();
        this.face.display();
        this.scene.popMatrix();

        // Left face
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.leftTexture.bind();
        this.face.display();
        this.scene.popMatrix();

        // Right face
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.rightTexture.bind();
        this.face.display();
        this.scene.popMatrix();
    }
}
