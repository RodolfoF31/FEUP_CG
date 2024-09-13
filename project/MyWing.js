import {CGFobject} from '../lib/CGF.js';

/**
 * MyElipsoid
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyWing extends CGFobject {
    constructor(scene, slices, radiusX = 1.0, radiusZ = 1.0) {
        super(scene);
        this.slices = slices;
        this.radiusX = radiusX;
        this.radiusZ = radiusZ;

        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        const slices_incrementAngle = 2*Math.PI/this.slices;

        for (var i = 0; i < this.slices+1; i++) {
            var x = Math.cos(slices_incrementAngle * i) * this.radiusX;
            var z = -Math.sin(slices_incrementAngle * i) * this.radiusZ;

            this.vertices.push(x, 0, z);
            this.normals.push(0, 1, 0);
            this.texCoords.push(i/this.slices, 0);
        }

        this.vertices.push(0, 0, 0);
        this.normals.push(0, 1, 0);
        this.texCoords.push(0.5, 0.5);

        for (var i = 0; i < this.slices; i++) {
            this.indices.push(i, i+1, this.slices);
            this.indices.push(this.slices, i+1, i);
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
