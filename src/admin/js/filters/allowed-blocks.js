(function(wp){
  /*
   * Limit child blocks in column and group blocks
   *
   * Unregister and re-register blocks after all blocks have been registered
   * to make the allowedBlocks configuration properly dynamic
   *
   */
  wp.domReady( function() {
    const limitedBlocks = {
      'core/column': [
        'core/columns',
        'core/column',
        'core/gallery',
        'core/group',
      ],
      'core/group': [],
    };

    const allowedBlocks = wp.blocks
      .getBlockTypes()
      .map(block => block.name)
      .filter(blockName => {
        return !blockName.startsWith('hds-wp/')
          && !blockName.startsWith('helsinki-');
      });

    for (let blockName in limitedBlocks) {
      let block = wp.blocks.getBlockType(blockName);

      wp.blocks.unregisterBlockType(blockName);

      wp.blocks.registerBlockType(blockName, {
        ...block,
        variations: 'core/group' ? block.variations.filter(variation => variation.name === 'group') : [],
        allowedBlocks: allowedBlocks.filter(name => !limitedBlocks[blockName].includes(name)),
      });
    }
  });
})(window.wp);
