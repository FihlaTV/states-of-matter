// Copyright 2014-2020, University of Colorado Boulder

/**
 * This class defines a node that has a liquid thermometer and a numerical readout that can display the temperature in
 * degrees Kelvin or degrees Celsius.
 *
 * @author Siddhartha Chinthapally (Actual Concepts)
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const ComboBox = require( 'SUN/ComboBox' );
  const ComboBoxItem = require( 'SUN/ComboBoxItem' );
  const merge = require( 'PHET_CORE/merge' );
  const Enumeration = require( 'PHET_CORE/Enumeration' );
  const EnumerationProperty = require( 'AXON/EnumerationProperty' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Node = require( 'SCENERY/nodes/Node' );
  const NumberProperty = require( 'AXON/NumberProperty' );
  const Panel = require( 'SUN/Panel' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const Property = require( 'AXON/Property' );
  const SOMQueryParameters = require( 'STATES_OF_MATTER/common/SOMQueryParameters' );
  const statesOfMatter = require( 'STATES_OF_MATTER/statesOfMatter' );
  const Tandem = require( 'TANDEM/Tandem' );
  const Text = require( 'SCENERY/nodes/Text' );
  const ThermometerNode = require( 'SCENERY_PHET/ThermometerNode' );
  const Utils = require( 'DOT/Utils' );
  const VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  const celsiusUnitsString = require( 'string!STATES_OF_MATTER/celsiusUnits' );
  const kelvinUnitsString = require( 'string!STATES_OF_MATTER/kelvinUnits' );

  // constants
  const MAX_LENGTH_TEMPERATURE_TEXT = '99999 ' + celsiusUnitsString;
  const MAX_TEMPERATURE_TEXT_WIDTH = 35; // empirically determined
  const TEMPERATURE_READOUT_FONT = new PhetFont( 11 );
  const TEMPERATURE_UNITS = Enumeration.byKeys( [ 'KELVIN', 'CELSIUS' ] );

  // clamping the red mercury display at 1000
  const MAX_TEMPERATURE_TO_CLAMP_RED_MERCURY = 1000;

  /**
   * @param {MultipleParticleModel} multipleParticleModel - model of the simulation
   * @param {ModelViewTransform2} modelViewTransform The model view transform for transforming particle position.
   * @param {Object} [options] that can be passed on to the underlying node
   * @constructor
   */
  function CompositeThermometerNode( multipleParticleModel, modelViewTransform, options ) {

    options = merge( {
      tandem: Tandem.REQUIRED
    }, options );

    Node.call( this );
    const self = this;

    // @private
    this.multipleParticleModel = multipleParticleModel;
    this.modelViewTransform = modelViewTransform;

    // @private property that will be used by the thermometerNode node to control how high the liquid is
    this.temperatureInKelvinProperty = new NumberProperty(
      multipleParticleModel.getTemperatureInKelvin(),
      {
        tandem: options.tandem.createTandem( 'temperatureInKelvinProperty' ),
        phetioReadOnly: true
      }
    );

    // add thermometer node
    const thermometerNode = new ThermometerNode( 0, MAX_TEMPERATURE_TO_CLAMP_RED_MERCURY, this.temperatureInKelvinProperty, {
      outlineStroke: 'black',
      backgroundFill: 'white',
      tickSpacing: 8,
      majorTickLength: 8,
      minorTickLength: 4,
      bulbDiameter: 23,
      lineWidth: 1.4,
      tubeWidth: 13,
      tubeHeight: 65,
      tandem: options.tandem.createTandem( 'thermometerNode' )
    } );

    // @private temperature nodes combo box
    this.temperatureKelvinText = new Text( '', {
      font: TEMPERATURE_READOUT_FONT,
      maxWidth: MAX_TEMPERATURE_TEXT_WIDTH,
      tandem: options.tandem.createTandem( 'temperatureKelvinText' ),
      phetioReadOnly: true
    } );
    this.temperatureCelsiusText = new Text( MAX_LENGTH_TEMPERATURE_TEXT, {
      font: TEMPERATURE_READOUT_FONT,
      maxWidth: MAX_TEMPERATURE_TEXT_WIDTH,
      tandem: options.tandem.createTandem( 'temperatureCelsiusText' ),
      phetioReadOnly: true
    } );

    // @private
    this.temperatureUnitsProperty = new EnumerationProperty(
      TEMPERATURE_UNITS,
      SOMQueryParameters.defaultCelsius ? TEMPERATURE_UNITS.CELSIUS : TEMPERATURE_UNITS.KELVIN,
      { tandem: options.tandem.createTandem( 'temperatureUnitsProperty' ) }
    );
    const temperatureComboBox = new ComboBox(
      [
        new ComboBoxItem( this.temperatureKelvinText, TEMPERATURE_UNITS.KELVIN ),
        new ComboBoxItem( this.temperatureCelsiusText, TEMPERATURE_UNITS.CELSIUS )
      ],
      this.temperatureUnitsProperty,
      this,
      {
        xMargin: 6,
        yMargin: 6,
        cornerRadius: 5,
        buttonLineWidth: 0.4,
        tandem: options.tandem.createTandem( 'temperatureComboBox' )
      }
    );

    const contentNode = new VBox( {
      spacing: 10,
      children: [ temperatureComboBox, thermometerNode ]
    } );

    const panel = new Panel( contentNode, {
      xMargin: 0,
      yMargin: 0,
      fill: null,
      stroke: null,
      lineWidth: 0,
      resize: false
    } );

    this.addChild( panel );

    // Define a function that will update the various properties and textual values.
    function updateTemperatureValues() {
      const tempInKelvin = self.multipleParticleModel.getTemperatureInKelvin();
      if ( tempInKelvin !== null ) {
        const tempInKelvinRounded = Utils.roundSymmetric( tempInKelvin );
        self.temperatureKelvinText.setText( tempInKelvinRounded + ' ' + kelvinUnitsString );
        self.temperatureCelsiusText.setText( Utils.roundSymmetric( tempInKelvin - 273.15 ) + ' ' + celsiusUnitsString );
        self.temperatureInKelvinProperty.value = tempInKelvinRounded > MAX_TEMPERATURE_TO_CLAMP_RED_MERCURY ?
                                                 MAX_TEMPERATURE_TO_CLAMP_RED_MERCURY : tempInKelvinRounded;
      }
      else {
        self.temperatureKelvinText.setText( '--' );
        self.temperatureCelsiusText.setText( '--' );
        self.temperatureInKelvinProperty.value = 0;
      }
    }

    // Call the update when any of several properties change value.
    Property.multilink(
      [ multipleParticleModel.temperatureSetPointProperty, multipleParticleModel.substanceProperty ],
      updateTemperatureValues
    );

    this.mutate( options );
  }

  statesOfMatter.register( 'CompositeThermometerNode', CompositeThermometerNode );

  return inherit( Panel, CompositeThermometerNode, {

    // @public
    reset: function() {
      this.temperatureUnitsProperty.reset();
    }
  } );
} );