// Copyright 2019, University of Colorado Boulder

/**
 * simple moving average calculator
 */
define( require => {
  'use strict';

  // modules
  const inherit = require( 'PHET_CORE/inherit' );
  const merge = require( 'PHET_CORE/merge' );
  const statesOfMatter = require( 'STATES_OF_MATTER/statesOfMatter' );

  /**
   * @constructor
   */
  function MovingAverage( size, options ) {

    options = merge( {
      initialValue: 0
    }, options );

    // @public
    this.size = size;
    this.average = 0;

    // @private
    this.initialValue = options.initialValue;
    this.array = new Array( size );

    // set up initial values
    this.reset();
  }

  statesOfMatter.register( 'MovingAverage', MovingAverage );

  return inherit( Object, MovingAverage, {

    addValue: function( newValue ) {
      const replacedValue = this.array[ this.currentIndex ];
      this.array[ this.currentIndex ] = newValue;
      this.currentIndex = ( this.currentIndex + 1 ) % this.size;
      this.total = ( this.total - replacedValue ) + newValue;
      this.average = this.total / this.size;
    },

    reset: function() {
      for ( let i = 0; i < this.size; i++ ) {
        this.array[ i ] = this.initialValue;
      }
      this.total = this.initialValue * this.size;
      this.average = this.total / this.size;
      this.currentIndex = 0;
    }
  } );
} );
