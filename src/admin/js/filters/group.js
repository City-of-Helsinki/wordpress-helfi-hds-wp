(function(wp){    
    function addGroupAttributes(settings, name) {
        if (typeof settings.attributes !== 'undefined') {
            if (name == 'core/group') {
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
        'group/custom-attributes',
        addGroupAttributes
    );

})(window.wp);
