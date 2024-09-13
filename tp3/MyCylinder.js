import { CGFobject } from '../lib/CGF.js';

/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }

    addNormals(i, angle) {
        let x = Math.cos(i * angle + angle/2);
        let y = Math.sin(i * angle + angle/2);
        let z = 0;

        for (let j = 0; j < 4; j++) {
            this.normals.push(x, y, z);
        }
    }

    addFaces(index) {
        // Outside Faces
        this.indices.push(index+2, index, index+1);
        this.indices.push(index+1, index+3, index+2);
        // Inside Faces
        this.indices.push(index+1, index, index+2);
        this.indices.push(index+2, index+3, index+1);
    }

    addVertices(currentX, currentY, currentZ, nextX, nextY, nextZ) {
        this.vertices.push(currentX, currentY, currentZ);
        this.vertices.push(nextX, nextY, currentZ);

        this.vertices.push(currentX, currentY, nextZ);
        this.vertices.push(nextX, nextY, nextZ);
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        let index = 0;
        let angle = 2 * Math.PI / this.slices;
        let floor = 1 / this.stacks;

        for (let i = 0; i < this.slices; i++) {
            // Current vertex
            let currentX = Math.cos(i * angle);
            let currentY = Math.sin(i * angle);

            // Next vertex
            let nextX = Math.cos((i + 1) * angle);
            let nextY = Math.sin((i + 1) * angle);

            for (let k = 0; k < this.stacks; k++) {
                let nextZ = (k+1) * floor;
                let currentZ = k * floor;

                this.addVertices(currentX, currentY, currentZ, nextX, nextY, nextZ);
                this.addFaces(index)
                this.addNormals(i, angle);

                index += 4;
            }
        }

        // Normalize normals
        for (let i = 0; i < this.normals.length; i += 3) {
            let x = this.normals[i];
            let y = this.normals[i + 1];
            let z = this.normals[i + 2];

            let length = Math.sqrt(x * x + y * y + z * z);

            this.normals[i] /= length;
            this.normals[i + 1] /= length;
            this.normals[i + 2] /= length;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}