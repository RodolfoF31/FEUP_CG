import { CGFobject, CGFtexture, CGFappearance } from '../lib/CGF.js';
import { MyRectangle } from './MyRectangle.js';
import { MyHiveLegs } from './MyHiveLegs.js';
import { MyPollen } from './MyPollen.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyHive extends CGFobject {
	constructor(scene) {
        super(scene);
        this.rectangle = new MyRectangle(this.scene);
        this.leg = new MyHiveLegs(this.scene);

        this.woodenTexture = new CGFtexture(this.scene, "images/thewoodentexture.jpg");
        this.woodenAppearance = new CGFappearance(this.scene);
        this.woodenAppearance.setTexture(this.woodenTexture);
        this.woodenAppearance.setTextureWrap('REPEAT', 'REPEAT');

        this.whitewoodenTexture = new CGFtexture(this.scene, "images/madeirabranca.jpg");
        this.whitewoodenAppearance = new CGFappearance(this.scene);
        this.whitewoodenAppearance.setTexture(this.whitewoodenTexture);
        this.whitewoodenAppearance.setTextureWrap('REPEAT', 'REPEAT');

        this.pollens = [];
    }

    drawHive() {
        // Rectangle 1
        this.scene.pushMatrix();
        this.scene.translate(0, 3, 0);
        this.scene.scale(15, 12, 15);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle 2
        this.scene.pushMatrix();
        this.scene.translate(-15, 0, -15);
        this.scene.scale(15, 15, 15);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle 3
        this.scene.pushMatrix();
        this.scene.translate(15, 0, -15);
        this.scene.scale(15, 15, 15);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle 4
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -30);
        this.scene.scale(15, 15, 15);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();


        // Rectangle 5
        this.scene.pushMatrix();
        this.scene.translate(0, -15, -15);
        this.scene.scale(15, 15, 15);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle Top

        this.scene.pushMatrix();
        this.scene.translate(0, 15, -15);
        this.scene.scale(15, 15, 15);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.woodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle Top 2

        this.scene.pushMatrix();
        this.scene.translate(0, 15.5, -15);
        this.scene.scale(16, 16, 16);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.whitewoodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle White 1

        this.scene.pushMatrix();
        this.scene.translate(0, 12.5, 1);
        this.scene.scale(16, 3, 16);
        this.whitewoodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle White 2
        this.scene.pushMatrix();
        this.scene.translate(0, 12.5, -31);
        this.scene.scale(16, 3, 16);
        this.whitewoodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle White 3
        this.scene.pushMatrix();
        this.scene.translate(16, 12.5, -15);
        this.scene.scale(16, 3, 16);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.whitewoodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();

        // Rectangle White 4
        this.scene.pushMatrix();
        this.scene.translate(-16, 12.5, -15);
        this.scene.scale(16, 3, 16);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.whitewoodenAppearance.apply();
        this.rectangle.display();
        this.scene.popMatrix();


        // Leg 1
        this.scene.pushMatrix();
        this.scene.translate(-13, -21, 0);
        this.scene.scale(1, 3, 1);
        this.woodenAppearance.apply();
        this.leg.display();
        this.scene.popMatrix();

        // Leg 2
        this.scene.pushMatrix();
        this.scene.translate(13, -21, 0);
        this.scene.scale(1, 3, 1);
        this.woodenAppearance.apply();
        this.leg.display();
        this.scene.popMatrix();

        // Leg 3
        this.scene.pushMatrix();
        this.scene.translate(13, -21, -26);
        this.scene.scale(1, 3, 1);
        this.woodenAppearance.apply();
        this.leg.display();
        this.scene.popMatrix();

        // Leg 4
        this.scene.pushMatrix();
        this.scene.translate(-13, -21, -26);
        this.scene.scale(1, 3, 1);
        this.woodenAppearance.apply();
        this.leg.display();
        this.scene.popMatrix();
    }

    displaypollens(){
        for(let i = 0; i < this.pollens.length; i++){
            this.scene.pushMatrix();
            this.scene.pollenAppearance.apply();
            const randomX = this.pollens[i][0][0];
            const randomY = this.pollens[i][0][1];
            const randomZ = this.pollens[i][0][2];
            this.scene.translate(randomX, randomY, randomZ);
            this.scene.scale(0.4, 0.4, 0.4);
            this.pollens[i][1].display();
            this.scene.popMatrix();
        }
    }


    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 5.5, -10);
        this.scene.scale(0.4, 0.4, 0.4);
        this.drawHive();
        this.scene.popMatrix();

        if (this.pollens.length > 0) {
            this.displaypollens();
        }
    }

    addPollen(pollen){
        const randomX = Math.random() * 10 - 5; // Random value between -5 and 5 in X
        const randomZ = Math.random() * 10 - 20; // Random value between -20 and -10 in Z
        this.pollens.push([[randomX,0,randomZ], pollen])
    }

    getPosition() {
        return [0, 7, -10];
    }
}