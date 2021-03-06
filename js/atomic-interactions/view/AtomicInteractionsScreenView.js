// Copyright 2015-2020, University of Colorado Boulder

/**
 * Main view for the "Atomic Interactions" sim and for the "Interactions" screen in the States of Matter simulation.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const AquaRadioButton = require( 'SUN/AquaRadioButton' );
  const AtomicInteractionsControlPanel = require( 'STATES_OF_MATTER/atomic-interactions/view/AtomicInteractionsControlPanel' );
  const Bounds2 = require( 'DOT/Bounds2' );
  const ForcesControlPanel = require( 'STATES_OF_MATTER/atomic-interactions/view/ForcesControlPanel' );
  const ForceDisplayMode = require( 'STATES_OF_MATTER/atomic-interactions/model/ForceDisplayMode' );
  const GrabbableParticleNode = require( 'STATES_OF_MATTER/atomic-interactions/view/GrabbableParticleNode' );
  const HandNode = require( 'STATES_OF_MATTER/atomic-interactions/view/HandNode' );
  const inherit = require( 'PHET_CORE/inherit' );
  const InteractiveInteractionPotentialDiagram = require( 'STATES_OF_MATTER/atomic-interactions/view/InteractiveInteractionPotentialDiagram' );
  const merge = require( 'PHET_CORE/merge' );
  const ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  const Node = require( 'SCENERY/nodes/Node' );
  const ParticleForceNode = require( 'STATES_OF_MATTER/atomic-interactions/view/ParticleForceNode' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const PushPinNode = require( 'STATES_OF_MATTER/atomic-interactions/view/PushPinNode' );
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const SimSpeed = require( 'STATES_OF_MATTER/common/model/SimSpeed' );
  const SOMColorProfile = require( 'STATES_OF_MATTER/common/view/SOMColorProfile' );
  const SOMConstants = require( 'STATES_OF_MATTER/common/SOMConstants' );
  const SOMPlayPauseStepControl = require( 'STATES_OF_MATTER/common/view/SOMPlayPauseStepControl' );
  const statesOfMatter = require( 'STATES_OF_MATTER/statesOfMatter' );
  const Text = require( 'SCENERY/nodes/Text' );
  const TextPushButton = require( 'SUN/buttons/TextPushButton' );
  const VBox = require( 'SCENERY/nodes/VBox' );
  const Vector2 = require( 'DOT/Vector2' );

  // strings
  const normalString = require( 'string!STATES_OF_MATTER/normal' );
  const returnAtomString = require( 'string!STATES_OF_MATTER/returnAtom' );
  const slowMotionString = require( 'string!STATES_OF_MATTER/slowMotion' );

  // Constant used to control size of push pin, empirically determined.
  const PUSH_PIN_WIDTH = 20;
  const INSET = 15;
  const MAX_TEXT_WIDTH = 80;
  const PANEL_WIDTH = 209; // empirically determined to work well for English and most other translations

  /**
   * @param {DualAtomModel} dualAtomModel of the simulation
   * @param {boolean} enableHeterogeneousAtoms
   * @param {Tandem} tandem
   * @constructor
   */
  function AtomicInteractionsScreenView( dualAtomModel, enableHeterogeneousAtoms, tandem ) {

    // due to some odd behavior, we need to turn on preventFit for this screen, see
    // https://github.com/phetsims/states-of-matter/issues/176
    const screenViewOptions = merge( { preventFit: true }, SOMConstants.SCREEN_VIEW_OPTIONS );

    ScreenView.call( this, screenViewOptions );

    // @private, vars needed to do the job
    this.dualAtomModel = dualAtomModel;
    this.movableParticle = dualAtomModel.movableAtom;
    this.fixedParticle = dualAtomModel.fixedAtom;
    this.showAttractiveForces = false;
    this.showRepulsiveForces = false;
    this.showTotalForces = false;

    // set up the model-view transform, @private
    this.modelViewTransform = ModelViewTransform2.createSinglePointScaleMapping(
      new Vector2( 0, 0 ),
      new Vector2( 145, 360 ),
      0.25
    );

    // initialize local variables
    const self = this;
    const tickTextColor = enableHeterogeneousAtoms ? 'black' : SOMColorProfile.controlPanelTextProperty;
    const textColor = enableHeterogeneousAtoms ? 'black' : SOMColorProfile.controlPanelTextProperty;
    const panelFill = enableHeterogeneousAtoms ? '#D1D2FF' : SOMColorProfile.controlPanelBackgroundProperty;
    const panelStroke = enableHeterogeneousAtoms ? '#D1D2FF' : SOMColorProfile.controlPanelStrokeProperty;
    const panelTextFill = enableHeterogeneousAtoms ? 'black' : SOMColorProfile.controlPanelTextProperty;
    const forceControlPanelButtonAlign = enableHeterogeneousAtoms ? 'right' : 'left';
    const atomicInteractionsControlPanel = new AtomicInteractionsControlPanel( dualAtomModel, enableHeterogeneousAtoms, {
      right: this.layoutBounds.maxX - INSET,
      top: this.layoutBounds.minY + INSET,
      tickTextColor: tickTextColor,
      textColor: textColor,
      fill: panelFill,
      stroke: panelStroke,
      panelTextFill: panelTextFill,
      maxWidth: PANEL_WIDTH,
      minWidth: PANEL_WIDTH,
      tandem: tandem.createTandem( 'atomicInteractionsControlPanel' )
    } );

    // @private interactive potential diagram
    this.interactiveInteractionPotentialDiagram = new InteractiveInteractionPotentialDiagram( dualAtomModel, true, {
      left: this.modelViewTransform.modelToViewX( 0 ) - 43, // empirically determined such left edge of graph is at
                                                            // center of fixed atom
      top: atomicInteractionsControlPanel.top + 5, // additional offset empirically determined to look good
      tandem: tandem.createTandem( 'interactiveInteractionPotentialDiagram' )
    } );
    this.addChild( this.interactiveInteractionPotentialDiagram );

    // @private button for returning the atom to the screen
    this.returnAtomButton = new TextPushButton( returnAtomString, {
      font: new PhetFont( 17 ),
      baseColor: '#61BEE3',
      maxWidth: MAX_TEXT_WIDTH,
      listener: function() {
        dualAtomModel.resetMovableAtomPos();
      },
      left: this.layoutBounds.minX + 6 * INSET,
      bottom: this.layoutBounds.bottom - 2 * INSET,
      tandem: tandem.createTandem( 'returnAtomButton' )
    } );
    this.addChild( this.returnAtomButton );

    // create and add the Reset All Button in the bottom right
    const resetAllButton = new ResetAllButton( {
      listener: function() {
        dualAtomModel.reset();
        self.interactiveInteractionPotentialDiagram.reset();
      },
      radius: SOMConstants.RESET_ALL_BUTTON_RADIUS,
      right: this.layoutBounds.maxX - SOMConstants.RESET_ALL_BUTTON_DISTANCE_FROM_SIDE,
      bottom: this.layoutBounds.maxY - SOMConstants.RESET_ALL_BUTTON_DISTANCE_FROM_BOTTOM,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );

    // add force control
    const forcesControlPanel = new ForcesControlPanel(
      dualAtomModel.forcesDisplayModeProperty,
      dualAtomModel.forcesControlPanelExpandedProperty,
      {
        tickTextColor: tickTextColor,
        textColor: textColor,
        fill: panelFill,
        stroke: panelStroke,
        textFill: panelTextFill,
        buttonAlign: forceControlPanelButtonAlign,
        showTitleWhenExpanded: !enableHeterogeneousAtoms,
        minWidth: PANEL_WIDTH,
        maxWidth: PANEL_WIDTH,
        tandem: tandem.createTandem( 'forcesControlPanel' )
      }
    );

    // the control panels will overlap the reset all button if fully opened, so they must be a bit to the left
    atomicInteractionsControlPanel.right = resetAllButton.left - 20; // offset empirically determined

    // add control for play/pause/step
    const playPauseStepControl = new SOMPlayPauseStepControl(
      dualAtomModel.isPlayingProperty,
      dualAtomModel.stepInternal.bind( dualAtomModel ),
      {
        // position empirically determined
        centerX: this.layoutBounds.centerX + 27,
        bottom: this.layoutBounds.bottom - 14,

        tandem: tandem.createTandem( 'playPauseStepControl' )
      }
    );
    this.addChild( playPauseStepControl );

    // add sim speed controls
    const speedSelectionButtonOptions = {
      fill: SOMColorProfile.controlPanelTextProperty,
      font: new PhetFont( 14 ),
      maxWidth: MAX_TEXT_WIDTH
    };
    const speedSelectionButtonRadius = 8;
    const slowText = new Text( slowMotionString, speedSelectionButtonOptions );
    const slowMotionRadioButton = new AquaRadioButton( dualAtomModel.simSpeedProperty, SimSpeed.SLOW_MOTION, slowText, {
      radius: speedSelectionButtonRadius,
      tandem: tandem.createTandem( 'slowMotionRadioButton' )
    } );
    const normalText = new Text( normalString, speedSelectionButtonOptions );
    const normalMotionRadioButton = new AquaRadioButton( dualAtomModel.simSpeedProperty, SimSpeed.NORMAL, normalText, {
      radius: speedSelectionButtonRadius,
      tandem: tandem.createTandem( 'normalMotionRadioButton' )
    } );

    const speedControlMaxWidth = ( slowMotionRadioButton.width > normalMotionRadioButton.width ) ? slowMotionRadioButton.width : normalMotionRadioButton.width;

    const radioButtonSpacing = 4;
    const touchAreaYDilation = radioButtonSpacing / 2;
    slowMotionRadioButton.touchArea = new Bounds2(
      slowMotionRadioButton.localBounds.minX,
      slowMotionRadioButton.localBounds.minY - touchAreaYDilation,
      slowMotionRadioButton.localBounds.minX + speedControlMaxWidth,
      slowMotionRadioButton.localBounds.maxY + touchAreaYDilation
    );

    normalMotionRadioButton.touchArea = new Bounds2(
      normalMotionRadioButton.localBounds.minX,
      normalMotionRadioButton.localBounds.minY - touchAreaYDilation,
      ( normalMotionRadioButton.localBounds.minX + speedControlMaxWidth ),
      normalMotionRadioButton.localBounds.maxY + touchAreaYDilation
    );

    const speedControl = new VBox( {
      align: 'left',
      spacing: radioButtonSpacing,
      children: [ slowMotionRadioButton, normalMotionRadioButton ],
      right: playPauseStepControl.left - 2 * INSET,
      centerY: playPauseStepControl.centerY,
      tandem: tandem.createTandem( 'speedControl' )
    } );
    this.addChild( speedControl );

    // Create the push pin node that will be used to convey the idea that the fixed atom is pinned to the canvas.  It
    // will be added to the scene graph when the particles appear.
    this.pushPinNode = new PushPinNode();
    this.pushPinNode.scale( PUSH_PIN_WIDTH / this.pushPinNode.width );

    // update the push pin position if the adjustable atom diameter changes
    dualAtomModel.atomDiameterProperty.link( function() {
      self.updatePushPinPosition();
    } );

    // Create the nodes that will act as layers for the fixed and movable particles. This is done so that the
    // movable particle can always appear to be on top.
    this.fixedParticleLayer = new Node();
    this.addChild( this.fixedParticleLayer );
    this.movableParticleLayer = new Node();
    this.addChild( this.movableParticleLayer );

    // Add the control panels to the screen after the atoms so that the atoms with go behind them.
    this.addChild( atomicInteractionsControlPanel );
    this.addChild( forcesControlPanel );

    // Create a reusable node that looks like a cartoon hand and is used to indicate to the user that an atom can be
    // moved.  This will be dynamically added and removed from the scene graph.
    this.handNode = new HandNode(
      this.dualAtomModel,
      this.dualAtomModel.movableAtom,
      this.modelViewTransform,
      0,
      tandem.createTandem( 'handNode' )
    );

    // listen to the setting for atomPair and update the view when it changes
    dualAtomModel.atomPairProperty.link( function() {
      forcesControlPanel.top = atomicInteractionsControlPanel.bottom + INSET / 2;
      forcesControlPanel.left = atomicInteractionsControlPanel.left;
      self.handleFixedParticleRemoved();
      self.handleFixedParticleAdded( dualAtomModel.fixedAtom );
      self.handleMovableParticleRemoved();
      self.handleMovableParticleAdded( dualAtomModel.movableAtom );
    } );

    // update the visibility of the force arrows when the settings change
    dualAtomModel.forcesDisplayModeProperty.link( function( forces ) {
      self.setShowAttractiveForces( forces === ForceDisplayMode.COMPONENTS );
      self.setShowRepulsiveForces( forces === ForceDisplayMode.COMPONENTS );
      self.setShowTotalForces( forces === ForceDisplayMode.TOTAL );
      if ( !self.showAttractiveForces && !self.showTotalForces && forces !== ForceDisplayMode.HIDDEN ) {
        throw new Error( 'invalid forces: ' + forces );
      }
    } );

    // monitor the atom diameter and trigger updates when changes occur
    dualAtomModel.atomDiameterProperty.link( function() {
      self.fixedParticleNode.handleParticleRadiusChanged();
      self.movableParticleNode.handleParticleRadiusChanged();
      self.updateMinimumXForMovableAtom();
      self.updateHandPosition();
    } );
  }

  statesOfMatter.register( 'AtomicInteractionsScreenView', AtomicInteractionsScreenView );

  return inherit( ScreenView, AtomicInteractionsScreenView, {

    /**
     * Called by the animation loop.
     * @public
     */
    step: function() {
      this.handlePositionChanged();
      this.movableParticleNode.step();
    },

    /**
     * Turn on/off the displaying of the force arrows that represent the attractive force.
     * @param {boolean} showForces
     * @public
     */
    setShowAttractiveForces: function( showForces ) {
      this.movableParticleNode.setShowAttractiveForces( showForces );
      this.fixedParticleNode.setShowAttractiveForces( showForces );
      this.showAttractiveForces = showForces;
    },

    /**
     * Turn on/off the displaying of the force arrows that represent the repulsive force.
     * @param {boolean} showForces
     * @public
     */
    setShowRepulsiveForces: function( showForces ) {
      this.movableParticleNode.setShowRepulsiveForces( showForces );
      this.fixedParticleNode.setShowRepulsiveForces( showForces );
      this.showRepulsiveForces = showForces;
    },

    /**
     * Turn on/off the displaying of the force arrows that represent the total force, i.e. attractive plus repulsive.
     * @param {boolean} showForces
     * @public
     */
    setShowTotalForces: function( showForces ) {
      this.movableParticleNode.setShowTotalForces( showForces );
      this.fixedParticleNode.setShowTotalForces( showForces );
      this.showTotalForces = showForces;
    },

    /**
     * @param {SOMAtom} particle
     * @private
     */
    handleFixedParticleAdded: function( particle ) {

      this.fixedParticle = particle;
      this.fixedParticleNode = new ParticleForceNode( particle, this.modelViewTransform, true );
      this.fixedParticleNode.setShowAttractiveForces( this.showAttractiveForces );
      this.fixedParticleNode.setShowRepulsiveForces( this.showRepulsiveForces );
      this.fixedParticleNode.setShowTotalForces( this.showTotalForces );
      this.fixedParticleLayer.addChild( this.fixedParticleNode );

      this.updatePositionMarkerOnDiagram();
      this.updatePushPinPosition();

      // Add the push pin last so that it is on top of the fixed atom. Note that the particulars of how this is
      // positioned may need to change if a different image is used.
      this.addChild( this.pushPinNode );
    },

    /**
     * @private
     */
    handleFixedParticleRemoved: function() {

      // Get rid of the node for this guy.
      if ( this.fixedParticleNode && this.fixedParticleLayer.hasChild( this.fixedParticleNode ) ) {

        // Remove the particle node.
        this.fixedParticleLayer.removeChild( this.fixedParticleNode );
        this.fixedParticleNode.dispose();
        this.fixedParticleNode = null;

        // Remove the pin holding the node.
        this.removeChild( this.pushPinNode );
      }
      this.updatePositionMarkerOnDiagram();
      this.fixedParticleNode = null;
    },

    /**
     * @param {SOMAtom} particle
     * @private
     */
    handleMovableParticleAdded: function( particle ) {

      // Add the atom node for this guy.
      this.movableParticle = particle;
      this.movableParticleNode = new GrabbableParticleNode(
        this.dualAtomModel,
        particle,
        this.modelViewTransform,
        true,
        0
      );
      this.movableParticleNode.setShowAttractiveForces( this.showAttractiveForces );
      this.movableParticleNode.setShowRepulsiveForces( this.showRepulsiveForces );
      this.movableParticleNode.setShowTotalForces( this.showTotalForces );
      this.movableParticleLayer.addChild( this.movableParticleNode );
      this.movableParticleLayer.addChild( this.handNode );

      // Limit the particle's motion in the X direction so that it can't get to where there is too much overlap, or is
      // on the other side of the fixed particle.
      this.updateMinimumXForMovableAtom();

      // Update the position marker to represent the new particle's position.
      this.updatePositionMarkerOnDiagram();

      // Update the particle that the hand is controlling
      this.handNode.setParticle( particle );

      // Position the pointing hand hint.
      this.updateHandPosition();
    },

    /**
     * @private
     */
    handleMovableParticleRemoved: function() {

      // Get rid of the node for this guy.
      if ( this.movableParticleNode ) {
        this.movableParticleLayer.removeChild( this.movableParticleNode );
        this.movableParticleNode.dispose();
        this.movableParticleNode = null;
      }

      this.updatePositionMarkerOnDiagram();
      this.movableParticleNode = null;

      // Remove the hand node.
      if ( this.movableParticleLayer.hasChild( this.handNode ) ) {
        this.movableParticleLayer.removeChild( this.handNode );
      }
    },

    /**
     * @private
     */
    handlePositionChanged: function() {

      this.updatePositionMarkerOnDiagram();
      this.updateForceVectors();
      this.updateHandPosition();

      const scale = Math.min( window.innerWidth / this.layoutBounds.width, window.innerHeight / this.layoutBounds.height );
      let atomWindowPosition = scale * ( this.modelViewTransform.modelToViewX( this.dualAtomModel.movableAtom.getX() ) );

      // account for the view centering
      if ( scale === window.innerHeight / this.layoutBounds.height ) {
        atomWindowPosition += ( window.innerWidth - this.layoutBounds.width * scale ) / 2 - 50;
      }
      if ( atomWindowPosition > window.innerWidth ) {
        if ( !this.returnAtomButton.isVisible() ) {
          // The particle is off the canvas and the button is not yet shown, so show it.
          this.returnAtomButton.setVisible( true );
        }
      }
      else if ( this.returnAtomButton.isVisible() ) {
        // The particle is on the canvas but the button is visible (which it shouldn't be), so hide it.
        this.returnAtomButton.setVisible( false );
      }
    },

    /**
     * Update the position marker on the Lennard-Jones potential diagram. This will indicate the amount of potential
     * being experienced between the two atoms in the model.
     * @private
     */
    updatePositionMarkerOnDiagram: function() {

      if ( ( this.fixedParticle !== null ) && ( this.movableParticle !== null ) ) {
        const distance = this.fixedParticle.getPositionReference().distance( this.movableParticle.getPositionReference() );

        if ( distance > 0 ) {
          this.interactiveInteractionPotentialDiagram.setMarkerEnabled( true );
          this.interactiveInteractionPotentialDiagram.setMarkerPosition( distance );
        }
        else {
          this.interactiveInteractionPotentialDiagram.setMarkerEnabled( false );
        }
      }
      else {
        this.interactiveInteractionPotentialDiagram.setMarkerEnabled( false );
      }
    },

    /**
     * @private
     */
    updatePushPinPosition: function() {
      const mvt = this.modelViewTransform;
      const pinnedAtomPosition = this.dualAtomModel.fixedAtom.positionProperty.value;
      const pinnedAtomRadius = this.dualAtomModel.fixedAtom.radius;
      this.pushPinNode.right = mvt.modelToViewX( pinnedAtomPosition.x - pinnedAtomRadius * 0.5 );
      this.pushPinNode.bottom = mvt.modelToViewY( pinnedAtomPosition.y - pinnedAtomRadius * 0.5 );
    },

    /**
     * @private
     */
    updateHandPosition: function() {
      this.handNode.left = this.modelViewTransform.modelToViewX( this.movableParticle.positionProperty.value.x );
    },

    /**
     * Update the minimum X value allowed for the movable atom.  This prevents too much overlap between the atoms.
     * @public
     */
    updateMinimumXForMovableAtom: function() {
      if ( this.movableParticle !== null && this.fixedParticle !== null ) {

        // Use a minimum X value that is just a bit less than the sigma value, since the repulsive potential goes up
        // rapidly with smaller values.
        const minXInModel = this.dualAtomModel.getSigma() * 0.9;
        this.interactiveInteractionPotentialDiagram.setMinXForAtom( minXInModel );
        const minXInView = this.modelViewTransform.modelToViewX( minXInModel );
        this.movableParticleNode.setMinX( minXInView );
        this.handNode.setMinX( minXInView );
      }
    },

    /**
     * @private
     */
    updateForceVectors: function() {
      if ( ( this.fixedParticle !== null ) && ( this.movableParticle !== null ) ) {
        this.fixedParticleNode.setForces( this.dualAtomModel.attractiveForce, -this.dualAtomModel.repulsiveForce );
        this.movableParticleNode.setForces( -this.dualAtomModel.attractiveForce, this.dualAtomModel.repulsiveForce );
      }
    }
  } );
} );