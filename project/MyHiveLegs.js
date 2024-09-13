import { CGFobject, CGFtexture, CGFappearance } from '../lib/CGF.js';
import { MyRectangle } from './MyRectangle.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyHiveLegs extends CGFobject {
	constructor(scene) {
                super(scene);
                this.rectangle = new MyRectangle(this.scene);

                this.woodenTexture = new CGFtexture(this.scene, "images/thewoodentexture.jpg");
                this.woodenAppearance = new CGFappearance(this.scene);
                this.woodenAppearance.setTexture(this.woodenTexture);
                this.woodenAppearance.setTextureWrap('REPEAT', 'REPEAT');

	}


    display(){

        // Rectangle 1
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.scale(2, 2, 2);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle 2

        this.scene.pushMatrix();
        this.scene.translate(-2, 0, -2);
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle 3

        this.scene.pushMatrix();
        this.scene.translate(2, 0, -2);
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle 4

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -4);
        this.scene.scale(2, 2, 2);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();


        // Rectangle 4
        this.scene.pushMatrix();
        this.scene.translate(0, -2, -2);
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();
    }
}