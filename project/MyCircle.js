import {CGFobject} from '../lib/CGF.js';
/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCircle extends CGFobject {
	constructor(scene) {
                super(scene);
                this.initBuffers();
	}

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];
        this.slices = 30;

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        // Now do i circle
        for (var i = 0; i <= this.slices; i++) {
            var x = Math.cos(ang);
            var y = Math.sin(ang);
            this.vertices.push(x, y, 0);
            this.normals.push(0, 0, 1);
            // this.texCoords.push(0.5 + 0.5 * Math.cos(ang), 0.5 - 0.5 * Math.sin(ang));
            ang += alphaAng;
        }

        // Now do the indices
        for (var i = 0; i < this.slices; i++) {
            this.indices.push(i, 0, i+1);
            this.indices.push(i+1, 0, i);
        }

        // circle
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}