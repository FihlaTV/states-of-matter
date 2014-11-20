 // Copyright 2002-2014, University of Colorado Boulder
 /**
 * This class displays an interaction potential diagram.
 *
 * @author John Blanco
 * @author Siddhartha Chinthapally (Actual Concepts)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var LjPotentialCalculator = require( 'STATES_OF_MATTER/common/model/LjPotentialCalculator' );
  var Vector2 = require( 'DOT/Vector2' );
  var StatesOfMatterConstants = require( 'STATES_OF_MATTER/common/StatesOfMatterConstants' );
  var Shape = require( 'KITE/Shape' );
  var Path = require( 'SCENERY/nodes/Path' );
  var Text = require( 'SCENERY/nodes/Text' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Node = require( 'SCENERY/nodes/Node' );
  var ArrowNode = require( 'SCENERY_PHET/ArrowNode' );

  //strings
  var distanceBetweenMoleculesString = require( 'string!STATES_OF_MATTER/distanceBetweenMolecules' );
  var potentialEnergyString = require( 'string!STATES_OF_MATTER/potentialEnergy' );


// Constants that control the range of data that is graphed.
// In picometers.
  var MAX_INTER_ATOM_DISTANCE = 1200;
// Constants that control the appearance of the diagram.

  //private
  var NARROW_VERSION_WIDTH = 200;

  //private
  var WIDE_VERSION_WIDTH = 300;

  //private
  var AXIS_LINE_WIDTH = 1;
  //private
  var AXES_ARROW_HEAD_HEIGHT = 8 * AXIS_LINE_WIDTH;


// Size of pos marker wrt overall width.

  //private
  var POSITION_MARKER_DIAMETER_PROPORTION = 0.03;


// Constants that control the location and size of the graph.

  //private
  var VERT_AXIS_SIZE_PROPORTION = 0.85;
// Font for the labels used on the axes and within the graph.

  //private
  var AXIS_LABEL_FONT_SIZE = 14;

  //private
  var AXIS_LABEL_FONT = new PhetFont( AXIS_LABEL_FONT_SIZE );

  //private
  var GREEK_LETTER_FONT_SIZE = 16;

  //private
  var GREEK_LETTER_FONT = new PhetFont( GREEK_LETTER_FONT_SIZE );

  /**
   * Constructor.
   *
   * @param sigma   - Initial value of sigma, a.k.a. the atom diameter
   * @param epsilon - Initial value of epsilon, a.k.a. the interaction strength
   * @param wide    - True if the widescreen version of the graph is needed,
   *                false if not.
   */
  function InteractionPotentialDiagramNode( sigma, epsilon, wide ) {

    Node.call( this );
    sigma = sigma;
    epsilon = epsilon;
    this.positionMarkerEnabled = false;
    this.graphMin = new Vector2( 0, 0 );
    this.zeroCrossingPoint = new Vector2( 0, 0 );
    this.markerDistance = 0;
    this.ljPotentialCalculator = new LjPotentialCalculator( sigma, epsilon );

    // Set up for the normal or wide version of the graph.
    if ( wide ) {
      this.widthOfGraph = WIDE_VERSION_WIDTH;
      this.heightOfGraph = this.widthOfGraph * 0.6;
    }
    else {
      this.widthOfGraph = NARROW_VERSION_WIDTH;
      this.heightOfGraph = this.widthOfGraph * 0.8;
    }
    this.graphXOrigin = 0.10 * this.widthOfGraph;
    this.graphYOrigin = 0.85 * this.heightOfGraph;
    this.graphWidth = this.widthOfGraph - this.graphXOrigin - AXES_ARROW_HEAD_HEIGHT;

    this.graphHeight = this.heightOfGraph * VERT_AXIS_SIZE_PROPORTION - AXES_ARROW_HEAD_HEIGHT;

    // Layer where the graph elements are added.
    this.ljPotentialGraph = new Node();
    this.verticalScalingFactor = this.graphHeight / 2 / (StatesOfMatterConstants.MAX_EPSILON * StatesOfMatterConstants.K_BOLTZMANN);

    // Create the background that will sit behind everything.
    this.background = new Path( new Shape()
      .rect( 0, 0, this.widthOfGraph, this.heightOfGraph ), {/*fill:'yellow'*/} );
    //  this.ljPotentialGraph.addChild( this.background );


    // Create and add the portion that depicts the Lennard-Jones potential curve.
    this.ljPotentialGraph1 = new Path( new Shape()
      .rect( 0, 0, this.graphWidth, this.graphHeight ), {fill: 'black'} );
    this.ljPotentialGraph1.setTranslation( this.graphXOrigin, this.graphYOrigin - this.graphHeight );
    //this.ljPotentialGraph.addChild( this.ljPotentialGraph1 );

    // Create and add the center axis line for the graph.
    var centerAxis = new Path( new Shape().lineTo( 0, 0 )
      .lineTo( this.graphWidth, 0 ), { lineWidth: 4, stroke: '#A7A7A7'} );
    this.ljPotentialGraph.addChild( centerAxis );
    centerAxis.setTranslation( 0, this.graphHeight / 2 );


    // Create and add the potential energy line.
    this.potentialEnergyLine = new Path( null, { lineWidth: 2, stroke: 'yellow'} );

    this.ljPotentialGraph.addChild( this.potentialEnergyLine );

    // Add the arrows and labels that will depict sigma and epsilon.
    this.epsilonArrow = new ArrowNode( 0, 0, 0, this.graphHeight / 2,
      { fill: 'white',
        stroke: 'white',
        doubleHead: true, headHeight: 6,
        headWidth: 6,
        tailWidth: 2
      } );
    this.ljPotentialGraph.addChild( this.epsilonArrow );

    this.epsilonLabel = new Text( "ε", { font: GREEK_LETTER_FONT, fill: 'white' } );
    this.ljPotentialGraph.addChild( this.epsilonLabel );

    this.sigmaLabel = new Text( "σ", {font: GREEK_LETTER_FONT, fill: 'white'} );
    this.ljPotentialGraph.addChild( this.sigmaLabel );
    this.sigmaArrow = new ArrowNode( 0, 0, 0, 0, { doubleHead: true, fill: 'white'} );
    this.ljPotentialGraph.addChild( this.sigmaArrow );

    // Variables for controlling the appearance, visibility, and location of
    // the position marker.
    // Add the position marker.
    this.markerLayer = new Node();
    this.markerLayer.setTranslation( this.graphXOrigin, this.graphYOrigin - this.graphHeight );
    this.ljPotentialGraph.addChild( this.markerLayer );

    var markerDiameter = POSITION_MARKER_DIAMETER_PROPORTION * this.graphWidth;
    this.positionMarker = new Path( new Shape()
      .ellipse( 0, 0, markerDiameter, markerDiameter, Math.PI )
      .lineTo( markerDiameter / 2, markerDiameter ), { fill: 'red'} );

    this.positionMarker.setVisible( this.positionMarkerEnabled );
    this.markerLayer.addChild( this.positionMarker );


    // Create and add the horizontal axis line for the graph.
    var horizontalAxis = new ArrowNode( 0, 0, this.graphWidth + AXES_ARROW_HEAD_HEIGHT, 0,
      { stroke: 'white',
        fill: 'white',
        headHeight: 8,
        headWidth: 8,
        tailWidth: 2
      } );

    horizontalAxis.setTranslation( this.graphXOrigin, this.graphYOrigin );
    this.ljPotentialGraph.addChild( horizontalAxis );

    this.horizontalAxisLabel = new Text( distanceBetweenMoleculesString,
      { fill: 'white',
        font: AXIS_LABEL_FONT
      } );
    this.ljPotentialGraph.addChild( this.horizontalAxisLabel );

    this.setMolecular( false );

    // Create and add the vertical axis line for the graph.
    var verticalAxis = new ArrowNode( 0, 0, 0, -this.graphHeight - AXES_ARROW_HEAD_HEIGHT,
      { stroke: 'white',
        fill: 'white',
        headHeight: 8,
        headWidth: 8,
        tailWidth: 2
      } );
    verticalAxis.setTranslation( this.graphXOrigin, this.graphYOrigin );
    this.ljPotentialGraph.addChild( verticalAxis );

    var verticalAxisLabel = new Text( potentialEnergyString, {fill: 'white', font: AXIS_LABEL_FONT} );
    verticalAxisLabel.setTranslation( this.graphXOrigin / 2, this.graphYOrigin - (  this.graphHeight / 2) + (verticalAxisLabel.width / 2) );
    verticalAxisLabel.setRotation( 3 * Math.PI / 2 );
    this.ljPotentialGraph.addChild( verticalAxisLabel );
    // Draw the curve upon the graph.
    this.drawPotentialCurve();
  }

  return inherit( Node, InteractionPotentialDiagramNode, {
    /**
     * Set the parameters that define the shape of the Lennard-Jones
     * potential curve.
     *
     * @param sigma
     * @param epsilon
     */
    setLjPotentialParameters: function( sigma, epsilon ) {
      // Update the parameters.
      /*    console.log( "sigma = " + sigma );
       console.log( "epsilon = " + epsilon );*/
      sigma = sigma;
      epsilon = epsilon;
      // Update the Lennard-Jones force calculator.
      this.ljPotentialCalculator.setEpsilon( epsilon );
      this.ljPotentialCalculator.setSigma( sigma );
      // Redraw the graph to reflect the new parameters.
      this.drawPotentialCurve();
    },
    getGraphHeight: function() {
      return   this.graphHeight;
    },
    getGraphWidth: function() {
      return   this.graphWidth;
    },
    getZeroCrossingPoint: function() {
      return   this.zeroCrossingPoint;
    },
    getGraphMin: function() {
      return   this.graphMin;
    },
    setMarkerEnabled: function( enabled ) {
      this.positionMarkerEnabled = enabled;
    },
    /**
     * Set the position of the position marker.  Note that is is only possible
     * to set the x axis position, which is distance.  The y axis position is
     * always on the LJ potential curve.
     *
     * @param distance - distance from the center of the interacting molecules.
     */
    setMarkerPosition: function( distance ) {
      this.markerDistance = distance;
      var xPos = this.markerDistance * (  this.graphWidth / MAX_INTER_ATOM_DISTANCE);
      var potential = this.calculateLennardJonesPotential( this.markerDistance );
      var yPos = ((  this.graphHeight / 2) - (potential * this.verticalScalingFactor));
      if ( this.positionMarkerEnabled && (xPos > 0) && (xPos < this.graphWidth) &&
           (yPos > 0) && (yPos < this.graphHeight) ) {
        this.positionMarker.setVisible( true );
        this.positionMarker.setTranslation( xPos - this.positionMarker.width / 2, yPos - this.positionMarker.height() / 2 );
      }
      else {
        this.positionMarker.setVisible( false );
      }
    },
    /**
     * Get the range of values over which the potential curve is graphed.  It
     * is assumed to go from 0 to the value returned by this function.
     */
    getXAxisRange: function() {
      return MAX_INTER_ATOM_DISTANCE;
    },
    /**
     * Returns a value between 0 and 1 representing the fraction of the
     * overall node that is actually used for graphing in the x direction.
     * This is generally used for determining how to scale the graph when
     * used in an environment where the scale must match the surroundings.
     */
    getXAxisGraphProportion: function() {
      return   this.graphWidth / this.width;
    },
    /**
     * Returns a values between 0 and 1 representing the fraction of the
     * overall node that exists to the left of the X axis.  This is generally
     * used for alignment and positioning of this node on a canvas.
     */
    getXAxisOffsetProportion: function() {
      return 1 - (  this.graphWidth + AXES_ARROW_HEAD_HEIGHT) / this.width;
    },
    /**
     * Set whether the graph is showing the potential between individual atoms
     * or multi-atom molecules.
     *
     * @param molecular - true if graph is portraying molecules, false for
     *                  individual atoms.
     */
    setMolecular: function( molecular ) {
      if ( molecular ) {
        this.horizontalAxisLabel.setText( 'atoms' );
      }
      else {
        this.horizontalAxisLabel.setText( 'Distance between Molecules' );
      }
      this.horizontalAxisLabel.setTranslation( this.graphXOrigin + (  this.graphWidth / 2) - (  this.horizontalAxisLabel.width / 2),
          this.graphYOrigin + (  this.horizontalAxisLabel.height ) );
    },

    /**
     * Calculate the Lennard-Jones potential for the given distance.
     *
     * @param radius
     * @return
     */

    //private
    calculateLennardJonesPotential: function( radius ) {
      return (  this.ljPotentialCalculator.calculateLjPotential( radius ));
    },
    /**
     * Draw the curve that reflects the Lennard-Jones potential based upon the
     * current values for sigma and epsilon.
     */
    drawPotentialCurve: function() {
      var potentialEnergyLineShape = new Shape();
      potentialEnergyLineShape.moveTo( 0, 0 );
      this.graphMin.setXY( 0, 0 );
      this.zeroCrossingPoint.setXY( 0, 0 );
      var horizontalIndexMultiplier = MAX_INTER_ATOM_DISTANCE / this.graphWidth;
      for ( var i = 1; i < this.graphWidth; i++ ) {
        var potential = this.calculateLennardJonesPotential( i * horizontalIndexMultiplier );
        var yPos = ((  this.graphHeight / 2) - (potential * this.verticalScalingFactor));
        if ( (yPos > 0) && (yPos < this.graphHeight) ) {
          potentialEnergyLineShape.lineTo( i, (yPos) );
          if ( yPos > this.graphMin.y ) {
            // PNode.
            this.graphMin.setXY( i, yPos );
          }
          if ( (potential > 0) || (  this.zeroCrossingPoint.x === 0) ) {
            // zero crossing point.
            this.zeroCrossingPoint.setXY( i, this.graphHeight / 2 );
          }
        }
        else {
          // Move to a good location from which to start graphing.
          potentialEnergyLineShape.moveTo( i + 1, 0 );
        }
      }
      this.potentialEnergyLine.setShape( potentialEnergyLineShape );
      var epsilonArrowStartPt = new Vector2( this.graphMin.x, this.graphHeight / 2 );
      if ( epsilonArrowStartPt.distance( this.graphMin ) > 0 ) {
        this.epsilonArrow.setVisible( true );
        try {

          //this.epsilonArrow.setTipAndTailLocations( this.graphMin, epsilonArrowStartPt );
          this.epsilonArrow.setTailAndTip( this.graphMin.x, this.graphMin.y, epsilonArrowStartPt.x, epsilonArrowStartPt.y );
        }
        catch( e ) {
          console.error( "Error: Caught exception while positioning epsilon arrow - " + e );
        }
      }
      else {
        // Don't show the arrow if there isn't enough space.
        this.epsilonArrow.setVisible( false );
      }
      this.epsilonLabel.setTranslation( this.graphMin.x + this.epsilonLabel.width + 10, ((  this.graphMin.y - (  this.graphHeight / 2)) / 3) - (  this.epsilonLabel.height / 2) + this.graphHeight / 2 );
      // Position the arrow that depicts sigma along with its label.
      this.sigmaLabel.setTranslation( this.zeroCrossingPoint.x / 2 - this.sigmaLabel.width / 2, this.graphHeight / 2 );
      try {
        this.sigmaArrow.setTailAndTip( 0, this.graphHeight / 2, this.zeroCrossingPoint.x, this.zeroCrossingPoint.y );
      }
      catch( r ) {
        console.error( "Error: Caught exception while positioning sigma arrow - " + r );
      }
      // Update the position of the marker in case the curve has moved.
      this.setMarkerPosition( this.markerDistance );
    }
  } );
} );

