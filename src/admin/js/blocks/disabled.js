(function(wp){

    const __ = wp.i18n.__;
    const { unregisterBlockType, getBlockType } = wp.blocks;

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
            unregisterBlockType( 'core/embed' );
        }

    });

})(window.wp);
