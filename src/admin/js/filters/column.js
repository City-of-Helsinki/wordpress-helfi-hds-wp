(function(wp){
    function addColumnAttributes(settings, name) {
        if (typeof settings.attributes !== 'undefined') {
            if (name == 'core/column') {
                settings.attributes = Object.assign(settings.attributes, {
                    allowedBlocks: {
                        type: 'array',
                        default: [
                            'core/heading',
                            'core/paragraph',
                            'core/quote',
                            'core/table',
                            'core/list',
                            'core/freeform',
                            'core/image',
                            'core/video',
                            'core/audio',
                            'core/file',
                            'core/buttons',
                            'core/embed'
                        ]
                    }
                });
            }
            else if (name == 'core/columns') {
                settings.transforms.from[0].isMatch = (attr, block) => {
                    if (block[0].name.startsWith('hds-wp') || block[0].name.startsWith('helsinki')) {
                        return false;
                    }
                    return true;
                }
            }
        }
        return settings;
    }

    wp.hooks.addFilter(
        'blocks.registerBlockType',
        'column/custom-attributes',
        addColumnAttributes
    );

    wp.hooks.addFilter(
      'blocks.registerBlockType',
      'hds-wp/restrict-column-children',
      function (settings, name) {
        if ( name === 'core/column' ) {
          const allBlocks = wp.blocks.getBlockTypes();

          const denyList = [
            'core/columns',
            'core/gallery',
            'core/group',
          ];

          const allowedBlocks = allBlocks
            .map(block => block.name)
            .filter(blockName => {
              if (blockName.startsWith('hds-wp/')) {
                return false;
              }

              if (blockName.startsWith('helsinki-')) {
                return false;
              }

              if (denyList.includes(blockName)) {
                return false;
              }

              return true;
            });

          return {...settings, allowedBlocks };
        }

        return settings;
      }
    );

})(window.wp);
