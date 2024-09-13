import {CGFobject} from '../lib/CGF.js';

/**
 * MyRectangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyRectangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [
			-1, -1, 0,  
			1, -1, 0,   
			-1, 1, 0,   
			1, 1, 0     
		];

		
		this.indices = [
			0, 1, 2,  
			1, 3, 2,  
			
			
			2, 1, 0,  
			2, 3, 1   
		];

        this.texCoords = [
            0, 1, 
            1, 1, 
            0, 0, 
            1, 0 
        ];

		
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
