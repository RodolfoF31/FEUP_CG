import {CGFobject} from '../lib/CGF.js';
import { MyTriangleBig } from './MyTriangleBig.js';
import { MyParallelogram } from './MyParallelogram.js';
import { MyDiamond} from './MyDiamond.js';

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
                super(scene);
                this.initBuffers();
                this.triangle = new MyTriangleBig(this.scene);
                this.parallelogram = new MyParallelogram(this.scene);
                this.diamond = new MyDiamond(this.scene);
	}

	display() {
        // Blue Triangle
        this.scene.pushMatrix();
        this.scene.setColor(0, 0, 1, 1);
        this.scene.translate(0, -2, 0);
        this.triangle.display();
        this.scene.popMatrix();

        // Orange Triangle
        this.scene.pushMatrix();
        this.scene.setColor(1, 0.61, 0, 1);
        this.scene.rotate(this.scene.toRadians(90), 0, 0, 1);
        this.scene.translate(-0.2, -2.2, 0);
        this.triangle.display();
        this.scene.popMatrix();

        // Yellow Parallelogram
        this.scene.pushMatrix();
        this.scene.setColor(1, 1, 0, 1);
        this.scene.scale(1, -1, 1);
        this.scene.rotate(this.scene.toRadians(135), 0, 0, 1);
        this.scene.translate(0.8, -2, 0);
        this.parallelogram.display();
        this.scene.popMatrix();

        // Pink triangle
        this.scene.pushMatrix();
        this.scene.setColor(1, 0.61, 0.81, 1);
        this.scene.scale(0.7, 0.7, 1);
        this.scene.rotate(this.scene.toRadians(270), 0, 0, 1);
        this.scene.translate(-2.53, 1.15, 0);
        this.triangle.display();
        this.scene.popMatrix();

        // Green Diamond
        this.scene.pushMatrix();
        this.scene.setColor(0, 1, 0, 1);
        this.scene.rotate(this.scene.toRadians(-20), 0, 0, 1);
        this.scene.translate(-0.8, 0.2, 0);
        this.diamond.display();
        this.scene.popMatrix();

        // Purple Triangle
        this.scene.pushMatrix();
        this.scene.setColor(0.59, 0.31, 0.75, 1);
        this.scene.scale(0.4, 0.4, 0.4);
        this.scene.translate(0.29, 8.4, 0);
        this.scene.rotate(this.scene.toRadians(150), 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        // Red Triangle
        this.scene.pushMatrix();
        this.scene.setColor(1, 0.11, 0.11, 1);
        this.scene.scale(0.4, 0.4, 0.4);
        this.scene.rotate(this.scene.toRadians(90), 0, 0, 1);
        this.scene.translate(9.6, -2, 0);
        this.triangle.display();
        this.scene.popMatrix();
	}
}

