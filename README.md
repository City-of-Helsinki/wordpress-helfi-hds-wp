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
- [WP-Matomo Integration](https://wordpress.org/plugins/wp-piwik/): Filters returns for some functions.
- [WP RSS Aggregator](https://wordpress.org/plugins/wp-rss-aggregator/)
- [Yoast SEO](https://wordpress.org/plugins/wordpress-seo/)

Integrations can be found within `/integrations`. Script extending behaviour can be found within `/src`.

## Development

### Assets
(S)CSS and JS source files are stored in `/src`. Asset complitation is done with [Gulp](https://gulpjs.com/) and the processed files can be found in `/assets`.

Install dependencies with `npm install`. Build assets with `gulp scripts` and `gulp styles` or watch changes with `gulp watch`.

## Collaboration
Raise [issues](https://github.com/City-of-Helsinki/wordpress-helfi-hds-wp/issues) for found bugs or development ideas. Feel free to send [pull requests](https://github.com/City-of-Helsinki/wordpress-helfi-hds-wp/pulls) for bugfixes and new or improved features.