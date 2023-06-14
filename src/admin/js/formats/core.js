wp.domReady( function () {

    /* Disable default formats */
    wp.richText.unregisterFormatType( 'core/image' );
    wp.richText.unregisterFormatType( 'core/text-color' );
    wp.richText.unregisterFormatType( 'core/keyboard' );
    wp.richText.unregisterFormatType( 'core/code' );

});