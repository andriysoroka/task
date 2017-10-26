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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./app.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports
exports.i(__webpack_require__(4), "");
exports.i(__webpack_require__(5), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n* {\n    padding: 0;\n    margin: 0;\n}\nbutton:hover {\n    cursor: pointer;\n}\nbody {\n    margin: 0;\n    background: #F5F5F5;\n}\n\nheader {\n    height: 63px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background: #d2d2d2; \n    padding: 0 21px 0 30px;\n}\n\n.logo-container > img {\n  width: 180px;\n  height: 35px; }\n\n.nav-container {\n  width: 45%;\n  height: 100%; }\n\n.menu {\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    font-size: 10px;\n    box-sizing: border-box;\n}\n\n.link-container {\n    flex-basis: 25%;\n    text-align: center;\n    box-sizing: border-box;\n}\n.link-container a{\n    \n}\n.nav-link:hover {\n    background: #C1C1C1; \n}\n\n.nav-link {\n    box-sizing: border-box;\n    text-decoration: none;\n    align-content: center;\n    padding: 30px 27px 19px;\n}\n\n  .nav-link > span {\n    position: relative;\n    bottom: 5px;\n    text-transform: uppercase;\n}\n\n.user > img {\n  width: 33px;\n  height: 33px;\n  border-radius: 40px; }\n.color {\n    fill: #B52F54;\n}\n.text-center {\n    text-align: center;\n}\n.inline-block {\n    display: inline-block;\n}\n.main {\n    margin-top: 0;\n    width: 100%;\n    padding: 0 19px 19px 19px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n}\n.icon-container {\n    height: 59px;\n    margin: 9px 0 8px;\n}\n.group-icon {\n    display: inline-block;\n    width: 90px;\n    height: 100%;\n    text-align: center;\n    box-sizing: border-box;\n    padding-top: 10px;\n}\n.group-icon:hover {\n    background: #E1E1E1;\n    cursor: pointer;\n}\n.svg-block {\n    display: block;\n    margin: auto;\n}\n.main-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.map-container {\n    width: 68.15%;\n}\n.map-header-container {\n    width: 100%;\n    height: 51px;\n    box-sizing: border-box;\n    background: #B52F54;\n}\n.head-map {\n    margin: 18px 0 18px 31px;\n    color: #FFFFFF;\n}\n.map-icon-container {\n    display: inline-block;\n    float: right;\n    margin: 15px 20px 18px;\n}\n\n.map-icon-container > button {\n    background: inherit;\n    border: none;\n}\n.map {\n    width: 100%;\n    height: 635px;\n}\n.map > iframe {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    bottom: 10px;\n    resize: vertical;\n    overflow: hidden; \n}\n.right-user-container {\n    width: 386px;\n}\n\n.wearers-container-header {\n    height: 51px;\n    width: 100%;\n    background: #B52F54;\n    padding: 15px;\n    box-sizing: border-box;\n}\n.wearers-container-header > div {\n    display: inline-block;\n    color: #FFFFFF;\n}\n.wearers-container-header-icons {\n    float: right;\n    display: inline-block;\n}\n.wearers-container-header-icons > button {\n    border: none;\n    background: inherit;\n}\n.wearers-container-group {\n    width: 384px;\n    margin: 0 auto;\n    border-width: 0 1px 0 1px;\n    border-style: solid;\n    border-color: #E5E5E5;\n    background: #FFFFFF;\n/*    box-shadow: 1px 1px #E5E5E5;*/\n}\n.wearers-container-group-wearer {\n    height: 45px;\n    width: 100%;\n    border-bottom: 1px solid #E5E5E5;\n}\n.wearers-container-group-wearer:first-of-type {\n    height: 50px;\n    width: 100%;\n    padding-top: 5px;\n}\n.wearers-container-group-add {\n    width: 384px;\n    height: 49px;\n    background: #FFFFFF;\n    margin: 0 auto;\n    border-width: 0 1px 1px 1px;\n    border-style: solid;\n    border-color: #E5E5E5;\n    resize: vertical;\n    overflow: hidden; \n}\n.wearers-container-group-add  button {\n    border: none;\n    background: inherit;\n}\n.wearers-container-group-add > div {\n    padding: 13px 25px;\n    box-sizing: border-box;\n}\n.wearers-container-group-add span {\n    position: relative;\n    bottom: 5px;\n    color: #B52F54;\n}\n.wearers-container-group-wearer > div {\n    height: 33px;\n    box-sizing: border-box;\n    margin: 6px 15px 6px 20px;\n}\n.wearers-container-group-wearer-avatar {\n    display: inline-block;\n}\n.wearers-container-group-wearer-avatar > img {\n    widows: 33px;\n    height: 33px;\n    border-radius: 40px;\n}\n.wearers-container-group-wearer-avatar > span {\n    position: relative;\n    bottom: 12px;\n}\n.wearers-container-group-wearer-icons {\n    display: inline-block;\n    float: right;\n}\n.wearers-container-group-wearer-icons > button {\n    background: #ffffff;\n    border: 1px solid #E5E5E5;\n    padding: 5px;\n    box-sizing: border-box;\n}\n.notifications-container {\n    margin-top: 28px;\n    background: #FFFFFF;\n}\n.notifications-container-events {\n    width: 384px;\n    border-width: 0px 1px 0px 1px;\n    border-style: solid;\n    border-color: #E5E5E5;\n}\n.notifications-container-event-wearer {\n    height: 80px;\n    border-bottom: 1px solid #E5E5E5;\n    box-sizing: border-box;\n    padding-left: 20px;\n    display: flex;\n    align-items: center;\n}\n.notifications-container-event-wearer > img {\n    width: 33px;\n    height: 33px;\n    border-radius: 20px;\n    vertical-align: middle;\n}\n.notifications-wearer-event {\n    margin-left: 28px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 50px;\n}\n.notifications-container-event-all {\n    height: 46px;\n    border-width: 0 1px 1px 1px;\n    border-style: solid;\n    border-color: #E5E5E5;\n    color: #B8B8B8;\n    padding: 12px 26px 18px;\n    box-sizing: border-box;\n}\n.tile-container {\n    margin-top: 25px;\n    box-sizing: border-box;\n    width: 386px;\n    height: 73px;\n    border-width: 2px;\n    border-style: dashed;\n    border-color: #E5E5E5;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.tile-container button {\n    border: none;\n    background: inherit;\n}\n.tile-container span {\n    color: #565656;\n    position: relative;\n    bottom: 5px;\n}\n.footer-container {\n    display: inline-block;\n    position: relative;\n    bottom: 10px;\n}\n.footer-container a {\n    text-decoration: none;\n    color: #565656;\n}\n\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".header {\n    height: 63px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background: #d2d2d2; \n    padding: 0 21px 0 30px;\n    .logo-container { \n        img {\n            width: 180px;\n            height: 35px;\n        }\n    }\n\n    .nav-container {\n        width: 45%;\n        height: 100%; \n    }\n\n    .menu {\n        height: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        font-size: 10px;\n        box-sizing: border-box;\n\n\n        .link-container {\n            flex-basis: 25%;\n            text-align: center;\n            box-sizing: border-box;\n        }\n\n        .nav-link:hover {\n            background: red; \n        }\n\n        .nav-link {\n            box-sizing: border-box;\n      .menu {\n        height: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        font-size: 10px;\n        box-sizing: border-box;\n\n\n        .link-container {\n            flex-basis: 25%;\n            text-align: center;\n            box-sizing: border-box;\n        }\n\n        .nav-link:hover {\n            background: red; \n        }\n\n        .nav-link {\n            box-sizing: border-box;\n            text-decoration: none;\n            align-content: center;\n            padding: 30px 27px 19px;\n\n            span {\n                position: relative;\n                bottom: 5px;\n                text-transform: uppercase;\n            }\n        }\n    }\n\n    .user {\n        img {\n            width: 33px;\n            height: 33px;\n            border-radius: 40px; \n        }\n    }\n    .color {\n        fill: #B52F54;\n    }\n    .text-center {\n        text-align: center;\n    }\n    .inline-block {\n        display: inline-block;\n    }          text-decoration: none;\n            align-content: center;\n            padding: 30px 27px 19px;\n\n            span {\n                position: relative;\n                bottom: 5px;\n                text-transform: uppercase;\n            }\n        }\n    }\n\n    .user {\n        img {\n            width: 33px;\n            height: 33px;\n            border-radius: 40px; \n        }\n    }\n    .color {\n        fill: #B52F54;\n    }\n    .text-center {\n        text-align: center;\n    }\n    .inline-block {\n        display: inline-block;\n    }\n}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);