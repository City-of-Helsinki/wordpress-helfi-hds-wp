(function(wp){

    const __ = wp.i18n.__;
    const { unregisterBlockType, unregisterBlockVariation, getBlockType, getBlockVariations } = wp.blocks;
    const allowedEmbedBlocks = [
        'youtube',
      ];

    wp.domReady( function() {
        if (getBlockType('core/pullquote')) {
            unregisterBlockType( 'core/pullquote' );
        }
        if (getBlockType('core/verse')) {
            unregisterBlockType( 'core/verse' );
        }
        if (getBlockType('core/code')) {
            unregisterBlockType( 'core/code' );
        }
        if (getBlockType('core/cover')) {
            unregisterBlockType( 'core/cover' );
        }
        if (getBlockType('core/preformatted')) {
            unregisterBlockType( 'core/preformatted' );
        }
        if (getBlockType('core/embed')) {
            wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
                if (-1 === allowedEmbedBlocks.indexOf(blockVariation.name)) {
                  wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
                }
            });       
        }
        if(getBlockType('core/latest-posts')) {
            unregisterBlockType( 'core/latest-posts' );
        }

    });

})(window.wp);
