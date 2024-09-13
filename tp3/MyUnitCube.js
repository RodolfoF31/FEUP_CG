import {CGFobject} from '../lib/CGF.js';

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
    constructor(scene) {
		super(scene);
		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [
            -0.5, -0.5, 0.5,  //0 // Left bottom front
            0.5, -0.5, 0.5,   //1 // Right bottom front
            -0.5, 0.5, 0.5,   //2 // Left top front          1
            0.5, 0.5, 0.5,    //3 // Right top front

            -0.5, -0.5, -0.5,  //4 // Left bottom back
            0.5, -0.5, -0.5,   //5 // Right bottom back
            -0.5, 0.5, -0.5,   //6 // Left top back
            0.5, 0.5, -0.5,    //7 // Right top back

            -0.5, -0.5, 0.5,  //0 // Left bottom front
            0.5, -0.5, 0.5,   //1 // Right bottom front
            -0.5, 0.5, 0.5,   //2 // Left top front           2
            0.5, 0.5, 0.5,    //3 // Right top front

            -0.5, -0.5, -0.5,  //4 // Left bottom back
            0.5, -0.5, -0.5,   //5 // Right bottom back
            -0.5, 0.5, -0.5,   //6 // Left top back
            0.5, 0.5, -0.5,    //7 // Right top back

            -0.5, -0.5, 0.5,  //0 // Left bottom front
            0.5, -0.5, 0.5,   //1 // Right bottom front
            -0.5, 0.5, 0.5,   //2 // Left top front            3
            0.5, 0.5, 0.5,    //3 // Right top front

            -0.5, -0.5, -0.5,  //4 // Left bottom back
            0.5, -0.5, -0.5,   //5 // Right bottom back
            -0.5, 0.5, -0.5,   //6 // Left top back
            0.5, 0.5, -0.5,    //7 // Right top back
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            // Front face
			0, 1, 2,
            3, 2, 1,
            2, 3, 0,
            1, 0, 3,
            // Back face
            4, 6, 5,
            5, 6, 7,
            6, 4, 7,
            7, 4, 5,
            // Left face
            0, 2, 4,
            4, 2, 6,
            2, 0, 6,
            6, 0, 4,
            // Right face
            1, 5, 3,
            3, 5, 7,
            5, 1, 7,
            7, 1, 3,
            // Top face
            2, 3, 6,
            6, 3, 7,
            3, 2, 7,
            7, 2, 6,
            // Bottom face
            0, 1, 4,
            4, 1, 5,
            1, 0, 5,
            5, 0, 4
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,

            0, -1, 0,
            0, -1, 0,
            0, 1, 0,
            0, 1, 0,
            0, -1, 0,
            0, -1, 0,
            0, 1, 0,
            0, 1, 0,

            -1, 0, 0,
            1, 0, 0,
            -1, 0, 0,
            1, 0, 0,
            -1, 0, 0,
            1, 0, 0,
            -1, 0, 0,
            1, 0, 0,



            

        ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

