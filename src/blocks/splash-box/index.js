/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;

const {
	Button, Panel, PanelBody, PanelRow
} = wp.components;

const {
	RichText, InspectorControls, MediaUpload, ColorPalette, URLInput
} = wp.blockEditor;



export default registerBlockType( 'tastydigital/splash-box', {
	title: __( 'Splash CTA'),
	description: __( 'Big pic media, logo and link.'),
	icon: 'cover-image',
    category: 'layout',
    styles: [
        {
            name: 'default',
            label: __( 'Default' ),
            isDefault: true
        },
        {
            name: 'bordered',
            label: __( 'Bordered' )
        }
    ],
	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: 'h2',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img.splash-image',
			attribute: 'src',
		},
		mediaALT: {
			type: 'string',
			source: 'attribute',
			selector: 'img.splash-image',
			attribute: 'alt',
		},
		bgColor: {
			type: 'string',
			default: '#002A3D'
		},
		url: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: 'a',
		}
	},
	example: {
		attributes: {
			title: __( 'Tasty Glutenberg', 'tastydigital' ),
			mediaURL:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
		},
	},
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},
	edit: ( props ) => {
		const {
			className,
			attributes: { title, mediaID, mediaURL, mediaALT, bgColor, url },
			setAttributes,
		} = props;
		const onChangeTitle = ( value ) => {
			setAttributes( { title: value } );
		};

		const onSelectMedia = ( media ) => {
			let thisURL = (typeof media.sizes['homepage-splash'] !== 'undefined') ? media.sizes['homepage-splash'].url : media.url;
			setAttributes( {
				mediaURL: thisURL,
				mediaID: media.id,
				mediaALT: media.alt
			} );
		};
		const onBackgroundColorChange = (newColor) => {
			setAttributes({
				bgColor: newColor

			})
		};

		return (
			<Fragment>

				<InspectorControls>
					<Panel>
					<PanelBody title="Splash CTA Block Settings" initialOpen={ true }>
						<PanelRow>{ __("Choose background colour")}</PanelRow>
						<PanelRow>
							<ColorPalette
								value={bgColor}
								onChange={onBackgroundColorChange}
							/>
						</PanelRow>
						<PanelRow>{ __("Choose link destination")}</PanelRow>
						<PanelRow>
							<URLInput
								className={ 'url-input' }
								value={ url }
								onChange={ ( url, post ) => setAttributes( {
									url,
									titleText: (post && post.title) || 'Click here'
								} ) }
							/>
						</PanelRow>
					</PanelBody>
					</Panel>
				</InspectorControls>
				<div className={ className }>
                    <div className="splash-holder">
                        <div className="splash-image">
                            <MediaUpload
                                onSelect={ onSelectMedia }
                                allowedTypes="image"
                                value={ mediaID }
                                render={ ( { open } ) => (
                                    <Button
                                        className={
                                            mediaID
                                                ? 'image-button media-button'
                                                : 'button button-large'
                                        }
                                        onClick={ open }
                                    >
                                        { ! mediaID ? (
                                            __( 'Upload Image', 'tastydigital' )
                                        ) : (
                                            <img
                                                id={ 'image-' + mediaID }
                                                src={ mediaURL }
                                                alt={ mediaALT }
                                            />
                                        ) }
                                    </Button>
                                ) }
                            />
                        </div>
                    </div>
					<div className="overlay" style={{backgroundColor: bgColor+'e9'}}>
                        <RichText
							tagName="h2"
							placeholder={ __(
								'Call to action text',
								'tastydigital'
							) }
							value={ title }
							onChange={ onChangeTitle }
							allowedFormats={ [] }
						/>
					</div>
				</div>
			</Fragment>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: { title, mediaID, mediaURL, mediaALT, bgColor, url },
		} = props;
		return (
			<div className={ className } style={{backgroundColor: bgColor}}>
				<a href={ url }>
                    <div className="splash-holder">
                        { mediaURL && (
                            <img
                                className="splash-image"
                                src={ mediaURL }
                                alt={ mediaALT }
                            />
                        ) }
                    </div>
					<div className="overlay">
						<RichText.Content tagName="h2" value={ title } />
                        <div class="arrow-right"></div>
					</div>
				</a>

			</div>
		);
	},
} );
