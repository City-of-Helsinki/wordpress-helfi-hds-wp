# Wordpress Helsinki HDS
Imports [Helsinki Design System](https://hds.hel.fi/) styles, assets and blocks into Wordpress. Applies integrations to various plugins.

Recommended to be used with [Helsinki Theme](https://github.com/City-of-Helsinki/wordpress-helfi-helsinkiteema).


## Dependencies

### Required
- None

### Recommended
- [Helsinki Theme](https://github.com/City-of-Helsinki/wordpress-helfi-helsinkiteema)

## Integrations
- [Complianz – GDPR/CCPA Cookie Consent](https://wordpress.org/plugins/complianz-gdpr/): Overrides Cookiebanner templates.
- [Contact Form 7](https://wordpress.org/plugins/contact-form-7/): Filters form output to apply HDS styles and behaviour, and loads custom scripts to extend form behaviour.
- [WP RSS Aggregator](https://wordpress.org/plugins/wp-rss-aggregator/)
- [Yoast SEO](https://wordpress.org/plugins/wordpress-seo/)

Integrations can be found within `/integrations`. Script extending behaviour can be found within `/src`.


## Installation
Upload plugin to site and activate it. If used alongside [Helsinki Theme](https://github.com/City-of-Helsinki/wordpress-helfi-helsinkiteema) all features will be activated automatically upon plugin activation.

With other themes, you will have to specify theme supports to enable desired features:

```
add_theme_support(
    'hds-wp',
    array(
        'assets' => array(
            'scripts' => true,
            'styles' => true,
            'fonts' => true,
            'favicon' => true,
        ),
        'widgets' => true,
        'blocks' => true,
        'cpt' => array(
            'faq' => true,
        ),
    )
);
```

## Development

### Assets
(S)CSS and JS source files are stored in `/src`. Asset complitation is done with [Gulp](https://gulpjs.com/) and the processed files can be found in `/assets`.

Install dependencies with `npm install`. Build assets with `gulp scripts` and `gulp styles` or watch changes with `gulp watch`.

## Collaboration
Raise [issues](https://github.com/City-of-Helsinki/wordpress-helfi-hds-wp/issues) for found bugs or development ideas. Feel free to send [pull requests](https://github.com/City-of-Helsinki/wordpress-helfi-hds-wp/pulls) for bugfixes and new or improved features.

## License

This plugin is licensed under GPLv3. See [LICENSE](https://github.com/City-of-Helsinki/wordpress-helfi-hds-wp/blob/main/LICENSE) for the full license text.

### Helsinki Grotesk Font License

The Helsinki Grotesk font license is domain specific. All subdomains of hel.fi are licensed to use the font. If you will be using this plugin on a site that is not a subdomain of hel.fi, you will need to purchase a license for the font. See [Camelot Typefaces](https://camelot-typefaces.com/helsinki-grotesk) for more information.
