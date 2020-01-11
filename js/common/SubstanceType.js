// Copyright 2016-2020, University of Colorado Boulder

define( require => {
  'use strict';

  const Enumeration = require( 'PHET_CORE/Enumeration' );
  const statesOfMatter = require( 'STATES_OF_MATTER/statesOfMatter' );

  const SubstanceType = Enumeration.byKeys( [ 'NEON', 'ARGON', 'DIATOMIC_OXYGEN', 'WATER', 'ADJUSTABLE_ATOM' ] );
  return statesOfMatter.register( 'SubstanceType', SubstanceType );
} );