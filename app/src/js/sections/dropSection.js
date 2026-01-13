'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Drop = require('../objects3D/DropObject3D');

var dropSection = new Section('drop');

var drop = new Drop({ amplitude: 4 });
drop.el.rotation.x = -1.2;
drop.el.position.y = -10;
dropSection.add(drop.el);

var text = new TextPanel(
  'I  A M \nS H O U N A K  S O B A H A N I\n S E N I O R  U N I T Y  D E V E L O P E R  &  T E A M  L E A D',
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

drop.el.visible = false;

dropSection.onIn(function () {
  drop.in();
  text.in();
});

dropSection.onOut(function (way) {
  drop.out(way);
  text.out(way);
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