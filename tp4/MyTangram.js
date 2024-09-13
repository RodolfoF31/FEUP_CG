import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MyTriangleBig } from './MyTriangleBig.js';
import { MyParallelogram } from './MyParallelogram.js';
import { MyDiamond } from './MyDiamond.js';

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
        constructor(scene) {
                super(scene);
                this.initBuffers();

                this.purpleTriangle = new MyTriangleBig(this.scene, [0, 0, 0, 0.5, 0.25, 0.25]);
                this.redTriangle = new MyTriangleBig(this.scene, [0.25, 0.75, 0.75, 0.75, 0.5, 0.5]);
                this.pinkTriangle = new MyTriangleBig(this.scene, [0, 0.5, 0, 1,0.5, 1,0]);
                this.blueTriangle = new MyTriangleBig(this.scene, [0, 0, 1, 0, 0.5, 0.5]);
                this.orangeTriangle = new MyTriangleBig(this.scene, [1, 0, 1, 1, 0.5, 0.5]);
                this.parallelogram = new MyParallelogram(this.scene);
                this.diamond = new MyDiamond(this.scene);
        }

        display() {
                // Blue Triangle
                this.scene.pushMatrix();
                this.scene.translate(0, -2, 0);
                this.scene.tangramTexture.apply();
                this.blueTriangle.display();
                this.scene.popMatrix();

                // Orange Triangle
                this.scene.pushMatrix();
                this.scene.rotate(this.scene.toRadians(90), 0, 0, 1);
                this.scene.translate(-0.2, -2.2, 0);
                this.scene.tangramTexture.apply();
                this.orangeTriangle.display();
                this.scene.popMatrix();

                // Yellow Parallelogram
                this.scene.pushMatrix();
                this.scene.scale(1, -1, 1);
                this.scene.rotate(this.scene.toRadians(135), 0, 0, 1);
                this.scene.translate(0.8, -2, 0);
                this.scene.tangramTexture.apply();
                this.parallelogram.display();
                this.scene.popMatrix();

                // Pink triangle
                this.scene.pushMatrix();
                this.scene.scale(0.7, 0.7, 1);
                this.scene.rotate(this.scene.toRadians(270), 0, 0, 1);
                this.scene.translate(-2.53, 1.15, 0);
                this.scene.tangramTexture.apply();
                this.pinkTriangle.display();
                this.scene.popMatrix();

                // Green Diamond
                this.scene.pushMatrix();
                this.scene.rotate(this.scene.toRadians(-20), 0, 0, 1);
                this.scene.translate(-0.8, 0.2, 0);
                this.scene.tangramTexture.apply();
                this.diamond.display();
                this.scene.popMatrix();

                // Purple Triangle
                this.scene.pushMatrix();
                this.scene.scale(0.4, 0.4, 0.4);
                this.scene.translate(0.29, 8.4, 0);
                this.scene.rotate(this.scene.toRadians(150), 0, 0, 1);
                this.scene.tangramTexture.apply();
                this.purpleTriangle.display();
                this.scene.popMatrix();

                // Red Triangle
                this.scene.pushMatrix();
                this.scene.scale(0.4, 0.4, 0.4);
                this.scene.rotate(this.scene.toRadians(90), 0, 0, 1);
                this.scene.translate(9.6, -2, 0);
                this.scene.tangramTexture.apply();
                this.redTriangle.display();
                this.scene.popMatrix();

        }
}
