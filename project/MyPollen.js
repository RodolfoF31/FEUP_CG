import {CGFobject} from '../lib/CGF.js';

/**
 * MyPollen
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPollen extends CGFobject {
    constructor(scene, slices, stacks, inverted = false, radius = 1.0, centerPosition = [0, 0, 0]) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.inverted = inverted;
        this.radius = radius;
        this.centerPosition = centerPosition;
        this.scaleUpper = 1.5; // Scaling factor for the upper hemisphere
        this.scaleLower = 1.5; // Scaling factor for the lower hemisphere
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        const stackIncrementAngle = Math.PI / this.stacks;
        const sliceIncrementAngle = 2 * Math.PI / this.slices;

        // From north pole to south pole
        for (let i = 0; i <= this.stacks * 2; i++) {
            let stackAngle = stackIncrementAngle * i;
            let scaleFactor = (i <= this.stacks) ? this.scaleUpper : this.scaleLower;
            let y = Math.cos(stackAngle) * this.radius * scaleFactor + this.centerPosition[1];
            let stackRadius = Math.sin(stackAngle) * this.radius;

            // For each slice determine the x and z
            for (let j = 0; j <= this.slices; j++) {
                let sliceAngle = sliceIncrementAngle * j;
                let x = Math.cos(sliceAngle) * stackRadius + this.centerPosition[0];
                let z = -Math.sin(sliceAngle) * stackRadius + this.centerPosition[2];

                this.vertices.push(x, y, z);
                this.normals.push(x / 100, y / 100, z / 100);
                this.texCoords.push(j / this.slices, i / (this.stacks * 2));
            }
        }

        for (let layer = 0; layer < this.stacks * 2; layer++) {
            for (let slice = 0; slice < this.slices; slice++) {
                if (this.inverted) {
                    this.indices.push(layer * (this.slices + 1) + slice, (layer + 1) * (this.slices + 1) + slice + 1, (layer + 1) * (this.slices + 1) + slice);
                    this.indices.push(layer * (this.slices + 1) + slice, layer * (this.slices + 1) + slice + 1, (layer + 1) * (this.slices + 1) + slice + 1);
                } else {
                    this.indices.push((layer + 1) * (this.slices + 1) + slice, (layer + 1) * (this.slices + 1) + slice + 1, layer * (this.slices + 1) + slice);
                    this.indices.push((layer + 1) * (this.slices + 1) + slice + 1, layer * (this.slices + 1) + slice + 1, layer * (this.slices + 1) + slice);
                }
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
