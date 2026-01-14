'use strict';

var THREE = require('three');

var Section = require('../classes/SectionClass');

var FlowField = require('../objects3D/FlowFieldObject3D');
var TextPanel = require('../objects3D/TextPanelObject3D');

var flowSection = new Section('flow');

var points = [
  new THREE.Vector3(0, 50, 20),
  new THREE.Vector3(20, 0, -10),
  new THREE.Vector3(-20, -100, 0)
];

var field = new FlowField(points, {
  subsAmplitude: 50,
  subsNumber: 10
});
flowSection.add(field.el);

/**
 * Title (bold, left aligned)
 */
var titleText = new TextPanel(
  'CORE TECHNICAL SKILLS',
  {
    align: 'left',
    style: 'bold',
    size: 46,
    lineSpacing: 30
  }
);

titleText.el.position.z = -10.75;
titleText.el.position.x = -13;
titleText.el.position.y = 16;
titleText.el.rotation.y = 0.4;
flowSection.add(titleText.el);

/**
 * Body (left aligned, smaller, bullet list)
 */
var detailsText = new TextPanel(
  '• Unity Engine (URP, XR Toolkit, Addressables)\n' +
  '• Unity ECS / DOTS, Data-Oriented Architecture\n' +
  '• Simulation Authoring & Workflow Automation\n' +
  '• Custom Development Tools for Scalable Content Production\n' +
  '• C#, .NET / ASP.NET Core, JavaScript\n' +
  '• Backend Integration, REST APIs, xAPI\n' +
  '• .NET Hosting & Deployment on IIS (Windows Server)\n' +
  '• Android Build & Release Management for Unity Applications\n' +
  '• VR/AR Development (Meta Quest 2/3)\n' +
  '• Medical Simulation & Scenario-Based Training\n' +
  '• Digital Twins & Real-Time Control Systems\n' +
  '• LRS & LMS Integration\n' +
  '• Performance Optimization (CPU, GPU, Memory)\n' +
  '• Multiplayer & Scalable Systems\n' +
  '• Git, Jira, Agile/Scrum\n' +
  '• Unreal Engine (Working Knowledge)',
  {
    align: 'left',
    style: '',
    size: 24,
    lineSpacing: 22
  }
);

detailsText.el.position.z = -10;
detailsText.el.position.x = -9;
detailsText.el.position.y = -5;
detailsText.el.rotation.y = 0.4;
flowSection.add(detailsText.el);

field.el.visible = false;

var fieldIn = false;

flowSection.fieldIn = function () {
  if (fieldIn) {
    return false;
  }

  fieldIn = true;

  field.in();
};

flowSection.onIn(function () {
  titleText.in();
  detailsText.in();
});

flowSection.onOut(function (way) {
  titleText.out(way);
  detailsText.out(way);
});

flowSection.onStart(function () {
  field.start();

  field.el.visible = true;
});

flowSection.onStop(function () {
  field.stop();

  field.el.visible = false;
});

module.exports = flowSection;
