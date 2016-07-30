// Copyright 2015, University of Colorado Boulder

/**
 * This is the model for two atoms interacting with a Lennard-Jones interaction potential.
 *
 * @author John Blanco
 * @author Siddhartha Chinthapally (Actual Concepts)
 */
define( function( require ) {
  'use strict';

  // modules
  var BondingState = require( 'STATES_OF_MATTER/atomic-interactions/model/BondingState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );
  var Vector2 = require( 'DOT/Vector2' );
  var LjPotentialCalculator = require( 'STATES_OF_MATTER/common/model/LjPotentialCalculator' );
  var InteractionStrengthTable = require( 'STATES_OF_MATTER/common/model/InteractionStrengthTable' );
  var SigmaTable = require( 'STATES_OF_MATTER/common/model/SigmaTable' );
  var statesOfMatter = require( 'STATES_OF_MATTER/statesOfMatter' );
  var StatesOfMatterConstants = require( 'STATES_OF_MATTER/common/StatesOfMatterConstants' );
  var AtomType = require( 'STATES_OF_MATTER/common/model/AtomType' );
  var AtomFactory = require( 'STATES_OF_MATTER/common/model/AtomFactory' );
  var AtomPair = require( 'STATES_OF_MATTER/atomic-interactions/model/AtomPair' );

  // constants
  var BONDED_OSCILLATION_PROPORTION = 0.06; // Proportion of atom radius.
  var DEFAULT_ATOM_TYPE = AtomType.NEON;
  var MAX_APPROXIMATION_ITERATIONS = 100;
  var THRESHOLD_VELOCITY = 100;  // Used to distinguish small oscillations from real movement.
  var VIBRATION_COUNTER_RESET_VALUE = 72;

  // The maximum time step was empirically determined to be as large as possible while still making sure that energy
  // is conserved in all interaction cases.  See https://github.com/phetsims/states-of-matter/issues/53 for more info.
  var MAX_TIME_STEP = 0.005;

  /**
   * This is the model for two atoms interacting with a Lennard-Jones interaction potential.
   * @constructor
   */
  function DualAtomModel() {

    this.fixedAtom = null;
    this.movableAtom = null;
    this.settingBothAtomTypes = false;  // Flag used to prevent getting in disallowed state.
    this.bondingState = BondingState.UNBONDED; // Tracks whether the atoms have formed a chemical bond.
    this.vibrationCounter = 0; // Used to vibrate fixed atom during bonding.
    this.potentialWhenAtomReleased = 0; // Used to set magnitude of vibration.
    this.atomFactory = AtomFactory;
    this.isHandNodeVisible = true; // indicate moving hand node visible or not
    this.ljPotentialCalculator = new LjPotentialCalculator(
      StatesOfMatterConstants.MIN_SIGMA,
      StatesOfMatterConstants.MIN_EPSILON
    );
    this.residualTime = 0; // accumulates dt values not yet applied to model
    PropertySet.call( this, {
        interactionStrength: 100, // Epsilon/k-Boltzmann is in Kelvin.
        motionPaused: false,
        atomPair: AtomPair.NEON_NEON,
        isPlaying: true,
        speed: 'normal',
        atomDiameter: 300,
        forces: 'hideForces',
        forceControlPanelExpand: false
      }
    );

    // Put the model into its initial state.
    this.reset();
  }

  statesOfMatter.register( 'DualAtomModel', DualAtomModel );

  return inherit( PropertySet, DualAtomModel, {

    /**
     * @returns {StatesOfMatterAtom/null}
     * @public
     */
    getFixedAtomRef: function() {
      return this.fixedAtom;
    },

    /**
     * @returns {StatesOfMatterAtom/null}
     * @public
     */
    getMovableAtomRef: function() {
      return this.movableAtom;
    },

    /**
     * @returns {number}
     * @public
     */
    getAttractiveForce: function() {
      return this.attractiveForce;
    },

    /**
     * @returns {number}
     * @public
     */
    getRepulsiveForce: function() {
      return this.repulsiveForce;
    },

    /**
     * @returns {string}
     * @public
     */
    getFixedAtomType: function() {
      return this.fixedAtom.getType();
    },

    /**
     * @returns {string}
     * @public
     */
    getMovableAtomType: function() {
      return this.movableAtom.getType();
    },

    /***
     * @returns {boolean}
     * @public
     */
    getMotionPaused: function() {
      return this.motionPaused;
    },

    /**
     * @param {string} atomType -  indicates type of molecule
     * @public
     */
    setFixedAtomType: function( atomType ) {

      if ( this.fixedAtom === null || this.fixedAtom.getType() !== atomType ) {
        if ( !this.settingBothAtomTypes &&
             ( ( atomType === AtomType.ADJUSTABLE && this.movableAtom.getType() !== AtomType.ADJUSTABLE ) ||
               ( atomType !== AtomType.ADJUSTABLE && this.movableAtom.getType() === AtomType.ADJUSTABLE ) ) ) {
          console.log( ' - Error: Cannot set just one atom to be adjustable, ignoring request.' );
          return;
        }
        this.ensureValidAtomType( atomType );
        this.bondingState = BondingState.UNBONDED;

        if ( this.fixedAtom !== null ) {
          this.fixedAtom = null;
        }

        this.fixedAtom = this.atomFactory.createAtom( atomType );

        // Set the value for sigma used in the LJ potential calculations.
        if ( this.movableAtom !== null ) {
          this.ljPotentialCalculator.setSigma( SigmaTable.getSigma( this.getFixedAtomType(),
            this.getMovableAtomType() ) );
        }

        // If both atoms exist, set the value of epsilon.
        if ( this.movableAtom !== null ) {
          this.ljPotentialCalculator.setEpsilon(
            InteractionStrengthTable.getInteractionPotential( this.fixedAtom.getType(),
              this.movableAtom.getType() ) );
        }

        this.fixedAtom.setPosition( 0, 0 );
        this.resetMovableAtomPos();
      }
    },

    /**
     * @param {string} atomType - indicates type of molecule
     * @public
     */
    setMovableAtomType: function( atomType ) {

      if ( this.movableAtom === null || this.movableAtom.getType() !== atomType ) {

        if ( !this.settingBothAtomTypes &&
             ( ( atomType === AtomType.ADJUSTABLE && this.movableAtom.getType() !== AtomType.ADJUSTABLE ) ||
               ( atomType !== AtomType.ADJUSTABLE && this.movableAtom.getType() === AtomType.ADJUSTABLE ) ) ) {
          console.log( ' - Error: Cannot set just one atom to be adjustable, ignoring request.' );
          return;
        }

        this.ensureValidAtomType( atomType );
        this.bondingState = BondingState.UNBONDED;

        if ( this.movableAtom !== null ) {
          this.movableAtom = null;
        }

        this.movableAtom = this.atomFactory.createAtom( atomType );

        // Set the value for sigma used in the LJ potential calculations.
        if ( this.movableAtom !== null ) {
          this.ljPotentialCalculator.setSigma( SigmaTable.getSigma( this.getFixedAtomType(),
            this.getMovableAtomType() ) );
        }

        // If both atoms exist, set the value of epsilon.
        if ( this.fixedAtom !== null ) {
          this.ljPotentialCalculator.setEpsilon(
            InteractionStrengthTable.getInteractionPotential( this.fixedAtom.getType(),
              this.movableAtom.getType() ) );
        }
        this.resetMovableAtomPos();
      }
    },

    /**
     * @param {string} atomType - indicates type of molecule
     * @public
     */
    ensureValidAtomType: function( atomType ) {
      // Verify that this is a supported value.
      assert && assert( ( atomType === AtomType.NEON ) ||
                        ( atomType === AtomType.ARGON ) ||
                        ( atomType === AtomType.OXYGEN ) ||
                        ( atomType === AtomType.ADJUSTABLE ),
        'Error: Unsupported atom type.' );
    },

    /**
     * @param {string} atomType - indicates type of molecule
     * @public
     */
    setBothAtomTypes: function( atomType ) {

      if ( this.fixedAtom === null || this.movableAtom === null || this.fixedAtom.getType() !== atomType ||
           this.movableAtom.getType() !== atomType ) {
        this.settingBothAtomTypes = true;
        this.setFixedAtomType( atomType );
        this.setMovableAtomType( atomType );
        this.settingBothAtomTypes = false;
      }
    },

    /**
     * Set the sigma value, a.k.a. the Atomic Diameter Parameter, for the adjustable atom.  This is one of the two
     * parameters that are used for calculating the Lennard-Jones potential. If an attempt is made to set this value
     * when the adjustable atom is not selected, it is ignored.
     * @param {number}sigma - distance parameter
     * @public
     */
    setAdjustableAtomSigma: function( sigma ) {
      if ( ( this.fixedAtom.getType() === AtomType.ADJUSTABLE ) &&
           ( this.movableAtom.getType() === AtomType.ADJUSTABLE ) &&
           ( sigma !== this.ljPotentialCalculator.getSigma() ) ) {

        if ( sigma > StatesOfMatterConstants.MAX_SIGMA ) {
          sigma = StatesOfMatterConstants.MAX_SIGMA;
        }
        else if ( sigma < StatesOfMatterConstants.MIN_SIGMA ) {
          sigma = StatesOfMatterConstants.MIN_SIGMA;
        }
        this.ljPotentialCalculator.setSigma( sigma );
        this.movableAtom.setPosition( this.ljPotentialCalculator.calculateMinimumForceDistance(), 0 );
        this.fixedAtom.setRadius( sigma / 2 );
        this.movableAtom.setRadius( sigma / 2 );
      }
    },

    /**
     * Get the value of the sigma parameter that is being used for the motion calculations.  If the atoms are the
     * same, it will be the diameter of one atom.  If they are not, it will be a function of the diameters.
     * @return {number}
     * @public
     */
    getSigma: function() {
      return this.ljPotentialCalculator.getSigma();
    },

    /**
     * Set the epsilon value, a.k.a. the Interaction Strength Parameter, which is one of the two parameters that
     * describes the Lennard-Jones potential.
     * @param {number}epsilon - interaction strength parameter
     * @public
     */
    setEpsilon: function( epsilon ) {

      if ( epsilon < StatesOfMatterConstants.MIN_EPSILON ) {
        epsilon = StatesOfMatterConstants.MIN_EPSILON;
      }
      else if ( epsilon > StatesOfMatterConstants.MAX_EPSILON ) {
        epsilon = StatesOfMatterConstants.MAX_EPSILON;
      }

      if ( ( this.fixedAtom.getType() === AtomType.ADJUSTABLE ) &&
           ( this.movableAtom.getType() === AtomType.ADJUSTABLE ) ) {

        this.ljPotentialCalculator.setEpsilon( epsilon );
      }
    },

    /**
     * Get the epsilon value, a.k.a. the Interaction Strength Parameter, which is one of the two parameters that
     * describes the Lennard-Jones potential.
     * @returns {number}
     * @public
     */
    getEpsilon: function() {
      return this.ljPotentialCalculator.getEpsilon();
    },

    /**
     * @returns {number}
     * @public
     */
    getBondingState: function() {
      return this.bondingState;
    },

    /**
     * @param {boolean} paused -  is to set particle motion
     * @public
     */
    setMotionPaused: function( paused ) {
      this.motionPaused = paused;
      this.movableAtom.setVx( 0 );
      if ( !paused ) {
        // The atom is being released by the user.  Record the amount of energy that the atom has at this point in
        // time for later use.  The calculation is made be evaluating the force at the current location and
        // multiplying it by the distance to the point where the LJ potential is minimized.  Note that this is not
        // precisely correct, since the potential is not continuous, but is close enough for our purposes.
        this.potentialWhenAtomReleased =
          this.ljPotentialCalculator.calculatePotentialEnergy( this.movableAtom.getPositionReference().distance(
            this.fixedAtom.getPositionReference() ) );
      }
    },

    /**
     * Release the bond that exists between the two atoms (if there is one).
     * @public
     */
    releaseBond: function() {
      if ( this.bondingState === BondingState.BONDING ) {
        // A bond is in the process of forming, so reset everything that is involved in the bonding process.
        this.vibrationCounter = 0;
      }
      this.bondingState = BondingState.UNBONDED;
    },

    /**
     * @override
     * @public
     */
    reset: function() {
      PropertySet.prototype.reset.call( this );
      if ( this.fixedAtom === null || this.fixedAtom.getType() !== DEFAULT_ATOM_TYPE ||
           this.movableAtom === null || this.movableAtom.getType() !== DEFAULT_ATOM_TYPE ) {
        this.setBothAtomTypes( DEFAULT_ATOM_TYPE );
      }
      else {
        this.resetMovableAtomPos();
      }
      // Make sure we are not paused.
      this.motionPaused = false;
    },

    /**
     * Put the movable atom back to the location where the force is minimized, and reset the velocity and
     * acceleration to 0.
     * @public
     */
    resetMovableAtomPos: function() {
      if ( this.movableAtom !== null ) {
        this.movableAtom.setPosition( this.ljPotentialCalculator.calculateMinimumForceDistance(), 0 );
        this.movableAtom.setVx( 0 );
        this.movableAtom.setAx( 0 );
      }
    },

    /**
     * Called by the animation loop.
     * @param {number} simulationTimeStep -- time in seconds
     * @public
     */
    step: function( simulationTimeStep ) {

      // If simulationTimeStep is excessively large, ignore it - it probably means the user returned to the tab after
      // the tab or the browser was hidden for a while.
      if ( simulationTimeStep > 1.0 ) {
        return;
      }

      if ( this.isPlaying ) {

        // Using real world time for this results in the atoms moving a little slowly, so the time step is adjusted
        // here.  The multipliers were empirically determined.
        var adjustedTimeStep;
        if ( this.speed === 'normal' ) {
          adjustedTimeStep = simulationTimeStep * 1.5;
        }
        else {
          adjustedTimeStep = simulationTimeStep * 0.5;
        }

        this.stepInternal( adjustedTimeStep );
      }
    },

    /**
     * @param {number} dt -- time in seconds
     * @private
     */
    stepInternal: function( dt ) {

      var numInternalModelIterations = 1;
      var modelTimeStep = dt;

      // if the time step is bigger than the max allowed, set up multiple iterations of the model
      if ( dt > MAX_TIME_STEP ) {
        numInternalModelIterations = dt / MAX_TIME_STEP;
        this.residualTime += dt - ( numInternalModelIterations * MAX_TIME_STEP );
        modelTimeStep = MAX_TIME_STEP;
      }

      // if residual time has accumulated enough, add an iteration
      if ( this.residualTime > modelTimeStep ) {
        numInternalModelIterations++;
        this.residualTime -= modelTimeStep;
      }

      // Update the forces and motion of the atoms.
      for ( var i = 0; i < numInternalModelIterations; i++ ) {

        // Execute the force calculation.
        this.updateForces();

        // Update the motion information (unless the atoms are bonded).
        if ( this.bondingState !== BondingState.BONDED ) {
          this.updateAtomMotion( modelTimeStep );
        }

        // Updatae the bonding state (only affects some combincations of atoms).
        this.updateBondingState();
      }
    },

    /**
     * Called when the movable atom is moved
     * @public
     */
    positionChanged: function() {
      if ( this.motionPaused ) {
        // The user must be moving the atom from the view. Update the forces correspondingly.
        this.updateForces();
      }
    },

    /**
     * @private
     */
    updateForces: function() {

      var distance = this.movableAtom.getPositionReference().distance( Vector2.ZERO );

      if ( distance < ( this.fixedAtom.getRadius() + this.movableAtom.getRadius() ) / 8 ) {

        // The atoms are too close together, and calculating the force will cause unusable levels of speed later, so
        // we limit it.
        distance = ( this.fixedAtom.getRadius() + this.movableAtom.getRadius() ) / 8;
      }

      // Calculate the force.  The result should be in newtons.
      this.attractiveForce = this.ljPotentialCalculator.calculateAttractiveLjForce( distance );
      this.repulsiveForce = this.ljPotentialCalculator.calculateRepulsiveLjForce( distance );
    },

    /**
     * Update the position, velocity, and acceleration of the dummy movable atom.
     * @private
     */
    updateAtomMotion: function( dt ) {

      var mass = this.movableAtom.getMass() * 1.6605402E-27;  // Convert mass to kilograms.
      var acceleration = ( this.repulsiveForce - this.attractiveForce ) / mass;

      // Update the acceleration for the movable atom.  We do this regardless of whether movement is paused so that
      // the force vectors can be shown appropriately if the user moves the atoms.
      this.movableAtom.setAx( acceleration );

      if ( !this.motionPaused ) {

        // Calculate tne new velocity.
        var newVelocity = this.movableAtom.getVx() + ( acceleration * dt );

        // If the velocity gets too large, the atom can get away before the bond can be tested, and it will appear to
        // vanish from the screen, so we limit it here to an empirically determined max value.
        newVelocity = Math.min( newVelocity, 5000 );

        // Update the position and velocity of the atom.
        this.movableAtom.setVx( newVelocity );
        var xPos = this.movableAtom.getX() + ( this.movableAtom.getVx() * dt );
        this.movableAtom.setPosition( xPos, 0 );
      }
    },

    updateBondingState: function() {
      if ( this.movableAtom.getType() === AtomType.OXYGEN && this.fixedAtom.getType() === AtomType.OXYGEN ) {
        switch( this.bondingState ) {

          case BondingState.UNBONDED:
            if ( ( this.movableAtom.getVx() > THRESHOLD_VELOCITY ) &&
                 ( this.movableAtom.getPositionReference().distance( this.fixedAtom.getPositionReference() ) <
                   this.fixedAtom.getRadius() * 2.5 ) ) {

              // The atoms are close together and the movable one is starting to move away, which is the point at
              // which we consider the bond to start forming.
              this.bondingState = BondingState.BONDING;
              this.startFixedAtomVibration();
            }
            break;

          case BondingState.BONDING:
            if ( this.attractiveForce > this.repulsiveForce ) {

              // A bond is forming and the force just exceeded the repulsive force, meaning that the atom is starting
              // to pass the bottom of the well.
              this.movableAtom.setAx( 0 );
              this.movableAtom.setVx( 0 );
              this.minPotentialDistance = this.ljPotentialCalculator.calculateMinimumForceDistance();
              this.bondedOscillationRightDistance = this.minPotentialDistance +
                                                    BONDED_OSCILLATION_PROPORTION * this.movableAtom.getRadius();
              this.bondedOscillationLeftDistance = this.approximateEquivalentPotentialDistance(
                this.bondedOscillationRightDistance );
              this.bondingState = BondingState.BONDED;
              this.stepFixedAtomVibration();
            }
            break;

          case BondingState.BONDED:

            // Override the atom motion calculations and cause the atom to oscillate a fixed distance from the bottom
            // of the well. This is necessary because otherwise we tend to have an aliasing problem where it appears
            // that the atom oscillates for a while, then damps out, then starts up again.
            this.movableAtom.setAx( 0 );
            this.movableAtom.setVx( 0 );
            if ( this.movableAtom.getX() > this.minPotentialDistance ) {
              this.movableAtom.setPosition( this.bondedOscillationLeftDistance, 0 );
            }
            else {
              this.movableAtom.setPosition( this.bondedOscillationRightDistance, 0 );
            }

            if ( this.isFixedAtomVibrating() ) {
              this.stepFixedAtomVibration();
            }
            break;

          default:
            assert && assert( false, 'invalid bonding state' );
            break;
        }
      }
    },

    /**
     * @private
     */
    startFixedAtomVibration: function() {
      this.vibrationCounter = VIBRATION_COUNTER_RESET_VALUE;
    },

    /**
     * @private
     */
    stepFixedAtomVibration: function() {
      if ( this.vibrationCounter > 0 ) {
        var vibrationScaleFactor = 1;
        if ( this.vibrationCounter < VIBRATION_COUNTER_RESET_VALUE / 4 ) {
          // In the last part of the vibration, starting to wind it down.
          vibrationScaleFactor = this.vibrationCounter / ( VIBRATION_COUNTER_RESET_VALUE / 4 );
        }
        if ( this.fixedAtom.getX() !== 0 ) {
          // Go back to the original position every other time.
          this.fixedAtom.setPosition( 0, 0 );
        }
        else {
          // Move some distance from the original position based on the energy contained at the time of bonding.  The
          // multiplication factor in the equation below is empirically determined to look good on the screen.
          var xPos = ( Math.random() * 2 - 1 ) * this.potentialWhenAtomReleased * 5e19 * vibrationScaleFactor;
          //var yPos = ( Math.random() * 2 - 1 ) * this.potentialWhenAtomReleased * 5e19 * vibrationScaleFactor;
          var yPos = this.fixedAtom.positionProperty.value.y;
          this.fixedAtom.setPosition( xPos, yPos );
        }

        // Decrement the vibration counter.
        this.vibrationCounter--;
      }
      else if ( this.fixedAtom.getX() !== 0 || this.fixedAtom.getY() !== 0 ) {
        this.fixedAtom.setPosition( 0, 0 );
      }
    },

    /**
     * This is a highly specialized function that is used for figuring out the inter-atom distance at which the value
     * of the potential on the left side of the of the min of the LJ potential curve is equal to that at the given
     * distance to the right of the min of the LJ potential curve.
     * @param {number} distance - inter-atom distance, must be greater than the point at which the potential is at the
     * minimum value.
     * @return{number}
     * @private
     */
    approximateEquivalentPotentialDistance: function( distance ) {

      if ( distance < this.ljPotentialCalculator.calculateMinimumForceDistance() ) {
        console.log( '- Error: Distance value out of range.' );
        return 0;
      }

      // Iterate by a fixed amount until a reasonable value is found.
      var totalSpanDistance = distance - this.ljPotentialCalculator.getSigma();
      var distanceChangePerIteration = totalSpanDistance / MAX_APPROXIMATION_ITERATIONS;
      var targetPotential = this.ljPotentialCalculator.calculateLjPotential( distance );
      var equivalentPotentialDistance = this.ljPotentialCalculator.calculateMinimumForceDistance();
      for ( var i = 0; i < MAX_APPROXIMATION_ITERATIONS; i++ ) {
        if ( this.ljPotentialCalculator.calculateLjPotential( equivalentPotentialDistance ) > targetPotential ) {
          // We've crossed over to where the potential is less negative. Close enough.
          break;
        }
        equivalentPotentialDistance -= distanceChangePerIteration;
      }

      return equivalentPotentialDistance;
    },

    /**
     * @returns {boolean}
     * @private
     */
    isFixedAtomVibrating: function() {
      return this.vibrationCounter > 0;
    }

  } );
} );
