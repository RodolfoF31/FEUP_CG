import { CGFobject } from '../lib/CGF.js';
import { MyParamTriangle } from './MyParamTriangle.js';

export class MyGrass extends CGFobject {
    constructor(scene) {
        super(scene);
        this.grass = [];
        this.generateGrass();
    }

    generateGrass() {
        const numGrass = 1000; // Number of grass elements

        for (let i = 0; i < numGrass; i++) {
            const x = Math.random() * 100; // Random x position between -50 and 50
            const y = 0; // Random y position
            const z = Math.random() * 80; // Random z position between -50 and 50

            // Generate narrower random offsets for each vertex
            const offset1 = Math.random() * 0.1;
            const offset2 = Math.random() * 0.1;
            const offset3 = Math.random() * 0.1;

            const vertices = [
                x, y, z + offset1,
                x + offset2, 0, z + offset3,
                x + offset1, Math.random() + 2, z // Random height between 1 and 3
            ];

            const textCoords = [
                0, 0,
                1, 0,
                0.5, 1
            ];

            const triangle = new MyParamTriangle(this.scene, vertices, textCoords);

            this.grass.push(triangle);
        }
    }

    drawGrass() {
        for (let i = 0; i < this.grass.length; i++) {
            this.grass[i].display();
        }
    }


    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, -20, 0);
        this.drawGrass();
        this.scene.popMatrix();
    }
}
