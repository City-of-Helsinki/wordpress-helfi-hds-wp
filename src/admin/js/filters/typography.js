(() => {
  if (wp?.hooks) {
    wp.hooks.addFilter(
      'blocks.registerBlockType',
      'hds-wp/block-typography-settings',
      ( settings, name ) => {
        if (settings?.supports?.typography) {
          return Object.assign({}, settings, {
            supports: Object.assign(settings.supports, {
              typography: Object.assign(settings.supports.typography, {
                __experimentalFontFamily: false,
              }),
            }),
          });
        }

        return settings;
      },
      0
    );
  }
})();
