import {CGFobject} from '../lib/CGF.js';
import { MyCircle } from './MyCircle.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyReceptacle extends CGFobject {
	constructor(scene, size, color) {
                super(scene);
                this.size = size;
                this.color = color;
                this.circle = new MyCircle(this.scene);
                this.initBuffers();
	}

    display() {
        this.scene.setColor(...this.scene.receptacleColor);
        this.circle.display();
    }
}