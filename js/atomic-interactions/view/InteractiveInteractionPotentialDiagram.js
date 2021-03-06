// Copyright 2015-2020, University of Colorado Boulder

/**
 * This class extends the Interaction Potential diagram to allow the user to change the curve through direct interaction
 * with it.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const ArrowNode = require( 'SCENERY_PHET/ArrowNode' );
  const AtomPair = require( 'STATES_OF_MATTER/atomic-interactions/model/AtomPair' );
  const AtomType = require( 'STATES_OF_MATTER/common/model/AtomType' );
  const Bounds2 = require( 'DOT/Bounds2' );
  const Color = require( 'SCENERY/util/Color' );
  const FillHighlightListener = require( 'SCENERY_PHET/input/FillHighlightListener' );
  const inherit = require( 'PHET_CORE/inherit' );
  const InteractionPotentialCanvasNode = require( 'STATES_OF_MATTER/common/view/InteractionPotentialCanvasNode' );
  const InteractionPotentialDiagramNode = require( 'STATES_OF_MATTER/common/view/InteractionPotentialDiagramNode' );
  const merge = require( 'PHET_CORE/merge' );
  const Property = require( 'AXON/Property' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const Shape = require( 'KITE/Shape' );
  const SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );
  const SOMColorProfile = require( 'STATES_OF_MATTER/common/view/SOMColorProfile' );
  const SOMConstants = require( 'STATES_OF_MATTER/common/SOMConstants' );
  const statesOfMatter = require( 'STATES_OF_MATTER/statesOfMatter' );
  const Tandem = require( 'TANDEM/Tandem' );

  // constants
  const RESIZE_HANDLE_SIZE_PROPORTION = 0.05;  // Size of handles as function of node width.
  const EPSILON_HANDLE_OFFSET_PROPORTION = 0.08; // Position of handle as function of node width.
  const RESIZE_HANDLE_NORMAL_COLOR = '#32FE00';
  const RESIZE_HANDLE_HIGHLIGHTED_COLOR = new Color( 153, 255, 0 );
  const EPSILON_LINE_COLOR = RESIZE_HANDLE_NORMAL_COLOR;
  const POTENTIAL_LINE_COLOR = new Color( 'red' );

  /**
   * @param {DualAtomModel} dualAtomModel - model of the simulation
   * @param {boolean} wide - true if the wide screen version of the graph is needed, false if not
   * @param {Object} [options] that can be passed on to the underlying node
   * @constructor
   */
  function InteractiveInteractionPotentialDiagram( dualAtomModel, wide, options ) {

    options = merge( { tandem: Tandem.REQUIRED }, options );

    InteractionPotentialDiagramNode.call(
      this,
      dualAtomModel.getSigma(),
      dualAtomModel.getEpsilon(),
      wide,
      options.tandem
    );
    const self = this;

    // @private
    this.dualAtomModel = dualAtomModel;
    this.minXForAtom = Number.NEGATIVE_INFINITY;

    // @public, read-only
    this.interactionEnabled = false;

    // Create a convenience function for adding a drag handler that adjusts epsilon, this is done to avoid code duplication.
    let startDragY;
    let endDragY;

    function addEpsilonDragHandler( node, tandem ) {
      node.addInputListener( new SimpleDragHandler( {

        start: function( event ) {
          dualAtomModel.setMotionPaused( true );
          startDragY = node.globalToParentPoint( event.pointer.point ).y;
        },

        drag: function( event ) {
          endDragY = node.globalToParentPoint( event.pointer.point ).y;
          const d = endDragY - startDragY;
          startDragY = endDragY;
          const scaleFactor = SOMConstants.MAX_EPSILON / ( self.getGraphHeight() / 2 );
          dualAtomModel.interactionStrengthProperty.value = dualAtomModel.getEpsilon() + ( d * scaleFactor );
        },

        end: function() {
          dualAtomModel.setMotionPaused( false );
        },

        tandem: tandem
      } ) );
    }

    // Add the line that will indicate and control the value of epsilon.
    const epsilonLineLength = EPSILON_HANDLE_OFFSET_PROPORTION * this.widthOfGraph * 1.2;
    this.epsilonLine = new Rectangle( -epsilonLineLength / 2, 0, epsilonLineLength, 1, {
      cursor: 'ns-resize',
      pickable: true,
      fill: EPSILON_LINE_COLOR,
      stroke: EPSILON_LINE_COLOR
    } );
    this.epsilonLine.addInputListener(
      new FillHighlightListener( RESIZE_HANDLE_NORMAL_COLOR, RESIZE_HANDLE_HIGHLIGHTED_COLOR )
    );
    this.epsilonLine.touchArea = this.epsilonLine.localBounds.dilatedXY( 8, 8 );
    this.epsilonLine.mouseArea = this.epsilonLine.localBounds.dilatedXY( 0, 4 );
    addEpsilonDragHandler( this.epsilonLine, options.tandem.createTandem( 'epsilonLineDragHandler' ) );
    this.epsilonLineLayer.addChild( this.epsilonLine );

    // Add the arrow nodes that will allow the user to control the epsilon value.
    const arrowNodeOptions = {
      headHeight: 10,
      headWidth: 18,
      tailWidth: 7,
      fill: RESIZE_HANDLE_NORMAL_COLOR,
      stroke: 'black',
      doubleHead: true,
      pickable: true,
      cursor: 'pointer'
    };
    this.epsilonResizeHandle = new ArrowNode(
      0,
      -RESIZE_HANDLE_SIZE_PROPORTION * this.widthOfGraph / 2,
      0,
      RESIZE_HANDLE_SIZE_PROPORTION * this.widthOfGraph,
      arrowNodeOptions
    );
    this.epsilonResizeHandle.addInputListener( new FillHighlightListener(
      RESIZE_HANDLE_NORMAL_COLOR,
      RESIZE_HANDLE_HIGHLIGHTED_COLOR
    ) );
    this.ljPotentialGraph.addChild( this.epsilonResizeHandle );
    this.epsilonResizeHandle.touchArea = this.epsilonResizeHandle.localBounds.dilatedXY( 3, 10 );
    addEpsilonDragHandler( this.epsilonResizeHandle, options.tandem.createTandem( 'epsilonResizeDragHandler' ) );

    // add sigma arrow node
    this.sigmaResizeHandle = new ArrowNode( -RESIZE_HANDLE_SIZE_PROPORTION * this.widthOfGraph / 2, 0,
      RESIZE_HANDLE_SIZE_PROPORTION * this.widthOfGraph * 1.2, 0, arrowNodeOptions );
    this.sigmaResizeHandle.addInputListener( new FillHighlightListener( RESIZE_HANDLE_NORMAL_COLOR,
      RESIZE_HANDLE_HIGHLIGHTED_COLOR ) );
    this.ljPotentialGraph.addChild( this.sigmaResizeHandle );
    this.sigmaResizeHandle.touchArea = this.sigmaResizeHandle.localBounds.dilatedXY( 10, 5 );
    let startDragX;
    let endDragX;
    this.sigmaResizeHandle.addInputListener( new SimpleDragHandler( {

      start: function( event ) {
        dualAtomModel.setMotionPaused( true );
        startDragX = self.sigmaResizeHandle.globalToParentPoint( event.pointer.point ).x;
      },

      drag: function( event ) {
        endDragX = self.sigmaResizeHandle.globalToParentPoint( event.pointer.point ).x;
        const d = endDragX - startDragX;
        startDragX = endDragX;
        const scaleFactor = self.GRAPH_X_RANGE / ( self.getGraphWidth() );
        const atomDiameter = dualAtomModel.getSigma() + ( d * scaleFactor );
        dualAtomModel.atomDiameterProperty.value = atomDiameter > SOMConstants.MIN_SIGMA ?
                                                   ( atomDiameter < SOMConstants.MAX_SIGMA ? atomDiameter :
                                                     SOMConstants.MAX_SIGMA ) : SOMConstants.MIN_SIGMA;
      },

      end: function() {
        dualAtomModel.setMotionPaused( false );
      },

      tandem: options.tandem.createTandem( 'sigmaResizeHandleDragHandler' )
    } ) );

    // Add the ability to grab and move the position marker. This node will need to be pickable so the user can grab it.
    this.positionMarker.setPickable( true );
    this.positionMarker.touchArea = Shape.circle( 0, 0, 13 );
    this.positionMarker.addInputListener( new SimpleDragHandler( {
        allowTouchSnag: true,

        start: function( event ) {
          // Stop the particle from moving in the model.
          dualAtomModel.setMotionPaused( true );
          startDragX = self.positionMarker.globalToParentPoint( event.pointer.point ).x;
        },

        drag: function( event ) {

          // Make sure the movement hint is now hidden, since the user has figured out what to drag.
          dualAtomModel.movementHintVisibleProperty.set( false );

          // Move the movable atom based on this drag event.
          const atom = dualAtomModel.movableAtom;
          endDragX = self.positionMarker.globalToParentPoint( event.pointer.point ).x;
          const xDifference = endDragX - startDragX;
          const scaleFactor = self.GRAPH_X_RANGE / ( self.getGraphWidth() );
          const newPosX = Math.max( atom.getX() + ( xDifference * scaleFactor ), self.minXForAtom );
          atom.setPosition( newPosX, atom.getY() );
          startDragX = endDragX;
        },

        end: function() {
          // Let the model move the particle again.  Note that this happens
          // even if the motion was paused by some other means.
          dualAtomModel.setMotionPaused( false );
        },

      tandem: options.tandem.createTandem( 'positionMarkerDragHandler' )
      }
    ) );

    Property.multilink(
      [ dualAtomModel.atomPairProperty, dualAtomModel.interactionStrengthProperty, dualAtomModel.atomDiameterProperty ],
      function( atomPair, interactionStrength, atomDiameter ) {
        if ( atomPair === AtomPair.ADJUSTABLE ) {
          dualAtomModel.setEpsilon( interactionStrength );
          dualAtomModel.setAdjustableAtomSigma( atomDiameter );
        }
        self.positionMarker.changeColor( dualAtomModel.movableAtom.color );
        self.setLjPotentialParameters( dualAtomModel.getSigma(), dualAtomModel.getEpsilon() );
        self.updateInteractivityState();
        self.drawPotentialCurve();
      }
    );

    this.interactionPotentialCanvasNode = new InteractionPotentialCanvasNode(
      this,
      true,
      { canvasBounds: new Bounds2( 0, 0, this.graphWidth, this.graphHeight ) }
    );

    // Update interactivity state.
    this.updateInteractivityState();

    // Redraw the potential curve.
    this.drawPotentialCurve();

    // Add children
    this.addChild( this.horizontalAxisLabel );
    this.addChild( this.verticalAxisLabel );
    this.addChild( this.interactionPotentialCanvasNode );
    this.addChild( this.verticalAxis );
    this.addChild( this.horizontalAxis );
    this.addChild( this.ljPotentialGraph );

    // applying color scheme to lj graph elements
    this.verticalAxis.fill = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.horizontalAxis.fill = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.verticalAxis.stroke = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.horizontalAxis.stroke = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.epsilonArrow.fill = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.epsilonArrow.fill = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.sigmaArrow.fill = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.epsilonLabel.fill = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.sigmaLabel.fill = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.epsilonArrow.stroke = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.gridNode.verticalLinesNode.stroke = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.horizontalAxisLabel.fill = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.verticalAxisLabel.fill = SOMColorProfile.ljGraphAxesAndGridColorProperty;
    this.gridNode.horizontalLinesNode.stroke = SOMColorProfile.ljGraphAxesAndGridColorProperty;

    this.mutate( options );
  }

  statesOfMatter.register( 'InteractiveInteractionPotentialDiagram', InteractiveInteractionPotentialDiagram );

  return inherit( InteractionPotentialDiagramNode, InteractiveInteractionPotentialDiagram, {

    /**
     * This is an override of the method in the base class that draws the curve on the graph, and this override draws
     * the controls that allow the user to interact with the graph.
     * @override
     * @protected
     */
    drawPotentialCurve: function() {

      //  draw potential curve
      if ( this.interactionPotentialCanvasNode !== undefined ) {
        this.interactionPotentialCanvasNode.update( POTENTIAL_LINE_COLOR );
      }
    },

    /**
     * Set the lowest allowed X position to which the movable atom can be set.
     * @param {number} minXForAtom
     * @public
     */
    setMinXForAtom: function( minXForAtom ) {
      this.minXForAtom = minXForAtom;
    },

    /**
     * @private
     */
    updateInteractivityState: function() {
      this.interactionEnabled = ( this.dualAtomModel.fixedAtom.getType() === AtomType.ADJUSTABLE );
    },

    /**
     * @override
     */
    setMolecular: function( molecular ) {
      InteractionPotentialDiagramNode.prototype.setMolecular.call( this );
      // move the horizontal label down a little bit, otherwise adjustment arrow can overlap it
      this.horizontalAxisLabel.top += 8; // amount empirically determined
    }
  } );
} );
