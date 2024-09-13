import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPanorama extends CGFobject {
	constructor(scene, texture) {
        super(scene);
        this.texture = texture;
        this.sphere = new MySphere(this.scene, 200, 150, true, 200.0);

        this.scene.panoramaAppearance = new CGFappearance(this.scene);
        this.scene.panoramaAppearance.setAmbient(1, 1, 1, 1.0);
        this.scene.panoramaAppearance.setDiffuse(1, 1, 1, 1.0);
        this.scene.panoramaAppearance.setSpecular(1, 1, 1, 1.0);
        this.scene.panoramaAppearance.setShininess(10.0);

        this.scene.panoramaAppearance.setTexture(this.texture);
        this.scene.panoramaAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.scene.pushMatrix();
        this.scene.panoramaAppearance.apply();
        this.scene.translate(this.scene.camera.position[0], this.scene.camera.position[1], this.scene.camera.position[2]);
        this.sphere.display();
        // super.display();
        this.scene.popMatrix();
    }
}
