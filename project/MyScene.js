import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyPanorama } from "./MyPanorama.js";
import { MyPlane } from "./MyPlane.js";
import { MyBee } from "./MyBee.js";
import { MyPetal } from "./MyPetal.js";
import { MyReceptacle} from "./MyReceptacle.js";
import { MyFlower } from "./MyFlower.js";
import { MyRock } from "./MyRock.js";
import { MyRockSet } from "./MyRockSet.js";
import { MyHive } from "./MyHive.js";


import { MyGarden } from "./MyGarden.js";
import { MyGrass } from "./MyGrass.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
    this.petalSize = 1;
    this.receptacleSize = 1;
    this.petalNumber = 6;
    this.petalColor = [0,1,0,1];
    this.stemColor = [0, 1, 0, 1];
    this.petalangle = 180;
    this.receptacleColor = [0, 1, 0, 1];
    this.stemRadius = 0.2;
    this.numRows = 2;
    this.numCols = 2;
    this.beePosition = 0;

  }
  init(application) {

    super.init(application);

    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.plane = new MyPlane(this, 30);
    this.petal = new MyPetal(this);
    this.receptacle = new MyReceptacle(this);
    this.flower = new MyFlower(this, this.petalSize, this.receptacleSize, this.stemLength, this.petalColor, this.receptacleColor);
    this.singleRock = new MyRock(this, 8, 8);
    this.garden = new MyGarden(this, 1, 1, 5);
    this.hive = new MyHive(this);

    this.grass = new MyGrass(this);


    this.panoramaTexture = new CGFtexture(this, "images/panorama.jpg");
    this.myPanorama = new MyPanorama(this, this.panoramaTexture);

    this.rockTexture = new CGFtexture(this, "images/rock.jpg");
    this.rockAppearance = new CGFappearance(this);
    this.rockAppearance.setTexture(this.rockTexture);
    this.rockAppearance.setTextureWrap('REPEAT', 'REPEAT');

    this.rockSet = new MyRockSet(this, [this.rockTexture]);

    this.myBee = new MyBee(this);

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.displayPetal = true;
    this.displayReceptacle = true;
    this.displayRockSet = false;
    this.displayGarden = true;
    this.displayHive = true;
    this.displayGrass = true;
    this.scaleFactor = 1;

    this.enableTextures(true);

    // Shader

    this.grassShader = new CGFshader(this.gl, "shaders/grass.vert", "shaders/grass.frag");


    this.texture = new CGFtexture(this, "images/terrain.jpg");
    this.appearance = new CGFappearance(this);
    this.appearance.setTexture(this.texture);
    this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    this.earthTexture = new CGFtexture(this, "images/earth.jpg");
    this.earthAppearance = new CGFappearance(this);
    this.earthAppearance.setTexture(this.earthTexture);
    this.earthAppearance.setTextureWrap('REPEAT', 'REPEAT');

    this.grassTexture = new CGFtexture(this, "images/grass.jpeg");
    this.grassAppearance = new CGFappearance(this);
    this.grassAppearance.setTexture(this.grassTexture);
    this.grassAppearance.setTextureWrap('REPEAT', 'REPEAT');

    this.stemTexture = new CGFtexture(this, "images/caule.jpeg");
    this.stemAppearance = new CGFappearance(this);
    this.stemAppearance.setTexture(this.stemTexture);
    this.stemAppearance.setTextureWrap('REPEAT', 'REPEAT');

    this.pollenTexture = new CGFtexture(this, "images/pollen.jpg");
		this.pollenAppearance = new CGFappearance(this);
		this.pollenAppearance.setTexture(this.pollenTexture);
		this.pollenAppearance.setTextureWrap('REPEAT', 'REPEAT');

    this.receptacleTexture = new CGFtexture(this, "images/receptaclebrown.png");
    this.receptacleAppearance = new CGFappearance(this);
    this.receptacleAppearance.setTexture(this.receptacleTexture);
    this.receptacleAppearance.setTextureWrap('REPEAT', 'REPEAT');

    this.receptacleTexture2 = new CGFtexture(this, "images/orangetexture.jpg");
    this.receptacleAppearance2 = new CGFappearance(this);
    this.receptacleAppearance2.setTexture(this.receptacleTexture2);
    this.receptacleAppearance2.setTextureWrap('REPEAT', 'REPEAT');

    this.receptacleTexture3 = new CGFtexture(this, "images/purpletexture.jpg");
    this.receptacleAppearance3 = new CGFappearance(this);
    this.receptacleAppearance3.setTexture(this.receptacleTexture3);
    this.receptacleAppearance3.setTextureWrap('REPEAT', 'REPEAT');

    this.receptacleTexture4 = new CGFtexture(this, "images/bluetexture.jpg");
    this.receptacleAppearance4 = new CGFappearance(this);
    this.receptacleAppearance4.setTexture(this.receptacleTexture4);
    this.receptacleAppearance4.setTextureWrap('REPEAT', 'REPEAT');


    //Objects connected to MyInterface
    this.displayAxis = true;
    this.displayBee = true;
    this.displayPanorama = true;
    this.displayPetal = true;
    this.displayReceptacle = true;
    this.displayRockSet = true;
    this.scaleFactor = 1;
    this.speedFactor = 0.1;

    this.enableTextures(true);

    this.displayNormals = false;

    this.setUpdatePeriod(10);

  }

  initLights() {
    this.setGlobalAmbientLight(0.5, 0.5, 0.5, 1.0);

    this.lights[0].setPosition(-10, 20, -10, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].setVisible(true);
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      1,
      0.1,
      1000,
      vec3.fromValues(50, 10, 15),
      vec3.fromValues(0, 0, 0)
    );
  }
  toRadians(angle) {
    return (angle * Math.PI) / 180;
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }
  setColor(R, G, B, A) {
    this.setAmbient(R, G, B, A);
    this.setDiffuse(R, G, B, A);
    this.setSpecular(R, G, B, A);
  }
  checkKeys() {
    var text="Keys pressed: ";
    var keysPressed=false;

    // Check for key codes e.g. in https://keycode.info/
    if (this.gui.isKeyPressed("KeyW")) {
      text+=" W ";
      keysPressed=true;
    }

    if (this.gui.isKeyPressed("KeyS")) {
      text+=" S ";
      keysPressed=true;
    }

  }

  update(t) {
    this.grassShader.setUniformsValues({ timeFactor: t / 100 % 100 });
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
    this.gl.enable(this.gl.BLEND)
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    // ---- BEGIN Primitive drawing section

    if (this.displayPanorama) {
      // Display panorama
      this.pushMatrix();
      this.myPanorama.display();
      this.popMatrix();
    }

    if (this.displayBee) {
      // Animate bee
      this.pushMatrix();
      this.translate(0, 3 + Math.sin(this.beePosition), 0); // Update the Y position of the bee using a sine function
      this.myBee.display();
      this.popMatrix();

      this.beePosition += 0.1; // Increment the position of the bee for the next frame

      // Check for collision between the bee and the flowers
      for (var flower of this.garden.getFlowers()) {
        var beePosition = this.myBee.getPosition();
        var flowerPosition = flower.getPosition();

        // Calculate the distance between the bee and the flower
        var distance = Math.sqrt(
          Math.pow(beePosition[0] - flowerPosition[0], 2) +
          Math.pow(beePosition[1] - flowerPosition[1], 2) +
          Math.pow(beePosition[2] - flowerPosition[2], 2)
        );
        var threshold = 3; // Define a threshold value for the distance

        // Check if the distance is less than a threshold value (indicating a collision)
        if (distance < threshold && this.myBee.getTarget() === null && flower.hasPollen()) {
          // Handle the collision between the bee and the flower
          // For example, you can call a method on the flower object to handle the collision
          if (!this.myBee.hasPollen()) this.myBee.setTarget(flower);
          console.log("Collision detected!");
        }
      }


      // Check for collision between the hive and the bee
      var hivePosition = this.hive.getPosition();
      var beePosition = this.myBee.getPosition();
      var thresholdZ = 2; // Define a threshold value for the Z-axis

      // Check if the bee is within the square area around the hive
      if (
        beePosition[2] >= hivePosition[2] - thresholdZ - 14 &&
        beePosition[2] <= hivePosition[2] + thresholdZ &&
        beePosition[0] >= -8 &&
        beePosition[0] <= 8 &&
        this.myBee.getTarget() === null
      ) {
        // Handle the collision between the hive and the bee
        // For example, you can call a method on the hive object to handle the collision
        console.log("Collision detected between hive and bee!");
        if (this.myBee.hasPollen()) this.myBee.setTarget(this.hive);
      }
    }

    if (this.displayHive) {
      this.hive.display();
    }

    if (this.displayRockSet) {
      this.pushMatrix();
      this.translate(0, -15.5, 0);
      this.rockSet.display();
      this.popMatrix();
    }


    if (this.displayGarden) {
      this.pushMatrix();
      this.translate(0, -20, 0);
      this.garden.display();
      this.popMatrix();
    }

    if (this.displayGrass) {
      this.setActiveShader(this.grassShader);
      this.grassAppearance.apply();
      this.grass.display();
      this.setActiveShader(this.defaultShader);
    }



    this.checkKeys();

    // ---- END Primitive drawing section
  }
}
