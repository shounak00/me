'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var HeightMap = require('../objects3D/HeightMapObject3D');

var heightSection = new Section('height');

var heightMap = new HeightMap({
  horizontal: true,
  vertical: false,
  plane: false,
  points: false,
  maps: [
    { name: 'A', url: './app/public/img/heightMap-A.jpg' },
    { name: 'B', url: './app/public/img/heightMap-B.jpg' },
    { name: 'O', url: './app/public/img/heightMap-O.jpg' }
  ]
});
heightMap.el.position.z = -10;
heightMap.el.rotation.y = -0.6;
heightSection.add(heightMap.el);

/**
 * TITLE
 */
var titleText = new TextPanel(
  'K E Y \n P R O J E C T S',
  {
    align: 'right',
    style: '',
    size: 50,
    lineSpacing: 40
  }
);
titleText.el.position.set(-25, 14, 0);
heightSection.add(titleText.el);

/**
 * PROJECT 1 (directly under title)
 */
var project1Text = new TextPanel(
  'SIT CPREP – Clinical Preparedness E-Learning Program\n' +
  'Singapore Institute of Technology\n' +
  '• Developed real-world medical simulation scenarios\n' +
  '  for radiographers and physiotherapists.\n' +
  '• Implemented ECS-inspired architectures for scenario\n' +
  '  flow, assessment, and state management.\n' +
  '• Built simulation authoring and workflow automation\n' +
  '  tools to support rapid content creation.\n' +
  '• Integrated LMS and Learning Record Store (xAPI)\n' +
  '  for analytics-driven healthcare training.',
  {
    align: 'left',
    style: '',
    size: 16,
    lineSpacing: 18
  }
);

project1Text.el.position.set(-25, 0, 0);
project1Text.el.rotation.y = 0.6;
heightSection.add(project1Text.el);

/**
 * PROJECT 2 (under project 1)
 */
var project2Text = new TextPanel(
  'JLG Crane – Digital Twin (VR)\n' +
  '• Developed a VR-based digital twin enabling\n' +
  '  real-time crane operation and training.\n' +
  '• Implemented system-driven simulation logic\n' +
  '  for interaction, physics coordination, and\n' +
  '  safety validation.',
  {
    align: 'left',
    style: '',
    size: 16,
    lineSpacing: 18
  }
);

project2Text.el.position.set(-25, -16, 0);
project2Text.el.rotation.y = 0.6;
heightSection.add(project2Text.el);

/**
 * VISIBILITY
 */
heightMap.el.visible = false;
project1Text.el.visible = false;
project2Text.el.visible = false;

heightSection.onIn(function () {
  titleText.in();
  project1Text.in();
  project2Text.in();
});

heightSection.onOut(function (way) {
  titleText.out(way);
  project1Text.out(way);
  project2Text.out(way);
});

heightSection.onStart(function () {
  if (!heightMap.ready) return false;

  heightMap.start();
  project1Text.el.visible = true;
  project2Text.el.visible = true;
});

heightSection.onStop(function () {
  if (!heightMap.ready) return false;

  heightMap.stop();
  project1Text.el.visible = false;
  project2Text.el.visible = false;
});

heightSection.show = function () {
  heightMap.el.visible = true;
};

heightSection.hide = function () {
  heightMap.el.visible = false;
};

module.exports = heightSection;
