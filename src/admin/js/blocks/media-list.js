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
				label: __( 'Select a category' ),
				options : options,
				onChange: function( value ) {
					props.setAttributes({
						termID: value,
						termName: getTermName(value, options),
					});
				},
				value: props.termID,
			});
		}
	);

	function editBlock() {
		return function(props) {
			return createElement(
				Fragment, {},
				hdsInspectorControls(
					{
						title: wp.i18n.__('Settings'),
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
							{value: 'ASC', label: __('Ascending')},
							{value: 'DESC', label: __('Descending')},
						],
					}, props),
					hdsRadioControl({
						label: __('Order by'),
						attribute: 'orderBy',
						selected: props.attributes.orderBy ? props.attributes.orderBy : 'title',
						options: [
							{value: 'title', label: __('Title')},
							{value: 'date', label: __('Date')},
						],
					}, props)
				),
				settingsSummaryList(props)
			);
		};
	}

	function settingsSummaryList(props) {
		return createElement( 'div', useBlockProps(),
			createElement('h2', {}, __( 'HDS - Media List' ) ),
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
		title: __( 'Media List' ),
		description: __( 'List media files from the selected category' ),
		category: 'widgets',
		icon: 'list-view',
		keywords: [ __( 'media' ), __('list') ],
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
