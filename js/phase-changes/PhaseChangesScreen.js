// Copyright 2014-2017, University of Colorado Boulder

/**
 * The 'Phase Changes' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author Aaron Davis
 * @author Siddhartha Chinthapally (Actual Concepts)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var MultipleParticleModel = require( 'STATES_OF_MATTER/common/model/MultipleParticleModel' );
  var PhaseChangesIcon = require( 'STATES_OF_MATTER/phase-changes/PhaseChangesIcon' );
  var PhaseChangesScreenView = require( 'STATES_OF_MATTER/phase-changes/view/PhaseChangesScreenView' );
  var Screen = require( 'JOIST/Screen' );
  var statesOfMatter = require( 'STATES_OF_MATTER/statesOfMatter' );
  var StatesOfMatterColorProfile = require( 'STATES_OF_MATTER/common/view/StatesOfMatterColorProfile' );
  var StatesOfMatterConstants = require( 'STATES_OF_MATTER/common/StatesOfMatterConstants' );

  // strings
  var phaseChangesString = require( 'string!STATES_OF_MATTER/phaseChanges' );

  /**
   * @param {boolean} isInteractionDiagramEnabled
   * @constructor
   */
  function PhaseChangesScreen( isInteractionDiagramEnabled ) {

    var options = {
      name: phaseChangesString,
      backgroundColorProperty: StatesOfMatterColorProfile.backgroundProperty,
      homeScreenIcon: new PhaseChangesIcon( Screen.MINIMUM_HOME_SCREEN_ICON_SIZE ),
      maxDT: StatesOfMatterConstants.MAX_DT
    };

    Screen.call( this,
      function() { return new MultipleParticleModel(); },
      function( model ) { return new PhaseChangesScreenView( model, isInteractionDiagramEnabled ); },
      options
    );
  }

  statesOfMatter.register( 'PhaseChangesScreen', PhaseChangesScreen );

  return inherit( Screen, PhaseChangesScreen );
} );