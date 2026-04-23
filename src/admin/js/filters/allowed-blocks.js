(function(wp){
  const limitedBlocks = {
    'core/column': [
      'core/columns',
      'core/gallery',
      'core/group',
    ],
    'core/group': [],
  };

  function filterAllowedBlocks(settings, name) {
    if (limitedBlocks[name]) {
      const allowedBlocks = wp.blocks
        .getBlockTypes()
        .map(block => block.name)
        .filter(blockName => {
          if (blockName.startsWith('hds-wp/')) {
            return false;
          }

          if (blockName.startsWith('helsinki-')) {
            return false;
          }

          if (limitedBlocks[name].includes(blockName)) {
            return false;
          }

          return true;
        });

      return {...settings, allowedBlocks};
    }

    return settings;
  }

  wp.hooks.addFilter(
    'blocks.registerBlockType',
    'hds-wp/restrict-allowed-blocks',
    filterAllowedBlocks
  );
})(window.wp);
