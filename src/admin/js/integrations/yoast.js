(function (wp) {
    /* inspired from https://github.com/Yoast/wpseo-woocommerce/blob/trunk/js/src/yoastseo-woo-replacevars.js */
    /* global jQuery, YoastSEO, app, globals YoastACFAnalysisConfig */

    var pluginName = "additionalVariablePlugin";
    var ReplaceVar = window.YoastReplaceVarPlugin && window.YoastReplaceVarPlugin.ReplaceVar;
    var placeholders = {};

    var modifiableFields = [
    "content",
    "title",
    "snippet_title",
    "snippet_meta",
    "primary_category",
    "data_page_title",
    "data_meta_desc",
    ];

    var replaceVarPluginAvailable = function() {
    if ( typeof ReplaceVar === "undefined" ) {
        if ( config.debug ) {
        console.log( "Additional replace variables in the Snippet Window requires Yoast SEO >= 5.3." );
        }

        return false;
    }

    return true;
    };

    /**
     * Gets City of Helsinki text
     *
     * @returns {string}
     */
    var i = 0;
    function getHelsinki() {
    return wp.i18n.__( 'City of Helsinki', 'hds-wp' );
    }

    /**
     * Variable replacement plugin for WordPress.
     *
     * @returns {void}
     */
    var YoastReplaceVarPlugin = function () {

    if ( ! replaceVarPluginAvailable() ) {
        return;
    }

    this._app = YoastSEO.app;
    this._app.registerPlugin(pluginName, {status: "ready"});
    this._store = YoastSEO.store;

    this.registerReplacements();
    this.registerModifications( this._app );
    this.registerEvents();
    };

    /**
     * Register the events that might have influence for the replace vars.
     *
     * @returns {void}
     */
    YoastReplaceVarPlugin.prototype.registerEvents = function() {
    jQuery( document ).on( "change", "#inspector-text-control-1", this.declareReloaded.bind( this ) );
    };

    /**
     * Registers all the placeholders and their replacements.
     *
     * @returns {void}
     */
    YoastReplaceVarPlugin.prototype.registerReplacements = function () {
    this.addReplacement(new ReplaceVar("%%helsinki%%", "helsinki"));
    };

    /**
     * Registers the modifications for the plugin on initial load.
     *
     * @param {app} app The app object.
     *
     * @returns {void}
     */
    YoastReplaceVarPlugin.prototype.registerModifications = function (app) {
    var callback = this.replaceVariables.bind(this);

    for (var i = 0; i < modifiableFields.length; i++) {
        app.registerModification(modifiableFields[i], callback, pluginName, 10);
    }
    };

    /**
     * Runs the different replacements on the data-string.
     *
     * @param {string} data The data that needs its placeholders replaced.
     *
     * @returns {string} The data with all its placeholders replaced by actual values.
     */
    YoastReplaceVarPlugin.prototype.replaceVariables = function (data) {
    if (typeof data !== "undefined") {
        data = data.replace(/%%helsinki%%/g, getHelsinki());

        data = this.replacePlaceholders( data );
    }

    return data;
    };

    /**
     * Adds a replacement object to be used when replacing placeholders.
     *
     * @param {ReplaceVar} replacement The replacement to add to the placeholders.
     *
     * @returns {void}
     */
    YoastReplaceVarPlugin.prototype.addReplacement = function (replacement) {
    placeholders[replacement.placeholder] = replacement;
    this._store.dispatch({
        type: "SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",
        name: replacement.placeholder.replace(/^%%|%%$/g, ""),
        value: replacement.placeholder,
    });
    };

    /**
     * Reloads the app to apply possibly made changes in the content.
     *
     * @returns {void}
     */
    YoastReplaceVarPlugin.prototype.declareReloaded = function() {
    this._app.pluginReloaded( pluginName );
    this._store.dispatch( { type: "SNIPPET_EDITOR_REFRESH" } );
    };

    /**
     * Replaces placeholder variables with their replacement value.
     *
     * @param {string} text The text to have its placeholders replaced.
     *
     * @returns {string} The text in which the placeholders have been replaced.
     */
    YoastReplaceVarPlugin.prototype.replacePlaceholders = function (text) {
    for (var i = 0; i < placeholders.length; i++) {
        var replaceVar = placeholders[i];

        text = text.replace(
        new RegExp(replaceVar.getPlaceholder(true), "g"), replaceVar.replacement
        );
    }
    return text;
    };

    /**
     * Initializes the Additional ReplaceVars plugin.
     *
     * @returns {void}
     */
    function initializeReplacevarPlugin() {
    // When YoastSEO is available, just instantiate the plugin.
    if (typeof YoastSEO !== "undefined" && typeof YoastSEO.app !== "undefined") {
        new YoastReplaceVarPlugin(); // eslint-disable-line no-new
        return;
    }

    // Otherwise, add an event that will be executed when YoastSEO will be available.
    jQuery(window).on(
        "YoastSEO:ready",
        function () {
        new YoastReplaceVarPlugin(); // eslint-disable-line no-new
        }
    );
    }

    initializeReplacevarPlugin();

})(window.wp);
