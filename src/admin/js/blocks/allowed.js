((wp, allowedVariations) => {
  wp.domReady(() => {
    const { unregisterBlockVariation, getBlockVariations } = wp.blocks;

    for (let block in HelsinkiAllowedVariations) {
      getBlockVariations( block ).forEach(variation => {
        if ( -1 === HelsinkiAllowedVariations[block].indexOf( variation.name ) ) {
          unregisterBlockVariation( block, variation.name );
        }
      });
    }
  });
})(window.wp);
