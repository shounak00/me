'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Ball = require('../objects3D/BallObject3D');
var Grid = require('../objects3D/GridObject3D');

var ballSection = new Section('ball');

/**
 * Ball + Grid visuals
 */
var ball = new Ball();
ball.el.rotation.z = 2;
ballSection.add(ball.el);

var grid = new Grid({
  step: 5,
  stepsX: 11,
  stepsY: 11,
  loop: true
});
grid.el.rotation.set(1.5, 1, 2);
grid.el.position.x = -20;
ballSection.add(grid.el);

/**
 * Title: PROFESSIONAL SUMMARY
 */
var titleText = new TextPanel(
  'PROFESSIONAL \n SUMMARY',
  {
    align: 'left',
    style: 'bold',
    size: 45,
    lineSpacing: 15
  }
);
titleText.el.position.set(10, 8, 15);
titleText.el.rotation.y = -0.4;
ballSection.add(titleText.el);

var roleText = new TextPanel(
  'S E N I O R  U N I T Y  D E V E L O P E R  &  T E A M  L E A D',
  {
    align: 'left',
    style: 'bold',
    size: 14,
    lineSpacing: 14
  }
);

roleText.el.position.set(11.25, 4, 15);
roleText.el.rotation.y = -0.4;
ballSection.add(roleText.el);


/**
 * Summary details (smaller text below)
 */
var detailsText = new TextPanel(
  '5 +  Y E A R S  O F  E X P E R I E N C E  B U I L D I N G  H I G H - P E R F O R M A N C E\n' +
  'U N I T Y  A P P L I C A T I O N S  A C R O S S  M E D I C A L  S I M U L A T I O N ,\n' +
  'D I G I T A L  T W I N S ,  X R  ( V R / A R )  T R A I N I N G  S Y S T E M S ,\n' +
  'A N D  G A M E S .\n\n' +
  'S P E C I A L I Z E D  I N  U N I T Y  E C S  ( D O T S ) ,  D A T A - O R I E N T E D\n' +
  'A R C H I T E C T U R E ,  S I M U L A T I O N  A U T H O R I N G ,\n' +
  'A N D  W O R K F L O W  A U T O M A T I O N .\n\n' +
  'P R O V E N  T R A C K  R E C O R D  O F  L E A D I N G  E N G I N E E R I N G  T E A M S ,\n' +
  'A R C H I T E C T I N G  S C A L A B L E  S Y S T E M S ,  O P T I M I Z I N G\n' +
  'P E R F O R M A N C E ,  A N D  D E L I V E R I N G  E N T E R P R I S E\n' +
  'H E A L T H C A R E  S O L U T I O N S  A N D  C O N S U M E R  P R O D U C T S\n' +
  'W I T H  M I L L I O N S  O F  U S E R S .',
  {
    align: 'left',
    style: 'bold',
    size: 10,
    lineSpacing: 10
  }
);

detailsText.el.position.set(12, -4, 15);
detailsText.el.rotation.y = -0.4;
ballSection.add(detailsText.el);


ball.el.visible = false;
grid.el.visible = false;

ballSection.onIn(function () {
  ball.in();
  grid.in();
  titleText.in();
  roleText.in();
  detailsText.in();
});

ballSection.onOut(function (way) {
  titleText.out(way);
  roleText.out(way);
  detailsText.out(way);
  grid.out(way);

  if (way === 'up') {
    ball.out();
  }
});

ballSection.onStart(function () {
  ball.start();
  grid.start();

  ball.el.visible = true;
  grid.el.visible = true;
});

ballSection.onStop(function () {
  ball.stop();
  grid.stop();

  ball.el.visible = false;
  grid.el.visible = false;
});

module.exports = ballSection;
