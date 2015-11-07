// Copyright 2014-2015, University of Colorado Boulder

/**
 * This class updates the positions of atoms in a monatomic data set, i.e.
 * where each molecule is just a single atom.
 *
 * @author John Blanco
 * @author Aaron Davis
 */
define( function( require ) {
  'use strict';

  // static object (no constructor)
  return {
    /**
     * @param {MoleculeForceAndMotionDataSet} moleculeDataSet
     * @public
     */
    updateAtomPositions: function( moleculeDataSet ) {

      // Make sure this is not being used on an inappropriate data set.
      assert && assert( moleculeDataSet.atomsPerMolecule === 1 );

      // Get direct references to the data in the data set.
      var atomPositions = moleculeDataSet.atomPositions;
      var moleculeCenterOfMassPositions = moleculeDataSet.moleculeCenterOfMassPositions;

      // Position the atoms to match the position of the molecules.
      for ( var i = 0; i < moleculeDataSet.getNumberOfMolecules(); i++ ) {
        atomPositions[ i ] = moleculeCenterOfMassPositions[ i ];
      }
    }
  };
} );
