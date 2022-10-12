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

})(window.wp);
