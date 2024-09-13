import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParamTriangle extends CGFobject {
	constructor(scene, vertices, texCoords) {
		super(scene);
		this.vertices = vertices;
		this.texCoords = texCoords;
		this.initBuffers();
	}

	initBuffers() {

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0
		];


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

