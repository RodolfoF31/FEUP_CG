import { CGFobject, CGFtexture, CGFappearance } from '../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyStem extends CGFobject {
	constructor(scene, color, radius) {
                super(scene);
                this.initBuffers();
                this.color = color;
                this.radius = radius;
                this.cylinder = new MyCylinder(this.scene, 8, 20);
	}

    display(){

        // Cylinder
        this.scene.setColor(...this.scene.stemColor);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(this.scene.stemRadius, this.scene.stemRadius, 1);
        this.scene.stemAppearance.apply();
        this.cylinder.display();


    }
}