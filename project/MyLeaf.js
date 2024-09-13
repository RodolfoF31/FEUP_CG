import {CGFobject} from '../lib/CGF.js';
import { MyTriangleBig } from './MyTriangleBig.js';
import { MyCylinder } from './MyCylinder.js';
import { MyCircle } from './MyCircle.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyLeaf extends CGFobject {
	constructor(scene) {
                super(scene);
                this.initBuffers();
                this.triangle = new MyTriangleBig(this.scene);
                this.cylinder = new MyCylinder(this.scene, 8, 8);
                this.circle = new MyCircle(this.scene);
	}

    toRadians(angle) {
        return (angle * Math.PI) / 180;
    }

    display(){

         // Cylinder 
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(this.scene.stemRadius / 10, this.scene.stemRadius / 10, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();

        // Circle
        this.scene.pushMatrix();
        this.scene.scale(0.15, 0.15, 0.15);
        this.scene.translate(0, 5, 0);
        this.scene.rotate((180 * Math.PI) / 180, 0, 0, 1);
        this.scene.scale(1, 2, 1); 
        this.circle.display();
        this.scene.popMatrix();

    }
}