// Copyright 2014-2015, University of Colorado Boulder

/**
 * View for the panel for selecting the atoms/molecules
 *
 * @author Siddhartha Chinthapally (Actual Concepts)
 */
define( function( require ) {
  'use strict';

  // modules
  var AtomAndMoleculeIcons = require( 'STATES_OF_MATTER/common/view/AtomAndMoleculeIcons' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var HSlider = require( 'SUN/HSlider' );
  var HStrut = require( 'SCENERY/nodes/HStrut' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultipleParticleModel = require( 'STATES_OF_MATTER/common/model/MultipleParticleModel' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Panel = require( 'SUN/Panel' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var RadioButtonGroup = require( 'SUN/buttons/RadioButtonGroup' );
  var statesOfMatter = require( 'STATES_OF_MATTER/statesOfMatter' );
  var StatesOfMatterColorProfile = require( 'STATES_OF_MATTER/common/view/StatesOfMatterColorProfile' );
  var StatesOfMatterConstants = require( 'STATES_OF_MATTER/common/StatesOfMatterConstants' );
  var SubstanceType = require( 'STATES_OF_MATTER/common/SubstanceType' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  var neonString = require( 'string!STATES_OF_MATTER/neon' );
  var weakString = require( 'string!STATES_OF_MATTER/weak' );
  var strongString = require( 'string!STATES_OF_MATTER/strong' );
  var argonString = require( 'string!STATES_OF_MATTER/argon' );
  var waterString = require( 'string!STATES_OF_MATTER/water' );
  var diatomicOxygenString = require( 'string!STATES_OF_MATTER/diatomicOxygen' );
  var adjustableAttractionString = require( 'string!STATES_OF_MATTER/adjustableAttraction' );
  var atomsAndMoleculesString = require( 'string!STATES_OF_MATTER/AtomsAndMolecules' );
  var interactionStrengthWithSymbolString = require( 'string!STATES_OF_MATTER/interactionStrengthWithSymbol' );

  // constants
  var inset = 10;
  var MAX_WIDTH = 120;
  var TICK_TEXT_MAX_WIDTH = 40;
  var NORMAL_TEXT_FONT_SIZE = 12;

  /**
   * @param { MultipleParticleModel } multipleParticleModel - model of the simulation
   * @param {boolean} isBasicVersion
   * @param {Object} [options] options for various panel display properties
   * @constructor
   */
  function PhaseChangesMoleculesControlPanel( multipleParticleModel, isBasicVersion, options ) {

    options = _.extend( {
      xMargin: 5,
      yMargin: 5,
      fill: StatesOfMatterColorProfile.controlPanelBackgroundProperty,
      stroke: StatesOfMatterColorProfile.controlPanelStrokeProperty,
      lineWidth: 1,
      cornerRadius: StatesOfMatterConstants.PANEL_CORNER_RADIUS,
      minWidth: 0
    }, options );

    Node.call( this );
    var textOptions = { font: new PhetFont( NORMAL_TEXT_FONT_SIZE ), fill: '#FFFFFF', maxWidth: MAX_WIDTH };
    var tickTextOptions = {
      font: new PhetFont( NORMAL_TEXT_FONT_SIZE ),
      fill: StatesOfMatterColorProfile.controlPanelTextProperty,
      maxWidth: TICK_TEXT_MAX_WIDTH
    };

    var weakTitle = new Text( weakString, tickTextOptions );

    var strongTitle = new Text( strongString, tickTextOptions );

    // add interaction strength slider and title
    var interactionStrengthNode = new Node();
    var interactionTitle = new Text( interactionStrengthWithSymbolString, {
      font: new PhetFont( NORMAL_TEXT_FONT_SIZE ),
      fill: StatesOfMatterColorProfile.controlPanelTextProperty,
      maxWidth: 140
    } );

    interactionStrengthNode.addChild( interactionTitle );
    var interactionStrengthSlider = new HSlider(
      multipleParticleModel.interactionStrengthProperty, {
        min: StatesOfMatterConstants.MIN_ADJUSTABLE_EPSILON, max: MultipleParticleModel.MAX_ADJUSTABLE_EPSILON
      }, {
        trackFill: 'white',
        thumbSize: new Dimension2( 14, 25 ),
        majorTickLength: 15,
        minorTickLength: 12,
        trackSize: new Dimension2( 110, 4 ),
        trackStroke: StatesOfMatterColorProfile.controlPanelTextProperty,
        trackLineWidth: 1,
        thumbLineWidth: 1,
        thumbTouchAreaXDilation: 8,
        thumbTouchAreaYDilation: 8,
        tickLabelSpacing: 6,
        majorTickStroke: StatesOfMatterColorProfile.controlPanelTextProperty,
        majorTickLineWidth: 1,
        minorTickStroke: StatesOfMatterColorProfile.controlPanelTextProperty,
        minorTickLineWidth: 1,

        cursor: 'pointer'

      } );
    interactionStrengthNode.addChild( interactionStrengthSlider );
    interactionStrengthSlider.addMajorTick( MultipleParticleModel.MAX_ADJUSTABLE_EPSILON, strongTitle );
    interactionStrengthSlider.addMajorTick( StatesOfMatterConstants.MIN_ADJUSTABLE_EPSILON, weakTitle );

    var neonText = new Text( neonString, textOptions );
    var argonText = new Text( argonString, textOptions );
    var waterText = new Text( waterString, textOptions );
    var oxygenText = new Text( diatomicOxygenString, textOptions );
    var adjustableAttractionText = new Text( adjustableAttractionString, textOptions );
    var title = new Text( atomsAndMoleculesString, {
      font: new PhetFont( 14 ),
      fill: StatesOfMatterColorProfile.controlPanelTextProperty,
      maxWidth: MAX_WIDTH
    } );

    // create objest that describe the pieces that make up a selector item in the control panel, conforms to the
    // contract: { label: {Node}, icon: {Node} (optional) }
    var neon = { label: neonText, icon: AtomAndMoleculeIcons.NEON_ICON };
    var argon = { label: argonText, icon: AtomAndMoleculeIcons.ARGON_ICON };
    var water = { label: waterText, icon: AtomAndMoleculeIcons.WATER_ICON };
    var oxygen = { label: oxygenText, icon: AtomAndMoleculeIcons.OXYGEN_ICON };
    var adjustableAttraction = {
      label: adjustableAttractionText,
      icon: AtomAndMoleculeIcons.ADJUSTABLE_ATTRACTION_ICON
    };
    var titleText = {
      label: title
    };

    // compute the maximum item width
    var widestLabelAndIconSpec = _.max( [ neon, argon, water, oxygen, adjustableAttraction, titleText ], function( item ) {
      return item.label.width + ((item.icon) ? item.icon.width : 0);
    } );
    var maxWidth = widestLabelAndIconSpec.label.width + ((widestLabelAndIconSpec.icon) ? widestLabelAndIconSpec.icon.width : 0);
    maxWidth = Math.max( maxWidth, interactionStrengthNode.width );

    // pad inserts a spacing node (HStrut) so that the text, space and image together occupy a certain fixed width.
    var createLabelAndIconNode = function( labelAndIconSpec ) {
      if ( labelAndIconSpec.icon ) {
        var strutWidth = maxWidth - labelAndIconSpec.label.width - labelAndIconSpec.icon.width + 12;
        return new HBox( { children: [ labelAndIconSpec.label, new HStrut( strutWidth ), labelAndIconSpec.icon ] } );
      }
      else {
        return new HBox( { children: [ labelAndIconSpec.label ] } );
      }
    };
    var radioButtonContent;
    if ( !isBasicVersion ) {
      radioButtonContent = [
        { value: SubstanceType.NEON, node: createLabelAndIconNode( neon ) },
        { value: SubstanceType.ARGON, node: createLabelAndIconNode( argon ) },
        { value: SubstanceType.DIATOMIC_OXYGEN, node: createLabelAndIconNode( oxygen ) },
        { value: SubstanceType.WATER, node: createLabelAndIconNode( water ) }
      ];
    }
    else {
      radioButtonContent = [
        { value: SubstanceType.NEON, node: createLabelAndIconNode( neon ) },
        { value: SubstanceType.ARGON, node: createLabelAndIconNode( argon ) },
        { value: SubstanceType.DIATOMIC_OXYGEN, node: createLabelAndIconNode( oxygen ) },
        { value: SubstanceType.WATER, node: createLabelAndIconNode( water ) },
        { value: SubstanceType.ADJUSTABLE_ATOM, node: createLabelAndIconNode( adjustableAttraction ) }
      ];
    }

    var radioButtonGroup = new RadioButtonGroup( multipleParticleModel.substanceProperty, radioButtonContent, {
      orientation: 'vertical',
      spacing: 3,
      cornerRadius: 5,
      baseColor: 'black',
      disabledBaseColor: 'black',
      selectedLineWidth: 1,
      selectedStroke: 'white',
      deselectedLineWidth: 0,
      deselectedContentOpacity: 1,
      touchAreaYDilation: 0
    } );

    multipleParticleModel.interactionStrengthProperty.link( function( value ) {
      if ( multipleParticleModel.substanceProperty.get() === SubstanceType.ADJUSTABLE_ATOM ) {
        multipleParticleModel.setEpsilon( value );
      }
    } );
    var content = new VBox( { spacing: 4, children: [ radioButtonGroup ] } );
    var radioButtonPanel = new Panel( content, {
      yMargin: 8,
      stroke: options.stroke,
      align: 'center',
      fill: options.fill,
      cornerRadius: options.cornerRadius,
      minWidth: options.minWidth,
      lineWidth: options.lineWidth
    } );
    interactionTitle.bottom = interactionStrengthSlider.top - 5;
    interactionTitle.centerX = interactionStrengthSlider.centerX;
    interactionStrengthNode.centerX = radioButtonGroup.centerX;
    interactionStrengthNode.top = radioButtonGroup.bottom + inset;

    multipleParticleModel.substanceProperty.link( function( value ) {

      // adjust the control panel border when adjustable attraction selected or deselect
      if ( value === SubstanceType.ADJUSTABLE_ATOM ) {
        content.addChild( interactionStrengthNode );
      }
      else {
        if ( content.hasChild( interactionStrengthNode ) ) {
          content.removeChild( interactionStrengthNode );
        }
      }
    } );
    var titleBackground = new Rectangle( 0, 0, titleText.label.width + 5, titleText.label.height, {
      fill: StatesOfMatterColorProfile.controlPanelBackgroundProperty
    } );
    titleBackground.centerX = radioButtonPanel.centerX;
    titleBackground.centerY = radioButtonPanel.top;
    titleText.label.centerX = titleBackground.centerX;
    titleText.label.centerY = titleBackground.centerY;

    this.addChild( radioButtonPanel );
    //add the title node
    this.addChild( new Node( { children: [ titleBackground, titleText.label ] } ) );
    this.mutate( options );
  }

  statesOfMatter.register( 'PhaseChangesMoleculesControlPanel', PhaseChangesMoleculesControlPanel );

  return inherit( Node, PhaseChangesMoleculesControlPanel );
} );
