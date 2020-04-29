/**
 * External Dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { ToggleControl } = wp.components;

//restrict to specific block names
const allowedBlocks = [ 'core/group' ];

/**
 * Add custom attribute for constrainInnerContainer.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings ) {

	//check if object exists for old Gutenberg version compatibility
	//add allowedBlocks restriction
	if( typeof settings.attributes !== 'undefined' && allowedBlocks.includes( settings.name ) ){

		settings.attributes = Object.assign( settings.attributes, {
			constrainInnerContainer:{
				type: 'boolean',
				default: false,
			}
		});
	}

	return settings;
}

/**
 * Add constrainInnerContainer controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {
			name,
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			constrainInnerContainer,
			className
		} = attributes;


		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected && allowedBlocks.includes( name ) &&
				<InspectorAdvancedControls>
					<ToggleControl
						label={ __( 'Constrain Inner Container' ) }
						checked={ !! constrainInnerContainer }
						onChange={ () => setAttributes( {
							className: classnames( className, { 'constrain-content': ! constrainInnerContainer }),
							constrainInnerContainer: ! constrainInnerContainer
						} ) }
						help={ !! constrainInnerContainer ? __( 'Restrict width of content area.' ) : __( 'Content fills background area.' ) }
					/>
				</InspectorAdvancedControls>
				}

			</Fragment>
		);
	};
}, 'withAdvancedControls');

/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */
function applyExtraClass( extraProps, blockType, attributes ) {

	const { constrainInnerContainer } = attributes;
	if ( typeof constrainInnerContainer !== 'undefined' && constrainInnerContainer && allowedBlocks.includes( blockType.name ) ) {
		extraProps.className = classnames( extraProps.className, 'constrain-content' );

	}

	return extraProps;
}

//add filters

addFilter(
	'blocks.registerBlockType',
	'tasty-digital/custom-attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'tasty-digital/custom-advanced-control',
	withAdvancedControls
);
//
// addFilter(
// 	'blocks.getSaveContent.extraProps',
// 	'tasty-digital/applyExtraClass',
// 	applyExtraClass
// );

