wp.domReady( function () {

  /**
    * Buttons
    */
  wp.blocks.unregisterBlockStyle( 'core/button', 'outline');
  wp.blocks.unregisterBlockStyle( 'core/button', 'fill');

  wp.blocks.registerBlockStyle( 'core/button', [
    {
      name: 'secondary',
      title: 'Secondary',
    },
    {
      name: 'supplementary',
      title: 'Supplementary',
    }
  ]);

} );
