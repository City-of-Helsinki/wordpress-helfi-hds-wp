(function(wp){    
        function addTableAttributes(settings, name) {
        if (typeof settings.attributes !== 'undefined') {
            if (name == 'core/table') {
                settings.attributes = Object.assign(settings.attributes, {
                    verticalHeader: {
                        type: 'boolean',
                    },
                    title: {
                        type: 'string',
                    }
                });
            }
        }
        return settings;
    }
     
    wp.hooks.addFilter(
        'blocks.registerBlockType',
        'table/custom-attributes',
        addTableAttributes
    );

    const tableAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            const __ = wp.i18n.__;
            const { Fragment, createElement } = wp.element;
            const { ToggleControl, Panel, PanelBody, TextControl } = wp.components;
            const { InspectorControls,  BlockControls, useBlockProps } = wp.blockEditor;
            const { attributes, setAttributes, isSelected } = props;
            return (
                <Fragment>
                    <BlockEdit {...props} />
                    {isSelected && (props.name == 'core/table') && 
                        <InspectorControls>
                            <PanelBody title={ __( 'Advanced table settings', 'hds-wp' ) }>
                                <TextControl
                                    label={ __('Title', 'hds-wp') }
                                    value={ attributes.title }
                                    onChange={ ( value ) => setAttributes({ title: value }) }
                                />
                                <ToggleControl
                                    label={__( 'Vertical header', 'hds-wp' )}
                                    checked={attributes.verticalHeader}
                                    onChange={( value ) => setAttributes({ verticalHeader: value })}
                                />
                            </PanelBody>
                        </InspectorControls>
                    }
                </Fragment>
            );
        };
    }, 'tableAdvancedControls');
     
    wp.hooks.addFilter(
        'editor.BlockEdit',
        'table/custom-control',
        tableAdvancedControls
    );

    function tableApplyExtraClass(extraProps, blockType, attributes) {
        const { verticalHeader } = attributes;
     
        if (typeof verticalHeader !== 'undefined' && verticalHeader) {
            extraProps.className = extraProps.className + ' has-vertical-header';
        }
        return extraProps;
    }
     
    wp.hooks.addFilter(
        'blocks.getSaveContent.extraProps',
        'table/custom-apply-class',
        tableApplyExtraClass
    );

    function modifyGetSaveContentExtraProps( element, blockType, attributes  ) {
        if (blockType.name !== 'core/table') {
            return element;
        }
        
        const { title } = attributes;
        return (
            <div className='hds-container'>
                {typeof title !== 'undefined' && title && 
                    <h2 class="table_title"><span>{attributes.title}</span></h2>
                }
                {element}
            </div>
        );
    }

    wp.hooks.addFilter(
        'blocks.getSaveElement',
        'table/modify-get-save-content-extra-props',
        modifyGetSaveContentExtraProps
    );

})(window.wp);
