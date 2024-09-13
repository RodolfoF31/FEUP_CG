import {CGFobject} from '../lib/CGF.js';
import { MyTriangle } from './MyTriangle.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPetal extends CGFobject {
	constructor(scene, size, color, angle) {
                super(scene);
                this.size = size;
                this.color = color;
                this.angle = (Math.floor(Math.random() * (187 - 100 + 1)) + 100);
                this.initBuffers();
                this.triangle = new MyTriangle(this.scene);
	}

    display(){


        // Triangle 1
        this.scene.pushMatrix();
        this.scene.translate(0, -2, 0);
        this.scene.scale(this.size, this.size, this.size);
        this.triangle.display();
        this.scene.popMatrix();

        // Triangle 2
        this.scene.pushMatrix();
        this.scene.translate(0, -2  , 0);
        this.scene.rotate(this.scene.toRadians(this.angle), 1, 0, 0);
        this.scene.scale(this.size, this.size, this.size);
        this.triangle.display();
        this.scene.popMatrix();
    }
}