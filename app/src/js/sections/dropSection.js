'use strict';

var Section = require('../classes/SectionClass');
var THREE = require('three');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Drop = require('../objects3D/DropObject3D');

var dropSection = new Section('drop');

var drop = new Drop({ amplitude: 4 });
drop.el.rotation.x = -1.2;
drop.el.position.y = -10;
dropSection.add(drop.el);

/**
 * Text
 */
var text = new TextPanel(
  'S H O U N A K  S O B A H A N I\n'
  +'Senior Unity Developer\n'
  +'Team Lead @ NextGenStudioZ\n'
  +'Talent Pro Ltd',
  {
    align: 'left',
    padding: '20',
    style: 'bold',
    size: 50,
    lineSpacing: 40
  }
);
text.el.position.set(-10, 8, 0);
dropSection.add(text.el);

/**
 * Profile Photo (put your file here: app/public/img/shounak.jpg)
 */
var photoTexture = new THREE.ImageUtils.loadTexture('./app/public/img/shounak.png');
photoTexture.flipY = true;

var photoMaterial = new THREE.MeshBasicMaterial({
  map: photoTexture,
  transparent: true,
  depthWrite: false
});

// Width/height in scene units — tweak as you like
var photoGeometry = new THREE.PlaneGeometry(12, 18);
var photoPlane = new THREE.Mesh(photoGeometry, photoMaterial);

// Position it to the right of your text — tweak these
photoPlane.position.set(12, -6, 1);

dropSection.add(photoPlane);

// Hide initially (will appear when section enters)
photoPlane.visible = false;

drop.el.visible = false;

dropSection.onIn(function () {
  drop.in();
  text.in();
  photoPlane.visible = true;
});

dropSection.onOut(function (way) {
  drop.out(way);
  text.out(way);
  photoPlane.visible = false;
});

dropSection.onStart(function () {
  drop.start();
  drop.el.visible = true;
});

dropSection.onStop(function () {
  drop.stop();
  drop.el.visible = false;
});

module.exports = dropSection;