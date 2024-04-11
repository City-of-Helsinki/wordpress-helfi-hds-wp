(function(wp){
  wp.domReady( function() {
    const { select } = wp.data;
    const { unregisterBlockType, unregisterBlockVariation, getBlockType, getBlockVariations } = wp.blocks;
    var postTypeFound = false;

    wp.data.subscribe(() => {
      var currentPostType = select('core/editor').getCurrentPostType();

      if ( ! postTypeFound && currentPostType ) {
        postTypeFound = true;

        const { common, vendors, post_types } = HelsinkiDisallowedBlocks || {};

        disableBlocks( common );
        disableBlocks( vendors );

        if ( post_types && post_types[currentPostType] ) {
          disableBlocks( post_types[currentPostType] );
        }
      }
    });

    function disableBlocks( blocks ) {
      if ( blocks ) {
        for ( var blockName in blocks ) {
          disableBlock( blockName, blocks[blockName] );
        }
      }
    }

    function disableBlock( name, allowed ) {
      if ( ! getBlockType( name ) ) {
        return;
      }

      if ( Array.isArray( allowed ) ) {
        getBlockVariations( name ).forEach(function (blockVariation) {
          if ( -1 === allowed.indexOf( blockVariation.name ) ) {
            unregisterBlockVariation( name, blockVariation.name );
          }
        });

        unregisterBlockType( name );
      } else if ( ! allowed ) {
        unregisterBlockType( name );
      }
    }
  });
})(window.wp);
