import { CGFobject } from '../lib/CGF.js';
import { MyFlower } from './MyFlower.js';

export class MyGarden extends CGFobject {
    constructor(scene, numRows, numCols, numFlowers) {
        super(scene);
        this.numRows = numRows;
        this.numCols = numCols;
        this.flowers = [];
        this.generateFlowers(numFlowers);
    }

    generateFlowers(numFlowers) {
        const startX = -(Math.floor(Math.random() * (20 - 5 + 1)) + 5) * (this.numCols - 1) / 2;
        const startZ = -(Math.floor(Math.random() * (20 - 5 + 1)) + 5) * (this.numRows - 1) / 2;

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                let angle = (Math.floor(Math.random() * (360 - 30 + 1)) + 30);
                const posX = startX + j * (Math.floor(Math.random() * (20 - 10 + 1)) + 10);
                const posZ = startZ + i * (Math.floor(Math.random() * (20 - 10 + 1)) + 10);
                const flower = new MyFlower(this.scene, 1, 1, 5, [1, 1, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1], 6, posX, posZ, angle);
                this.flowers.push(flower);
            }
        }
    }

    display() {
        for (const flower of this.flowers) {
            this.scene.pushMatrix();
            this.scene.translate(flower.posX, 0, flower.posZ);
            this.scene.rotate(flower.angle * Math.PI / 180, 0, 1, 0);
            flower.display();
            this.scene.popMatrix();
        }
    }

    getFlowers() {
        return this.flowers;
    }

    setFlowers(flowers) {
        this.flowers = flowers;
    }
}
