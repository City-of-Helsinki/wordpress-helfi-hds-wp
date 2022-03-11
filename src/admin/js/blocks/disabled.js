(function(wp){

    const __ = wp.i18n.__;
    const { unregisterBlockType } = wp.blocks;

    wp.domReady( function() {
        unregisterBlockType( 'core/pullquote' );
        unregisterBlockType( 'core/verse' );
        unregisterBlockType( 'core/code' );
        unregisterBlockType( 'core/cover' );
        unregisterBlockType( 'core/preformatted' );
        unregisterBlockType( 'core/embed' );

    });

})(window.wp);
