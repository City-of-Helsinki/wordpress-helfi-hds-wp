(function(wp) {

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { useBlockProps } = wp.blockEditor;
	const { Fragment, createElement } = wp.element;
	const { SelectControl } = wp.components;
	const { withSelect, withDispatch } = wp.data;
	const { InspectorControls } = wp.editor;
	const { compose } = wp.compose;

	const TermsDropdownControl = compose(
		withSelect(function(select, props) {
			return {terms: select('core').getEntityRecords('taxonomy', 'category')}
		}))( function(props) {
			var options = [];
			if ( props.terms ) {
				options.push( { value: 0, label: '--' } )
				props.terms.forEach(function(term) {
					options.push({value:term.id, label:term.name});
				});
			} else {
				options.push( { value: 0, label: '...' } )
			}

			var getTermName = function search(termID, termOptions){
				termID = parseInt(termID, 10);
			    for (var i=0; i < termOptions.length; i++) {
			        if (termOptions[i].value === termID) {
			          return termOptions[i].label;
			        }
			    }
			};

			return createElement(SelectControl, {
				label: __( 'Select a category', 'hds-wp' ),
				options : options,
				onChange: function( value ) {
					props.setAttributes({
						termID: value,
						termName: getTermName(value, options),
					});
				},
				value: props.attributes.termID,
			});
		}
	);

	function editBlock() {
		return function(props) {
			return createElement(
				Fragment, {},
				hdsInspectorControls(
					{
						title: __( 'Settings', 'hds-wp' ),
						initialOpen: true,
					},
					hdsPanelRow({},
						createElement( TermsDropdownControl,
							{...props}
						)
					),
					hdsRadioControl({
						label: __('Order'),
						attribute: 'order',
						selected: props.attributes.order ? props.attributes.order : 'ASC',
						options: [
							{value: 'ASC', label: __( 'Ascending', 'hds-wp' )},
							{value: 'DESC', label: __( 'Descending', 'hds-wp' )},
						],
					}, props),
					hdsRadioControl({
						label: __( 'Order by', 'hds-wp' ),
						attribute: 'orderBy',
						selected: props.attributes.orderBy ? props.attributes.orderBy : 'title',
						options: [
							{value: 'title', label: __( 'Title', 'hds-wp' )},
							{value: 'date', label: __( 'Date', 'hds-wp' )},
						],
					}, props)
				),
				settingsSummaryList(props)
			);
		};
	}

	function settingsSummaryList(props) {
		return createElement( 'div', useBlockProps(),
			createElement('h2', {}, __( 'Media List', 'hds-wp' ) ),
			createElement('ul', {},
				listItem( __( `Term: ${props.attributes.termName ?? ''}` ) ),
				listItem( __( `Order: ${props.attributes.order ?? ''}` ) ),
				listItem( __( `Order by: ${props.attributes.orderBy ?? ''}` ) )
			),
		)
	}

	function listItem(text) {
		return createElement('li', {}, text);
	}

	registerBlockType('hds-wp/media-list', {
		apiVersion: 2,
		title: __( 'Helsinki - Media List', 'hds-wp' ),
		description: __( 'List media files from the selected category', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'list-view',
		keywords: [ __( 'media', 'hds-wp' ), __( 'list', 'hds-wp' ) ],
		supports: {
			html: false,
			anchor: true,
		},
		attributes: {
			anchor: {
				type: 'string',
			},
			termID: {
				type: 'int',
			},
			termName: {
				type: 'string',
			},
			order: {
				type: 'string',
				default: 'ASC',
			},
			orderBy: {
				type: 'string',
				default: 'title',
			},
		},
		edit: editBlock(),
	});

})(window.wp);
