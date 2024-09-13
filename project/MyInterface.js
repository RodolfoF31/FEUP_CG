import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }


    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui=this;

        // disable the processKeyboard function
        this.processKeyboard=function(){};

        // create a named array to store which keys are being pressed
        this.activeKeys={};
    }

    processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code]=true;
    };

    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code]=false;
    };

    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }

    init(application) {
        // call CGFinterface init
        super.init(application);

        // init GUI. For more information on the methods, check:
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        this.gui.add(this.scene, 'displayPanorama').name('Display Panorama');

        this.gui.add(this.scene, 'displayBee').name('Display Bee');

        this.gui.add(this.scene, 'displayRockSet').name('Display Rock Set');

        this.gui.add(this.scene, 'displayGarden').name('Display Garden');

        this.gui.add(this.scene, 'displayHive').name('Display Hive');

        this.gui.add(this.scene, 'displayGrass').name('Display Grass');

        this.gui.add(this.scene, 'stemRadius', 0.1, 0.3, 0.1).name('Stem Radius');

        this.gui.add(this.scene, 'speedFactor', 0.1, 3).name('Speed Factor');




        // this.gui.add(this.scene, 'displayNormals').name("Display normals");

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3).name('Scale Factor');
        this.initKeys();
        return true;
    }
}