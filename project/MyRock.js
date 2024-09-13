import {CGFobject} from '../lib/CGF.js';

export class MyRock extends CGFobject {
	constructor(scene, slices, stacks, radius = 1.0) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
		this.radius = radius;

        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
		this.texCoords = [];

		const stack_incrementAngle = (Math.PI/2)/this.stacks;
		const slices_incrementAngle = 2*Math.PI/this.slices;

        // From north pole to south pole
        for (var i = 0; i < this.stacks * 2 + 1; i++) {
            var y = Math.cos(stack_incrementAngle * i) * this.radius;
            var stack_radius = Math.sin(stack_incrementAngle * i);

            // for each slice determine the x and z
            for (var j = 0; j < this.slices + 1; j++) {
                var x = Math.cos(slices_incrementAngle * j) * stack_radius * this.radius;
                var z = -Math.sin(slices_incrementAngle * j) * stack_radius * this.radius;
                // Length of the vector to normalize it
                var length = Math.sqrt(x*x+ y*y + z*z);


                // Add offset with a probability of 0.5
                // To make the rock doesn't have cuts in the "joints"
                if (i != 0 && i != this.stacks * 2 && j != 0 && j != this.slices) {
                    var offset = Math.random(); // Adjust the offset value as needed
                    if (x <= 0) {
                        x += (x/length + 0.1) * offset;
                    }
                    else {
                        x += (x/length - 0.1) * offset;
                    }
                    z += (z/length) * offset;

                }

                this.vertices.push(x, y, z);
                this.normals.push(x/length, y/length, z/length);
                this.texCoords.push(j / this.slices, i / (this.stacks * 2));
            }
        }

		for (var layer = 0; layer < this.stacks*2; layer++) {
			for (var slice = 0; slice < this.slices; slice++) {
				if (this.inverted) {
					this.indices.push(layer*(this.slices+1)+slice, (layer+1)*(this.slices+1)+slice+1, (layer+1)*(this.slices+1)+slice);
					this.indices.push(layer*(this.slices+1)+slice, layer*(this.slices+1)+slice+1, (layer+1)*(this.slices+1)+slice+1);
				}
				else {
					this.indices.push((layer+1)*(this.slices+1)+slice, (layer+1)*(this.slices+1)+slice+1,  layer*(this.slices+1)+slice);
					this.indices.push((layer+1)*(this.slices+1)+slice+1, layer*(this.slices+1)+slice+1, layer*(this.slices+1)+slice);
				}
			}
		}

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
