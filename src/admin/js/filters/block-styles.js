wp.domReady( function () {

  /**
    * Buttons
    */
  wp.blocks.unregisterBlockStyle( 'core/button', 'outline');
  wp.blocks.unregisterBlockStyle( 'core/button', 'fill');

  wp.blocks.registerBlockStyle( 'core/button', [
    {
      name: 'secondary',
      title: wp.i18n.__( 'Secondary', 'hds-wp' ),
    },
    {
      name: 'supplementary',
      title: wp.i18n.__( 'Supplementary', 'hds-wp' ),
    }
  ]);

} );
