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
	icon: 'welcome-view-site',
	category: 'layout',
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
		logoID: {
			type: 'number',
		},
		logoURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img.logo-image',
			attribute: 'src',
		},
		logoALT: {
			type: 'string',
			source: 'attribute',
			selector: 'img.logo-image',
			attribute: 'alt',
		},
		overlayColor: {
			type: 'string',
			default: '#002A3D'
		},
		url: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: 'a',
		},
		titleText: {
			type: 'string',
			source: 'attribute',
			attribute: 'title',
			selector: 'a',
		}
	},
	example: {
		attributes: {
			title: __( 'RoomLab Pro', 'tastydigital' ),
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
			attributes: { title, mediaID, mediaURL, mediaALT, logoID, logoURL, logoALT, overlayColor, url, titleText },
			setAttributes,
		} = props;
		const onChangeTitle = ( value ) => {
			setAttributes( { title: value } );
		};

		const onSelectMedia = ( media ) => {
			let thisURL = media.sizes['homepage-splash'].url ? media.sizes['homepage-splash'].url : media.url;
			setAttributes( {
				mediaURL: thisURL,
				mediaID: media.id,
				mediaALT: media.alt
			} );
		};

		const onSelectLogo = ( media ) => {
			let thisURL = media.sizes['logo-list'].url ? media.sizes['logo-list'].url : media.url;
			setAttributes( {
				logoURL: thisURL,
				logoID: media.id,
				logoALT: media.alt
			} );
		};
		const onOverlayColorChange = (newColor) => {
			setAttributes({
				overlayColor: newColor

			})
		};

		return (
			<Fragment>

				<InspectorControls>
					<Panel>
					<PanelBody title="Splash CTA Block Settings" initialOpen={ true }>
						<PanelRow>{ __("Choose overlay colour")}</PanelRow>
						<PanelRow>
							<ColorPalette
								value={overlayColor}
								onChange={onOverlayColorChange}
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
					<div className="overlay" style={{backgroundColor: overlayColor+'e9'}}>
						{ !logoURL && (
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
						)}
						<MediaUpload
							onSelect={ onSelectLogo }
							allowedTypes="image"
							value={ logoID }
							render={ ( { open } ) => (
								<Button
									className={
										logoID
											? 'image-button logo-button'
											: 'button button-large'
									}
									onClick={ open }
								>
									{ ! logoID ? (
										__( 'Upload Logo', 'tastydigital' )
									) : (
										<img
											id={ 'image-' + logoID }
											src={ logoURL }
											alt={ logoALT }
										/>
									) }
								</Button>
							) }
						/>
					</div>
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
			</Fragment>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: { title, mediaID, mediaURL, mediaALT, logoID, logoURL, logoALT, overlayColor, url, titleText },
		} = props;
		return (
			<div className={ className }>
				<a href={ url } title={ titleText }>
					<div className="overlay opacity-90" style={{backgroundColor: overlayColor}}>
					</div>
					<div className="overlay">
						{ !logoURL && (
						<RichText.Content tagName="h2" value={ title } />
						)}
						{ logoURL && (
						<img
							className="logo-image"
							src={ logoURL }
							alt={ logoALT }
						/>
						) }
					</div>
					{ mediaURL && (
						<img
							className="splash-image"
							src={ mediaURL }
							alt={ mediaALT }
						/>
					) }
				</a>

			</div>
		);
	},
} );
