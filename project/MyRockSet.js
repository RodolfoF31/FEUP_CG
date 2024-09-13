import {CGFobject, CGFappearance} from '../lib/CGF.js';
import {MyRock} from './MyRock.js';

export class MyRockSet extends CGFobject {
	constructor(scene, textures) {
        super(scene);
        this.textures = textures;

        // Get the number of rocks of the bottomLayer
        this.numLayers = 4;
        this.n_bolders = 3;
        this.n_singleRocks = 10;
        this.bolderPositions = [];
        this.singleRocks = [];
        this.singleRockPositions = [];
        this.generateSingleRocks();
        this.generateRockBolderPositions();
        this.gerateSingleRockPositions();
        this.rocks = [];
        this.rockContainerSize = 1.5;
        this.scales = [[getRandom(0.5, 1), getRandom(0.5, 1), getRandom(0.5, 1)]];
        this.rotations = [[getRandom(0, Math.PI * 2), getRandom(0, Math.PI * 2), getRandom(0, Math.PI * 2)]];

        this.rockpos = [[0, 0, 0]];
        this.rocks.push(new MyRock(this.scene, 8, 8));
        for (var i = 1; i < this.numLayers; i++) {
            var sideLength = i + 1;
            var z = -sideLength/2 + 0.5;
            for (var j = 0; j < (i + 1) * (i + 1); j++) {
                var x = -sideLength/2 + 0.5 + (j) % sideLength;
                if (j % sideLength == 0 && j != 0) {
                    z += this.rockContainerSize;
                }

                this.rockpos.push([x, -i, z]);
                this.rocks.push(new MyRock(this.scene, 8, 6));
                this.scales.push([getRandom(0.5, 1), getRandom(0.5, 1), getRandom(0.5, 1)]);
                this.rotations.push([getRandom(0, Math.PI * 2), getRandom(0, Math.PI * 2), getRandom(0, Math.PI * 2)]);
            }
        }

        this.appearance = new CGFappearance(this.scene);
        this.appearance.setTexture(this.textures[0]);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }


        this.display();
    }

    generateRockBolder() {
        for (var i = 0; i < this.rocks.length; i++) {
            this.scene.pushMatrix();
            this.scene.translate(this.rockpos[i][0], this.rockpos[i][1], this.rockpos[i][2]);
            this.scene.rotate(this.rotations[i][0], 1, 0, 0);
            this.scene.rotate(this.rotations[i][1], 0, 1, 0);
            this.scene.rotate(this.rotations[i][2], 0, 0, 1);


            this.appearance.apply();
            this.scene.scale(this.scales[i][0], this.scales[i][1], this.scales[i][2]);
            this.rocks[i].display();
            this.scene.popMatrix();
        }
    }

    generateRockBolderPositions() {
        for (var i = 0; i < this.n_bolders; i++) {
            var randomX = Math.random() * 50;
            var randomZ = Math.random() * 50
            this.bolderPositions.push([randomX, 0, randomZ]);
        }
    }

    generateSingleRocks() {
        for (var i = 0; i < this.n_singleRocks; i++) {
            var rock = new MyRock(this.scene, 8, 6);
            this.singleRocks.push(rock);
        }

    }

    gerateSingleRockPositions() {
        for (var i = 0; i < this.n_singleRocks; i++) {
            var randomX = Math.random() * 50;
            var randomZ = Math.random() * 50;
            this.singleRockPositions.push([randomX, 0, randomZ]);
        }
    }

    display() {
        for (var i = 0; i < this.n_bolders; i++) {
            var randomX = this.bolderPositions[i][0];
            var randomZ = this.bolderPositions[i][2];
            this.scene.pushMatrix();
            this.scene.translate(randomX, 0, randomZ);
            this.generateRockBolder();
            this.scene.popMatrix();
        }

        for (var i = 0; i < this.n_singleRocks; i++) {
            var randomX = this.singleRockPositions[i][0];
            var randomZ = this.singleRockPositions[i][2];
            this.scene.pushMatrix();
            this.scene.translate(randomX, -3.5, randomZ);
            this.singleRocks[i].display();
            this.scene.popMatrix();
        }


    }
}
