// Copyright 2014-2020, University of Colorado Boulder

/**
 * The 'Solid Liquid Gas' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author Aaron Davis
 * @author Siddhartha Chinthapally (Actual Concepts)
 */
define( require => {
  'use strict';

  // modules
  const inherit = require( 'PHET_CORE/inherit' );
  const MultipleParticleModel = require( 'STATES_OF_MATTER/common/model/MultipleParticleModel' );
  const Screen = require( 'JOIST/Screen' );
  const SOMColorProfile = require( 'STATES_OF_MATTER/common/view/SOMColorProfile' );
  const SOMConstants = require( 'STATES_OF_MATTER/common/SOMConstants' );
  const StatesIcon = require( 'STATES_OF_MATTER/states/StatesIcon' );
  const statesOfMatter = require( 'STATES_OF_MATTER/statesOfMatter' );
  const StatesScreenView = require( 'STATES_OF_MATTER/states/view/StatesScreenView' );

  // strings
  const statesString = require( 'string!STATES_OF_MATTER/states' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function StatesScreen( tandem ) {

    const options = {
      name: statesString,
      backgroundColorProperty: SOMColorProfile.backgroundProperty,
      homeScreenIcon: new StatesIcon( Screen.MINIMUM_HOME_SCREEN_ICON_SIZE ),
      showUnselectedHomeScreenIconFrame: true,
      maxDT: SOMConstants.MAX_DT,
      tandem: tandem
    };

    Screen.call( this,
      function() { return new MultipleParticleModel( tandem.createTandem( 'model' ) ); },
      function( model ) { return new StatesScreenView( model, tandem.createTandem( 'view' ) ); },
      options
    );
  }

  statesOfMatter.register( 'StatesScreen', StatesScreen );

  return inherit( Screen, StatesScreen );
} );