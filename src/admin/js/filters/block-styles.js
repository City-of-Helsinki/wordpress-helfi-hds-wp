wp.domReady( function () {

  /**
    * Buttons
    */
  wp.blocks.unregisterBlockStyle( 'core/button', 'default');
  wp.blocks.unregisterBlockStyle( 'core/button', 'outline');
  wp.blocks.unregisterBlockStyle( 'core/button', 'fill');

  wp.blocks.registerBlockStyle( 'core/button', [
    {
      name: 'default',
      label: wp.i18n.__( 'Primary', 'hds-wp' ),
      isDefault: true,
    },
    {
      name: 'secondary',
      label: wp.i18n.__( 'Secondary', 'hds-wp' ),
    },
    {
      name: 'supplementary',
      label: wp.i18n.__( 'Supplementary', 'hds-wp' ),
    }
  ]);

  /**
    * Text
    */
  const withBackgroundStyle = [ 'core/group', 'core/paragraph' ];
  for ( let i = 0; i < withBackgroundStyle.length; i++ ) {
    wp.blocks.registerBlockStyle( withBackgroundStyle[i], [{
      name: 'light-gray-background',
      label: wp.i18n.__( 'Light Gray Background', 'hds-wp' ),
    }]);
  }

  /**
   * Image
   */
   wp.blocks.unregisterBlockStyle( 'core/image', 'rounded');

  /**
   * Quote
   */
   wp.blocks.unregisterBlockStyle( 'core/quote', 'plain');


} );