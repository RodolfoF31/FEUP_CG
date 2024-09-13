import { CGFobject, CGFtexture, CGFappearance } from '../lib/CGF.js';
import { MyPetal } from './MyPetal.js';
import { MyReceptacle } from './MyReceptacle.js';
import { MyStem } from './MyStem.js';
import { MyLeaf } from './MyLeaf.js';
import { MySphere } from './MySphere.js'
import { MyCircle } from './MyCircle.js';
import { MyPollen } from './MyPollen.js';

/**
 * MyFlower
 * @constructor
 * @param scene - Reference to MyScene object
 * @param petalSize - Size parameter for the petals
 * @param receptacleSize - Size parameter for the receptacle
 * @param stemLength - Length parameter for the stem
 * @param petalColor - Color parameter for the petals
 * @param receptacleColor - Color parameter for the receptacle
 */
export class MyFlower extends CGFobject {
	constructor(scene, petalSize, receptacleSize, stemLength, petalColor, receptacleColor, stemColor, petalNumber, posX, posZ, angle, pollenAngle) {
		super(scene);
		this.initBuffers();
        this.petalSize = petalSize;
        this.receptacleSize = receptacleSize;
        this.stemLength = (Math.floor(Math.random() * (14 - 4 + 1)) + 4);
        this.petalColor = [Math.random(), Math.random(), Math.random(), 1];
        this.receptacleColor = Math.floor(Math.random() * 4) + 1;;
        this.stemColor = stemColor;
		this.petalNumber = petalNumber;
		this.posX = posX;
		this.posZ = posZ;
		this.angle = angle;
		this.pollenAngle = (Math.floor(Math.random() * (360 + 1)));

		this.leaf = new MyLeaf(this.scene);
		this.petal = new MyPetal(this.scene, petalSize, petalColor);
		this.receptacle = new MyReceptacle(this.scene, receptacleSize, receptacleColor);
		this.sphere = new MySphere(this.scene, 10, 10);
		this.circle = new MyCircle(this.scene);
		this.pollen = new MyPollen(this.scene, 10, 10, false, 0.5, [0, 0, 0]);
		this.stems = [];
		this.petals = [];
		this.leaves = [];
		this.displayDecisions = [];

		for (let i = 0; i < 10; i++) {
			this.petals.push(new MyPetal(this.scene, petalSize, petalColor));
		}

		for (let i = 0; i < this.stemLength; i++) {
            this.stems.push(new MyStem(this.scene));
			this.leaves.push(new MyLeaf(this.scene));
			this.displayDecisions.push(Math.random() < 0.5);
        }
	}


	toRadians(angle) {
		return (angle * Math.PI) / 180;
	}


	display() {

		// Display Stem
		let currentHeight = 0;
		let stemCount = 0;

		for (let i = 0; i < this.stemLength; i++) {
			this.scene.pushMatrix();
			this.scene.translate(0, currentHeight, 0);
			this.stems[i].display();
			this.scene.popMatrix();


			currentHeight = currentHeight + 1;
			stemCount = stemCount + 1;

			if (stemCount % 2 == 0) {

				const displayOnRight = this.displayDecisions[i];

				let leafPosY = currentHeight - 1;

				this.scene.pushMatrix();
				if (displayOnRight) {

					this.scene.translate(0.23, leafPosY, 0);
					this.scene.rotate(this.toRadians(315), 0, 0, 1);

				} else {

					this.scene.translate(-0.23, leafPosY, 0);
					this.scene.rotate(this.toRadians(45), 0, 0, 1);
				}
				this.scene.scale(1.3, 1.3, 1.3);
				this.scene.setColor(...this.scene.stemColor);
				this.leaves[i].display();
				this.scene.popMatrix();
			}
		}


		// Display Receptacle
		this.scene.pushMatrix();
		this.scene.translate(0, this.stemLength + 1, 0);
		switch (this.receptacleColor) {
			case 1:
				this.scene.receptacleAppearance.apply();
				break;
			case 2:
				this.scene.receptacleAppearance2.apply();
				break;
			case 3:
				this.scene.receptacleAppearance3.apply();
				break;
			case 4:
				this.scene.receptacleAppearance4.apply();
				break;
			default:
				break;
		}
		this.circle.display();
		this.scene.popMatrix();

		// Display Petals

		const angleIncrement = (this.toRadians(300) ) / 9;
		const radius = this.receptacleSize * 1.5;

		for (let i = 0; i < 9; i++) {

			const angle = i * angleIncrement;

				const x = radius * Math.sin(i * angleIncrement);
				const z = radius * Math.cos(i * angleIncrement);


				this.scene.pushMatrix();
				this.scene.translate(0, this.stemLength + 1, 0);
				const angleToCenter = Math.atan2(-x, -z);
				this.scene.rotate(angleToCenter, 0, 0, 1);
				this.scene.rotate(this.toRadians(225), 0, 0, 1);
				this.scene.setColor(...this.petalColor)
				this.petals[i].display();
				this.scene.popMatrix();

		}

		// Display Pollen
		if (this.pollen != null) {
			this.scene.pushMatrix();
			this.scene.pollenAppearance.apply();
			this.scene.translate(0, this.stemLength + 1, 0.2);
			this.scene.scale(0.4, 0.4, 0.4);
			this.scene.rotate(this.toRadians(this.pollenAngle), 0, 0, 1);
			this.pollen.display();
			this.scene.popMatrix();
		}
	}

	getPosition() {
		return [this.posX, -20 + this.stemLength, this.posZ];
	}

	pickPollen() {
		var copy = this.pollen;
		this.pollen = null;
		return copy;
	}

	hasPollen() {
		return this.pollen != null;
	}
}
