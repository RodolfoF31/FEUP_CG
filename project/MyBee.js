import { CGFobject, CGFtexture, CGFappearance } from '../lib/CGF.js';
import { MyElipsoid } from './MyElipsoid.js';
import { MyWing } from './MyWing.js';
import { MyFlower } from './MyFlower.js';
import { MyHive } from './MyHive.js';



export class MyBee extends CGFobject {
    constructor(scene, x=0, y=0, z=0, orientation=0, speed=0) {
        super(scene);
        this.x = x;
        this.y = y;
        this.z = z;
        this.orientation = orientation;
        this.yOrientation = 0;

        this.directionVector = [-1, 0]; // X-axis AND Z-axis
        this.speed = speed;
        this.isDescending = false;
        this.inAutoPilot = false;
        this.target = null;
        this.pollen = null;

        this.head = new MyElipsoid(scene, 10, 10, false, 1, 1.5, 1);
        this.eye = new MyElipsoid(scene, 10, 10, true, 0.2, 0.2, 0.3);
        this.body = new MyElipsoid(scene, 10, 10, false, 1.5, 1.5, 1.5);
        this.backBody = new MyElipsoid(scene, 10, 10, false, 1.5, 3, 1.5);
        this.wing = new MyWing(scene, 10, 1.5, 0.5);
        this.leg = new MyElipsoid(scene, 10, 10, false, 0.1, 0.1, 0.5);
        this.antenas = new MyElipsoid(scene, 10, 10, false, 0.1, 0.5, 0.1);
        this.sphere = new MyElipsoid(scene, 10, 10, false, 0.05, 0.05, 0.05);
        this.wingsPosition = 0;

        this.scene.stripesTexture = new CGFtexture(this.scene, "images/stripes.jpg");
        this.scene.stripesAppearance = new CGFappearance(this.scene);
        this.scene.stripesAppearance.setTexture(this.scene.stripesTexture);
        this.scene.stripesAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    drawRightWing() {
        this.scene.pushMatrix();
        this.scene.translate(1.5, 0.25, 1.25);
        this.scene.rotate(Math.PI/1.5, 0, 1, 0);
        this.scene.setColor(1,1,1,0.1);
        this.scene.setEmission(1,1,1,0.1);
        this.wing.display();
        this.scene.popMatrix();
    }

    drawLeftWing() {
        this.scene.pushMatrix();
        this.scene.translate(1.5, 0.25, -1.25);
        this.scene.rotate(-Math.PI/1.5, 0, 1, 0);
        this.scene.setColor(1,1,1,0.1);
        this.scene.setEmission(1,1,1,0.1);
        this.wing.display();
        this.scene.popMatrix();
    }

    // TODO - fix the collision detection for a bigger area and When "O" pressed send to the HIVE
    drawBee() {
    // Head
        this.scene.pushMatrix();
        this.scene.stripesAppearance.apply();
        this.scene.scale(0.5, 0.5, 0.5);
        this.head.display();
        this.scene.popMatrix();

        // Eyes
        // Right Eye
        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.rotate(Math.PI/2.8, 1, 0, 0);
        this.scene.translate(0, 0.5, -0.2);
        this.eye.display();
        this.scene.popMatrix();

        // Left Eye
        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.rotate(-Math.PI/2.8, 1, 0, 0);
        this.scene.translate(0, 0.5, 0.2);
        this.eye.display();
        this.scene.popMatrix();

        // Body
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.stripesAppearance.apply();
        this.scene.translate(2, 0, 0);
        this.scene.rotate(Math.PI/3, 0, 0, 1);
        this.body.display();
        this.scene.popMatrix();

        // Back Body
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.stripesAppearance.apply();
        this.scene.translate(5, -2, 0);
        this.scene.rotate(Math.PI/3, 0, 0, 1);
        this.backBody.display();
        this.scene.popMatrix();

        // Legs
        // Right Legs
        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.translate(0.8, -0.5, 0.8);
        this.scene.rotate(-Math.PI/1.5, 1, 0, 0);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.translate(1.3, -0.5, 0.8);
        this.scene.rotate(-Math.PI/1.5, 1, 0, 0);
        this.leg.display();
        this.scene.popMatrix();

        // Left Legs
        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.translate(0.8, -0.5, -0.8);
        this.scene.rotate(Math.PI/1.5, 1, 0, 0);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.translate(1.3, -0.5, -0.8);
        this.scene.rotate(Math.PI/1.5, 1, 0, 0);
        this.leg.display();
        this.scene.popMatrix();

        // Antenas
        // Right Antena
        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.scale(0.5, 1, 0.5);
        this.scene.translate(0, 1, 0.3);
        this.scene.rotate(Math.PI/12, 0, 0, 1); // Inclination in Z-axis
        this.antenas.display();
        this.scene.popMatrix();

        // Sphere on the antena
        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.translate(-0.06, 1.45, 0.15);
        this.sphere.display();
        this.scene.popMatrix();

        // Left Antena
        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.scale(0.5, 1, 0.5);
        this.scene.translate(0, 1, -0.3);
        this.scene.rotate(Math.PI/12, 0, 0, 1);
        this.antenas.display();
        this.scene.popMatrix();

        // Sphere on the antena
        this.scene.pushMatrix();
        this.scene.setColor(0,0,0,1);
        this.scene.translate(-0.06, 1.45, -0.15);
        this.sphere.display();
        this.scene.popMatrix();

        // Wings
        // Right Wing
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/8 * Math.abs(Math.sin(this.wingsPosition)), 1, 0, 0);
        this.drawRightWing();
        this.scene.popMatrix();

        // Left Wing
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/8 * Math.abs(Math.sin(this.wingsPosition)), 1, 0, 0);
        this.drawLeftWing();
        this.scene.popMatrix();
        this.wingsPosition += 0.4;

        // pollen

        // If the pollen was picked up then the bee should go back up
        if (this.pollen) {
            this.scene.pushMatrix();
            this.scene.pollenAppearance.apply();
            this.scene.translate(1, -1, 0);
            this.scene.scale(0.4, 0.4, 0.4);
            this.pollen.display();
            this.scene.popMatrix();
        }
    }

    update(delta_t, speedFactor) {
        var velocityVector = [this.speed * Math.cos(this.orientation), this.speed * Math.sin(this.yOrientation), this.speed * -Math.sin(this.orientation)];
        const displacementVector = [velocityVector[0] * delta_t * speedFactor, velocityVector[1] * delta_t * speedFactor, velocityVector[2] * delta_t * speedFactor];
        this.x += displacementVector[0];
        this.y += displacementVector[1];
        this.z += displacementVector[2];
    }

    turn(v) {
        this.orientation += v;
        this.updateDirectionVector();
    }

    accelerate(v) {
        this.speed += v;
    }

    updateDirectionVector() {
        this.directionVector = [
            -Math.cos(this.orientation),
            Math.sin(this.orientation)
        ];
        // console.log(this.directionVector);
    }

    display() {
        this.update(1, this.scene.speedFactor);

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        if (this.scene.gui.isKeyPressed("KeyW") && !this.target) {
            this.accelerate(-0.1);
        }

        if (this.scene.gui.isKeyPressed("KeyS") && !this.target) {
            this.accelerate(0.1);
        }

        if (this.scene.gui.isKeyPressed("KeyA") && !this.target) {
            this.turn(0.2 * this.scene.speedFactor);
        }

        if (this.scene.gui.isKeyPressed("KeyD") && !this.target) {
            this.turn(-0.2 * this.scene.speedFactor);
        }

        if (this.scene.gui.isKeyPressed("KeyR")) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.orientation = 0;
            this.yOrientation = 0;
            this.speed = 0;
            this.isDescending = false;
        }

        // To go down
        if (this.scene.gui.isKeyPressed("KeyF") && !this.isDescending) {
            this.isDescending = true;
            this.yOrientation = 0.3;
        }
        // To go back up Or Pick up the pollen from the flower
        else if (this.scene.gui.isKeyPressed("KeyP") && this.isDescending) {
            this.isDescending = false;
            this.yOrientation = -0.3;
            if (this.target && this.target instanceof MyFlower) {
                this.pollen = this.target.pickPollen();
                this.target = null;
            }
        }
        // If the bee has pollen and the key O is pressed then the bee should go back to the hive
        else if (this.scene.gui.isKeyPressed("KeyO") && !this.isDescending && this.pollen) {
            // If the bee is at the hive then it should drop the pollen
            if (this.target && this.target instanceof MyHive) {
                this.scene.hive.addPollen(this.pollen);
                this.pollen = null;
                this.target = null;
                console.log("Dropped pollen");
            }
        }
        // To keep the bee on a maximum height
        else if (this.y >= 0) {this.yOrientation = 0; this.y = 0; this.isDescending = false;}

        this.scene.rotate(this.orientation, 0, 1, 0);
        this.scene.scale(this.scene.scaleFactor, this.scene.scaleFactor, this.scene.scaleFactor);
        this.drawBee();
        this.scene.popMatrix();
    }

    getPosition() {
        return [this.x, this.y, this.z];
    }

    setTarget(target) {
        console.log("Setting target");
        this.target = target;
        const [targetX, targetY, targetZ] = this.target.getPosition();
        this.x = targetX;
        this.y = targetY;
        this.z = targetZ;
        this.orientation = 0;
        this.yOrientation = 0;
        this.speed = 0;
    }

    getTarget() {
        return this.target;
    }

    hasPollen() {
        return this.pollen != null;
    }
}
