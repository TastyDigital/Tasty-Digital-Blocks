/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/source-map-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/toby/Sites/WP_Packages/tasty-digital-blocks/node_modules/classnames/dedupe.js'");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/source-map-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/toby/Sites/WP_Packages/tasty-digital-blocks/node_modules/classnames/index.js'");

/***/ }),

/***/ "./src/attributes/constrain-inner-container/index.js":
/*!***********************************************************!*\
  !*** ./src/attributes/constrain-inner-container/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */

var __ = wp.i18n.__;
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var InspectorAdvancedControls = wp.blockEditor.InspectorAdvancedControls;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var ToggleControl = wp.components.ToggleControl; //restrict to specific block names

var allowedBlocks = ['core/group'];
/**
 * Add custom attribute for constrainInnerContainer.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */

function addAttributes(settings) {
  //check if object exists for old Gutenberg version compatibility
  //add allowedBlocks restriction
  if (typeof settings.attributes !== 'undefined' && allowedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      constrainInnerContainer: {
        type: 'boolean',
        default: false
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


var withAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var name = props.name,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var constrainInnerContainer = attributes.constrainInnerContainer,
        className = attributes.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && allowedBlocks.includes(name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Constrain Inner Container'),
      checked: !!constrainInnerContainer,
      onChange: function onChange() {
        return setAttributes({
          className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, {
            'constrain-content': !constrainInnerContainer
          }),
          constrainInnerContainer: !constrainInnerContainer
        });
      },
      help: !!constrainInnerContainer ? __('Restrict width of content area.') : __('Content fills background area.')
    })));
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

function applyExtraClass(extraProps, blockType, attributes) {
  var constrainInnerContainer = attributes.constrainInnerContainer;

  if (typeof constrainInnerContainer !== 'undefined' && constrainInnerContainer && allowedBlocks.includes(blockType.name)) {
    extraProps.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, 'constrain-content');
  }

  return extraProps;
} //add filters


addFilter('blocks.registerBlockType', 'tasty-digital/custom-attributes', addAttributes);
addFilter('editor.BlockEdit', 'tasty-digital/custom-advanced-control', withAdvancedControls); //
// addFilter(
// 	'blocks.getSaveContent.extraProps',
// 	'tasty-digital/applyExtraClass',
// 	applyExtraClass
// );

/***/ }),

/***/ "./src/attributes/flexible-group/index.js":
/*!************************************************!*\
  !*** ./src/attributes/flexible-group/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
wp.blocks.registerBlockStyle('core/group', {
  name: 'flexible-row',
  label: __('Flexible Row')
});

/***/ }),

/***/ "./src/attributes/heading-styles/index.js":
/*!************************************************!*\
  !*** ./src/attributes/heading-styles/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
wp.blocks.registerBlockStyle('core/heading', {
  name: 'mega-title',
  label: __('Mega Title')
});

/***/ }),

/***/ "./src/attributes/visible-on-mobile/index.js":
/*!***************************************************!*\
  !*** ./src/attributes/visible-on-mobile/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */

var __ = wp.i18n.__;
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var InspectorAdvancedControls = wp.blockEditor.InspectorAdvancedControls;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var ToggleControl = wp.components.ToggleControl; //restrict to specific block names

var allowedBlocks = ['core/paragraph', 'core/heading'];
/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */

function addAttributes(settings) {
  //check if object exists for old Gutenberg version compatibility
  //add allowedBlocks restriction
  if (typeof settings.attributes !== 'undefined' && allowedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      visibleOnMobile: {
        type: 'boolean',
        default: true
      }
    });
  }

  return settings;
}
/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */


var withAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var name = props.name,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var visibleOnMobile = attributes.visibleOnMobile;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && allowedBlocks.includes(name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Mobile Devices Visibity'),
      checked: !!visibleOnMobile,
      onChange: function onChange() {
        return setAttributes({
          visibleOnMobile: !visibleOnMobile
        });
      },
      help: !!visibleOnMobile ? __('Showing on mobile devices.') : __('Hidden on mobile devices.')
    })));
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

function applyExtraClass(extraProps, blockType, attributes) {
  var visibleOnMobile = attributes.visibleOnMobile;

  if (typeof visibleOnMobile !== 'undefined' && !visibleOnMobile && allowedBlocks.includes(blockType.name)) {
    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, 'mobile-hidden');
  }

  return extraProps;
} //add filters


addFilter('blocks.registerBlockType', 'tasty-digital/custom-attributes', addAttributes);
addFilter('editor.BlockEdit', 'tasty-digital/custom-advanced-control', withAdvancedControls);
addFilter('blocks.getSaveContent.extraProps', 'tasty-digital/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/blocks/splash-box-overlay/index.js":
/*!************************************************!*\
  !*** ./src/blocks/splash-box-overlay/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Internal block libraries
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    ColorPalette = _wp$blockEditor.ColorPalette,
    URLInput = _wp$blockEditor.URLInput;
/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('tastydigital/splash-box-overlay', {
  title: __('Splash CTA with Overlay'),
  description: __('Big pic media, logo and link.'),
  icon: 'welcome-view-site',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: 'h2'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img.splash-image',
      attribute: 'src'
    },
    mediaALT: {
      type: 'string',
      source: 'attribute',
      selector: 'img.splash-image',
      attribute: 'alt'
    },
    logoID: {
      type: 'number'
    },
    logoURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img.logo-image',
      attribute: 'src'
    },
    logoALT: {
      type: 'string',
      source: 'attribute',
      selector: 'img.logo-image',
      attribute: 'alt'
    },
    overlayColor: {
      type: 'string',
      default: '#002A3D'
    },
    url: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: 'a'
    },
    titleText: {
      type: 'string',
      source: 'attribute',
      attribute: 'title',
      selector: 'a'
    }
  },
  example: {
    attributes: {
      title: __('Tasty Gluten', 'tastydigital'),
      mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg'
    }
  },
  supports: {
    align: ['wide', 'full'],
    html: false
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        title = _props$attributes.title,
        mediaID = _props$attributes.mediaID,
        mediaURL = _props$attributes.mediaURL,
        mediaALT = _props$attributes.mediaALT,
        logoID = _props$attributes.logoID,
        logoURL = _props$attributes.logoURL,
        logoALT = _props$attributes.logoALT,
        overlayColor = _props$attributes.overlayColor,
        url = _props$attributes.url,
        titleText = _props$attributes.titleText,
        setAttributes = props.setAttributes;

    var onChangeTitle = function onChangeTitle(value) {
      setAttributes({
        title: value
      });
    };

    var onSelectMedia = function onSelectMedia(media) {
      var thisURL = media.sizes['homepage-splash'].url ? media.sizes['homepage-splash'].url : media.url;
      setAttributes({
        mediaURL: thisURL,
        mediaID: media.id,
        mediaALT: media.alt
      });
    };

    var onSelectLogo = function onSelectLogo(media) {
      var thisURL = media.sizes['logo-list'].url ? media.sizes['logo-list'].url : media.url;
      setAttributes({
        logoURL: thisURL,
        logoID: media.id,
        logoALT: media.alt
      });
    };

    var onOverlayColorChange = function onOverlayColorChange(newColor) {
      setAttributes({
        overlayColor: newColor
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Splash CTA with Overlay Block Settings",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, __("Choose overlay colour")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: overlayColor,
      onChange: onOverlayColorChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, __("Choose link destination")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
      className: 'url-input',
      value: url,
      onChange: function onChange(url, post) {
        return setAttributes({
          url: url,
          titleText: post && post.title || 'Click here'
        });
      }
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overlay",
      style: {
        backgroundColor: overlayColor + 'e9'
      }
    }, !logoURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h2",
      placeholder: __('Call to action text', 'tastydigital'),
      value: title,
      onChange: onChangeTitle,
      allowedFormats: []
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectLogo,
      allowedTypes: "image",
      value: logoID,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: logoID ? 'image-button logo-button' : 'button button-large',
          onClick: open
        }, !logoID ? __('Upload Logo', 'tastydigital') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          id: 'image-' + logoID,
          src: logoURL,
          alt: logoALT
        }));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "splash-image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectMedia,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: mediaID ? 'image-button media-button' : 'button button-large',
          onClick: open
        }, !mediaID ? __('Upload Image', 'tastydigital') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          id: 'image-' + mediaID,
          src: mediaURL,
          alt: mediaALT
        }));
      }
    }))));
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        title = _props$attributes2.title,
        mediaID = _props$attributes2.mediaID,
        mediaURL = _props$attributes2.mediaURL,
        mediaALT = _props$attributes2.mediaALT,
        logoID = _props$attributes2.logoID,
        logoURL = _props$attributes2.logoURL,
        logoALT = _props$attributes2.logoALT,
        overlayColor = _props$attributes2.overlayColor,
        url = _props$attributes2.url,
        titleText = _props$attributes2.titleText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: url,
      title: titleText
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overlay opacity-90",
      style: {
        backgroundColor: overlayColor
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overlay"
    }, !logoURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h2",
      value: title
    }), logoURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "logo-image",
      src: logoURL,
      alt: logoALT
    })), mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "splash-image",
      src: mediaURL,
      alt: mediaALT
    })));
  }
}));

/***/ }),

/***/ "./src/blocks/splash-box/index.js":
/*!****************************************!*\
  !*** ./src/blocks/splash-box/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Internal block libraries
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    ColorPalette = _wp$blockEditor.ColorPalette,
    URLInput = _wp$blockEditor.URLInput;
/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('tastydigital/splash-box', {
  title: __('Splash CTA'),
  description: __('Big pic media, logo and link.'),
  icon: 'cover-image',
  category: 'layout',
  styles: [{
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'bordered',
    label: __('Bordered')
  }],
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: 'h2'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img.splash-image',
      attribute: 'src'
    },
    mediaALT: {
      type: 'string',
      source: 'attribute',
      selector: 'img.splash-image',
      attribute: 'alt'
    },
    logoID: {
      type: 'number'
    },
    logoURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img.logo-image',
      attribute: 'src'
    },
    logoALT: {
      type: 'string',
      source: 'attribute',
      selector: 'img.logo-image',
      attribute: 'alt'
    },
    bgColor: {
      type: 'string',
      default: '#002A3D'
    },
    url: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: 'a'
    }
  },
  example: {
    attributes: {
      title: __('Tasty Glutenberg', 'tastydigital'),
      mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg'
    }
  },
  supports: {
    align: ['wide', 'full'],
    html: false
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        title = _props$attributes.title,
        mediaID = _props$attributes.mediaID,
        mediaURL = _props$attributes.mediaURL,
        mediaALT = _props$attributes.mediaALT,
        logoID = _props$attributes.logoID,
        logoURL = _props$attributes.logoURL,
        logoALT = _props$attributes.logoALT,
        bgColor = _props$attributes.bgColor,
        url = _props$attributes.url,
        setAttributes = props.setAttributes;

    var onChangeTitle = function onChangeTitle(value) {
      setAttributes({
        title: value
      });
    };

    var onSelectMedia = function onSelectMedia(media) {
      var thisURL = typeof media.sizes['homepage-splash'].url !== 'undefined' ? media.sizes['homepage-splash'].url : media.url;
      setAttributes({
        mediaURL: thisURL,
        mediaID: media.id,
        mediaALT: media.alt
      });
    };

    var onSelectLogo = function onSelectLogo(media) {
      var thisURL = typeof media.sizes['logo-list'].url !== 'undefined' ? media.sizes['logo-list'].url : media.url;
      console.log(media);
      setAttributes({
        logoURL: thisURL,
        logoID: media.id,
        logoALT: media.alt
      });
    };

    var onBackgroundColorChange = function onBackgroundColorChange(newColor) {
      setAttributes({
        bgColor: newColor
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Splash CTA Block Settings",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, __("Choose background colour")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: bgColor,
      onChange: onBackgroundColorChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, __("Choose link destination")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
      className: 'url-input',
      value: url,
      onChange: function onChange(url, post) {
        return setAttributes({
          url: url,
          titleText: post && post.title || 'Click here'
        });
      }
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overlay",
      style: {
        backgroundColor: bgColor + 'e9'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "splash-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectLogo,
      allowedTypes: "image",
      value: logoID,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: logoID ? 'image-button logo-button' : 'button button-large',
          onClick: open
        }, !logoID ? __('Upload Logo', 'tastydigital') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          id: 'image-' + logoID,
          src: logoURL,
          alt: logoALT
        }));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h2",
      placeholder: __('Call to action text', 'tastydigital'),
      value: title,
      onChange: onChangeTitle,
      allowedFormats: []
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "splash-image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectMedia,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: mediaID ? 'image-button media-button' : 'button button-large',
          onClick: open
        }, !mediaID ? __('Upload Image', 'tastydigital') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          id: 'image-' + mediaID,
          src: mediaURL,
          alt: mediaALT
        }));
      }
    }))));
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        title = _props$attributes2.title,
        mediaID = _props$attributes2.mediaID,
        mediaURL = _props$attributes2.mediaURL,
        mediaALT = _props$attributes2.mediaALT,
        logoID = _props$attributes2.logoID,
        logoURL = _props$attributes2.logoURL,
        logoALT = _props$attributes2.logoALT,
        bgColor = _props$attributes2.bgColor,
        url = _props$attributes2.url;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: url
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overlay opacity-90",
      style: {
        backgroundColor: bgColor
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overlay"
    }, logoURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "splash-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "logo-image",
      src: logoURL,
      alt: logoALT
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h2",
      value: title
    })), mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "splash-image",
      src: mediaURL,
      alt: mediaALT
    })));
  }
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_splash_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/splash-box */ "./src/blocks/splash-box/index.js");
/* harmony import */ var _blocks_splash_box_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/splash-box-overlay */ "./src/blocks/splash-box-overlay/index.js");
/* harmony import */ var _attributes_visible_on_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes/visible-on-mobile */ "./src/attributes/visible-on-mobile/index.js");
/* harmony import */ var _attributes_constrain_inner_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes/constrain-inner-container */ "./src/attributes/constrain-inner-container/index.js");
/* harmony import */ var _attributes_flexible_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes/flexible-group */ "./src/attributes/flexible-group/index.js");
/* harmony import */ var _attributes_flexible_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_attributes_flexible_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes_heading_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes/heading-styles */ "./src/attributes/heading-styles/index.js");
/* harmony import */ var _attributes_heading_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_attributes_heading_styles__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Internal dependencies
 */
// import './blocks/container';







/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map