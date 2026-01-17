'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Wave = require('../objects3D/WaveObject3D');

var waveSection = new Section('wave');

var wave = new Wave();
waveSection.add(wave.el);

/**
 * TITLE
 */
var titleText = new TextPanel(
  'G A M E S  I  W O R K E D  O N',
  {
    align: 'center',
    style: '',
    size: 50,
    lineSpacing: 40
  }
);
titleText.el.position.y = 18;
titleText.el.rotation.x = 0.2;
waveSection.add(titleText.el);

/**
 * PROJECT 1
 */
var project1Text = new TextPanel(
  'Bus Simulator BD (BSBD) – 2M+ Downloads\n' +
  '• Developed Bus Simulator BD with over 2 million downloads.\n' +
  '• Optimized vehicle physics and rendering for low-end Android devices.\n' +
  '• Contributed to scalable gameplay systems and long-term performance stability.',
  {
    align: 'left',
    style: '',
    size: 20,
    lineSpacing: 18
  }
);
project1Text.el.position.set(-24, 8, 0);
waveSection.add(project1Text.el);

/**
 * PROJECT 2
 */
var project2Text = new TextPanel(
  'Trench Warfare – 1M+ Downloads\n' +
  '• WW1-based strategy game with AI-driven gameplay systems.',
  {
    align: 'left',
    style: '',
    size: 20,
    lineSpacing: 18
  }
);
project2Text.el.position.set(-28, 0, 0);
waveSection.add(project2Text.el);

/**
 * PROJECT 3
 */
var project3Text = new TextPanel(
  'The Rem – 500K+ Downloads\n' +
  '• Escape horror survival game with modular system architecture.',
  {
    align: 'left',
    style: '',
    size: 20,
    lineSpacing: 18
  }
);
project3Text.el.position.set(8, -0, 0);
waveSection.add(project3Text.el);

/**
 * VISIBILITY
 */
wave.el.visible = false;
project1Text.el.visible = false;
project2Text.el.visible = false;
project3Text.el.visible = false;

waveSection.onIn(function (way) {
  titleText.in();
  project1Text.in();
  project2Text.in();
  project3Text.in();
  wave.in(way);
});

waveSection.onOut(function (way) {
  titleText.out(way);
  project1Text.out(way);
  project2Text.out(way);
  project3Text.out(way);
  wave.out(way);
});

waveSection.onStart(function () {
  wave.start();

  wave.el.visible = true;
  project1Text.el.visible = true;
  project2Text.el.visible = true;
  project3Text.el.visible = true;
});

waveSection.onStop(function () {
  wave.stop();

  wave.el.visible = false;
  project1Text.el.visible = false;
  project2Text.el.visible = false;
  project3Text.el.visible = false;
});

module.exports = waveSection;
