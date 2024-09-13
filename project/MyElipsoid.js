import {CGFobject} from '../lib/CGF.js';

/**
 * MyElipsoid
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyElipsoid extends CGFobject {
    constructor(scene, slices, stacks, onlyHalf = false, radiusX = 1.0, radiusY = 1.0, radiusZ = 1.0, centerPosition = [0, 0, 0]) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.radiusZ = radiusZ;
        this.onlyHalf = onlyHalf;
        this.centerPosition = centerPosition;

        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        const stack_incrementAngle = (Math.PI/2)/this.stacks;
        const slices_incrementAngle = 2*Math.PI/this.slices;

        const limit_stacks = this.onlyHalf ? this.stacks : this.stacks*2;

        // From north pole to south pole
        for (var i = 0; i < limit_stacks+1; i++) {
            var y = Math.cos(stack_incrementAngle * i) * this.radiusY + this.centerPosition[1];
            var stack_radius = Math.sin(stack_incrementAngle * i);

            // for each slice determine the x and z
            for (var j = 0; j < this.slices+1; j++) {
                var x = Math.cos(slices_incrementAngle * j) * stack_radius * this.radiusX + this.centerPosition[0];
                var z = -Math.sin(slices_incrementAngle * j) * stack_radius * this.radiusZ + this.centerPosition[2];


                this.vertices.push(x, y, z);
                this.normals.push(x/100, y/100, z/100);
                this.texCoords.push(j/this.slices, i/(limit_stacks));
            }
        }


        for (var layer = 0; layer < limit_stacks; layer++) {
            for (var slice = 0; slice < this.slices; slice++) {
                this.indices.push((layer+1)*(this.slices+1)+slice, (layer+1)*(this.slices+1)+slice+1,  layer*(this.slices+1)+slice);
                this.indices.push((layer+1)*(this.slices+1)+slice+1, layer*(this.slices+1)+slice+1, layer*(this.slices+1)+slice);
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
