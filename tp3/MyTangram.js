import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyTriangleBig } from './MyTriangleBig.js';
import { MyParallelogram } from './MyParallelogram.js';
import { MyDiamond} from './MyDiamond.js';
import { MyTriangleSmall } from './MyTriangleSmall.js';

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
                super(scene);
                this.triangle = new MyTriangleBig(this.scene);
                this.parallelogram = new MyParallelogram(this.scene);
                this.diamond = new MyDiamond(this.scene);
                this.triangleSmall = new MyTriangleSmall(this.scene);
                this.initMaterials();
	}

        initMaterials() {
                // Blue Triangle
                this.triangleBlueMaterial = new CGFappearance(this.scene);
                this.triangleBlueMaterial.setAmbient(1, 0, 0, 1.0);
                this.triangleBlueMaterial.setDiffuse(0, 0, 255, 1.0);
                this.triangleBlueMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
                this.triangleBlueMaterial.setShininess(10.0);

                // Orange Triangle
                this.triangleOrangeMaterial = new CGFappearance(this.scene);
                this.triangleOrangeMaterial.setAmbient(1.0, 0.0, 0.0, 1.0);
                this.triangleOrangeMaterial.setDiffuse(255 / 255, 165 / 255, 0, 1.0);
                this.triangleOrangeMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
                this.triangleOrangeMaterial.setShininess(10.0);

                // Yellow Parallelogram
                this.parallelogramYellowMaterial = new CGFappearance(this.scene);
                this.parallelogramYellowMaterial.setAmbient(1, 0, 0, 1.0);
                this.parallelogramYellowMaterial.setDiffuse(255 / 255, 255 / 255, 0, 1.0);
                this.parallelogramYellowMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
                this.parallelogramYellowMaterial.setShininess(10.0);

                // Pink Triangle
                this.trianglePinkMaterial = new CGFappearance(this.scene);
                this.trianglePinkMaterial.setAmbient(1, 0, 0, 1);
                this.trianglePinkMaterial.setDiffuse(255 / 255, 105 / 255, 180 / 255,  1);
                this.trianglePinkMaterial.setSpecular(0.9, 0.9, 0.9, 1);
                this.trianglePinkMaterial.setShininess(10.0);

                // Green Diamond
                this.diamondGreenMaterial = new CGFappearance(this.scene);
                this.diamondGreenMaterial.setAmbient(1, 0, 0, 1.0);
                this.diamondGreenMaterial.setDiffuse(0, 255 / 255, 0, 1.0);
                this.diamondGreenMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
                this.diamondGreenMaterial.setShininess(10.0);

                // Purple Triangle
                this.trianglePurpleMaterial = new CGFappearance(this.scene);
                this.trianglePurpleMaterial.setAmbient(1, 0, 0, 1);
                this.trianglePurpleMaterial.setDiffuse(128 / 255, 0, 128 / 255, 1);
                this.trianglePurpleMaterial.setSpecular(0.9, 0.9, 0.9, 1);
                this.trianglePurpleMaterial.setShininess(10.0);

                // Red Triangle
                this.triangleRedMaterial = new CGFappearance(this.scene);
                this.triangleRedMaterial.setAmbient(1, 0, 0, 1);
                this.triangleRedMaterial.setDiffuse(255 / 255, 0, 0, 1);
                this.triangleRedMaterial.setSpecular(0.9, 0.9, 0.9, 1);
                this.triangleRedMaterial.setShininess(10.0);
            }

            display() {
                // Blue Triangle
                this.scene.pushMatrix();
                this.scene.translate(0, -2, 0);
                this.triangleBlueMaterial.apply();
                this.triangle.display();
                this.scene.popMatrix();
        
                // Orange Triangle
                this.scene.pushMatrix();
                this.scene.rotate(this.scene.toRadians(90), 0, 0, 1);
                this.scene.translate(-0.2, -2.2, 0);
                this.triangleOrangeMaterial.apply();
                this.triangle.display();
                this.scene.popMatrix();
        
                // Yellow Parallelogram
                this.scene.pushMatrix();
                this.scene.scale(1, -1, 1);
                this.scene.rotate(this.scene.toRadians(135), 0, 0, 1);
                this.scene.translate(0.8, -2, 0);
                this.parallelogramYellowMaterial.apply();
                this.parallelogram.display();
                this.scene.popMatrix();
        
                // Pink triangle
                this.scene.pushMatrix();
                this.scene.scale(0.7, 0.7, 1);
                this.scene.rotate(this.scene.toRadians(270), 0, 0, 1);
                this.scene.translate(-2.53, 1.15, 0);
                this.trianglePinkMaterial.apply();
                this.triangle.display();
                this.scene.popMatrix();
        
                // Green Diamond
                this.scene.pushMatrix();
                this.scene.rotate(this.scene.toRadians(-20), 0, 0, 1);
                this.scene.translate(-0.8, 0.2, 0);
                this.scene.customMaterial.apply();
                this.diamond.display();
                this.scene.popMatrix();
        
                // Purple Triangle
                this.scene.pushMatrix();
                this.scene.scale(0.4, 0.4, 0.4);
                this.scene.translate(0.29, 8.4, 0);
                this.scene.rotate(this.scene.toRadians(150), 0, 0, 1);
                this.trianglePurpleMaterial.apply();
                this.triangle.display();
                this.scene.popMatrix();
        
                // Red Triangle
                this.scene.pushMatrix();
                this.scene.scale(0.4, 0.4, 0.4);
                this.scene.rotate(this.scene.toRadians(90), 0, 0, 1);
                this.scene.translate(9.6, -2, 0);
                this.triangleRedMaterial.apply();
                this.triangle.display();
                this.scene.popMatrix();
        };
        


}

