// Copyright (c) 2002 - 2014. University of Colorado Boulder

/**
 * This class is the graphical representation of a stove that can be used to
 * heat or cool things.
 * @author Siddhartha Chinthapally (Actual Concepts) on 20-11-2014.
 */

define(function (require) {
  'use strict';

  // modules
  var inherit = require('PHET_CORE/inherit');
  var Node = require('SCENERY/nodes/Node');
  var Shape = require('KITE/Shape');
  var HSlider = require('SUN/HSlider');
  var Property = require('AXON/Property');
  var Path = require('SCENERY/nodes/Path');
  var Dimension2 = require('DOT/Dimension2');
  var Color = require('SCENERY/util/Color');
  var Image = require('SCENERY/nodes/Image');
  var Text = require('SCENERY/nodes/Text');
  var PhetFont = require('SCENERY_PHET/PhetFont');
  var LinearGradient = require('SCENERY/util/LinearGradient');

  //images
  var fireImage = require('image!STATES_OF_MATTER/flame.png');
  var iceImage = require('image!STATES_OF_MATTER/ice-cube-stack.png');

  // Width of the burner output - much of the rest of the size of the stove
  // derives from this value.
  var WIDTH = 120; // In screen coords, which are close to pixels.
  var HEIGHT = WIDTH * 0.75; // In screen coords, which are close to pixels.
  var BURNER_OPENING_HEIGHT = WIDTH * 0.1; // In screen coords, which are close to pixels.
  var BOTTOM_WIDTH = WIDTH * 0.8;

  // Basic color used for the stove.
  var BASE_COLOR = new Color(159, 182, 205);

  //-------------------------------------------------------------------------
  // Constructor(s)
  //-------------------------------------------------------------------------

  function StoveNode(model, options) {

    Node.call(this);

    // Create the body of the stove.
    var stoveBodyShape = new Shape().
      ellipticalArc(WIDTH / 2, BURNER_OPENING_HEIGHT / 4, WIDTH / 2, BURNER_OPENING_HEIGHT / 2, 0, 0, Math.PI, false).
      lineTo(( WIDTH - BOTTOM_WIDTH ) / 2, HEIGHT + BURNER_OPENING_HEIGHT / 2).
      ellipticalArc(WIDTH / 2, HEIGHT + BURNER_OPENING_HEIGHT / 4, BOTTOM_WIDTH / 2, BURNER_OPENING_HEIGHT,
      0, Math.PI, 0, true).
      lineTo(WIDTH, BURNER_OPENING_HEIGHT / 2);
    var stoveBody = new Path(stoveBodyShape, {
      stroke: 'black',
      fill: new LinearGradient(0, 0, WIDTH, 0)
        .addColorStop(0, BASE_COLOR.brighterColor(0.5))
        .addColorStop(1, BASE_COLOR.darkerColor(0.5))
    });

    // Create the inside bowl of the burner, which is an ellipse.
    var burnerInteriorShape = new Shape()
      .ellipse(WIDTH / 2, BURNER_OPENING_HEIGHT / 4, WIDTH / 2, BURNER_OPENING_HEIGHT / 2, 0, 0, Math.PI, false);
    var burnerInterior = new Path(burnerInteriorShape, {
      stroke: 'black',
      fill: new LinearGradient(0, 0, WIDTH, 0)
        .addColorStop(0, BASE_COLOR.darkerColor(0.5))
        .addColorStop(1, BASE_COLOR.brighterColor(0.5))
    });

    // Create the slider.
    var heatProperty = new Property(0);
    var TOP_SIDE_TRACK_COLOR = '#0A00F0';
    var BOTTOM_SIDE_TRACK_COLOR = '#EF000F';
    var labelFont = new PhetFont(14);
    var heatTitle = new Text('Heat', { font: labelFont });
    var coolTitle = new Text('Cool', { font: labelFont });
    var heatCoolSlider = new HSlider(heatProperty, { min: -1, max: 1 },
      {
        endDrag: function () {
          heatProperty.value = 0;
        },
        trackSize: new Dimension2(60, 10),
        trackFill: new LinearGradient(0, 0, 60, 0)
          .addColorStop(0, TOP_SIDE_TRACK_COLOR)
          .addColorStop(1, BOTTOM_SIDE_TRACK_COLOR),
        thumbSize: new Dimension2(15, 30),
        majorTickLength: 15,
        minorTickLength: 12

      });
    heatCoolSlider.rotation = -Math.PI / 2;
    heatTitle.rotation = Math.PI / 2;
    coolTitle.rotation = Math.PI / 2;
    heatCoolSlider.addMajorTick(1, heatTitle);
    heatCoolSlider.addMinorTick(0);
    heatCoolSlider.addMajorTick(-1, coolTitle);
    heatCoolSlider.centerY = stoveBody.centerY;
    heatCoolSlider.centerX = stoveBody.centerX + 10;

    var fireNode = new Image(fireImage, { centerX: stoveBody.centerX, centerY: stoveBody.centerY, scale: 0.6});
    var iceNode = new Image(iceImage, { centerX: stoveBody.centerX, centerY: stoveBody.centerY, scale: 0.6 });
    heatProperty.link(function (heat) {
      model.setHeatingCoolingAmount(heat);
      if (heat > 0) {
        fireNode.setTranslation((stoveBody.width - fireNode.width) / 2, -heat * fireImage.height * 0.5);
      }
      else if (heat < 0) {
        iceNode.setTranslation((stoveBody.width - iceNode.width) / 2, heat * iceImage.height * 0.5);
      }
      iceNode.setVisible(heat < 0);
      fireNode.setVisible(heat > 0);
    });

    this.addChild( burnerInterior );
    this.addChild( fireNode );
    this.addChild( iceNode );
    this.addChild( stoveBody );
    this.addChild( heatCoolSlider );

    this.mutate( options );
  }
  return inherit( Node, StoveNode );
});
