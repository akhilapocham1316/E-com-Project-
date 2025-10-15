/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/fav-btn.js":
/*!****************************!*\
  !*** ./scripts/fav-btn.js ***!
  \****************************/
/***/ (() => {

eval("\r\nfunction captureFavouriteButtonClick(){\r\n    const product$ = document.getElementById(\"products\")\r\n    const favoriteButton$ = product$.querySelectorAll(\".btn-favourite\");\r\n    favoriteButton$.forEach(function(btn$){\r\n        btn$.addEventListener(\"click\",function(event){\r\n            const target = event.target;\r\n            const favoriteBtn$ = target.closest(\".btn-favourite\");\r\n            const selectedId = favoriteBtn$.getAttribute(\"data-id\")\r\n            console.log(selectedId)\r\n\r\n            const selectedProductIndex = selectedProductIds.indexOf(selectedId)\r\n\r\n            const icon$ = btn$.querySelector(\".material-icons-outlined\") //icon togling \r\n\r\n            if(selectedProductIndex != -1){\r\n                //means product is already selected\r\n\r\n                selectedProductIds.splice(selectedProductIndex , 1);\r\n\r\n                icon$.innerText = \"favorite_border\"; //icon togle\r\n            }else{\r\n                //product is not selected\r\n\r\n                selectedProductIds.push(selectedId)\r\n\r\n                icon$.innerText = \"favorite\"; //icon togle\r\n            }\r\n            console.log(selectedProductIds)\r\n\r\n            //adding the item to the wishlist and updating the number.\r\n            const wishListCounter$ = document.getElementById(\"wishlistCounter\")\r\n            wishListCounter$.innerText = selectedProductIds.length;\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://js-task-class/./scripts/fav-btn.js?");

/***/ }),

/***/ "./scripts/home.js":
/*!*************************!*\
  !*** ./scripts/home.js ***!
  \*************************/
/***/ (() => {

eval("const products = [\r\n    {\r\n        id : 1,\r\n        title: \"Mackbook\",\r\n        image: \"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg\",\r\n        description: \"Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..\",\r\n        price: 600,\r\n    },\r\n    {\r\n        id : 2,\r\n        title: \"iPhone\",\r\n        image: \"https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg\",\r\n        description: \"iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping..\",\r\n        price: 123,\r\n    },\r\n    {\r\n        id: 3,\r\n        title: \"Apple Cinema 30\",\r\n        image: \"https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg\",\r\n        description: \"The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..\",\r\n        price: 110,\r\n    },\r\n    {\r\n        id :4,\r\n        title: \"Canon EOS 5D\",\r\n        image: \"https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg\",\r\n        description: \"Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..\",\r\n        price: 98,\r\n    },\r\n]\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://js-task-class/./scripts/home.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./home */ \"./scripts/home.js\");\r\n__webpack_require__(/*! ./fav-btn */ \"./scripts/fav-btn.js\");\r\n__webpack_require__(/*! ./render */ \"./scripts/render.js\");\r\n__webpack_require__(/*! ./search */ \"./scripts/search.js\");\n\n//# sourceURL=webpack://js-task-class/./scripts/index.js?");

/***/ }),

/***/ "./scripts/render.js":
/*!***************************!*\
  !*** ./scripts/render.js ***!
  \***************************/
/***/ (() => {

eval("\r\nconst selectedProductIds = [];\r\n\r\nconst productsElement = document.getElementById(\"products\");\r\n\r\nconst productsModified = products.map(function (product) { //map will create a new set of data and alter the original data.\r\n    product.priceModified = product.price.toFixed(2); //toFixed will give a decimal point.\r\n    return product;\r\n})\r\nrenderProductCards(products);\r\n\r\n\r\nfunction renderProductCards(products) {\r\n    let productCards = \"\";\r\n\r\n    for (i = 0; i < products.length; i++) {\r\n        productCards = productCards + renderProductCard(products[i]);\r\n    }\r\n    productsElement.innerHTML = productCards;\r\n\r\n    captureFavouriteButtonClick();\r\n}\r\n\r\nfunction renderProductCard(product) {\r\n    return ` <div class=\"col-12 col-md-4 col-sm-6 col-lg-3\">\r\n    <div class=\"card\">\r\n        <img src=\"${product.image}\"\r\n            class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">${product.title}</h5>\r\n            <p class=\"card-text\">${product.description}</p>\r\n            <div>\r\n            <strong><span class=\"material-icons-outlined\">\r\n            currency_rupee\r\n            </span>${product.priceModified}</strong>\r\n            </div>\r\n            <div class=\"btn-group w-100\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn\"><span class=\"material-icons-outlined\">\r\n                        add_shopping_cart\r\n                    </span></button>\r\n                <button type=\"button\" class=\"btn btn-favourite\" data-id=\"${product.id}\">\r\n                <span class=\"material-icons-outlined\" data-id=\"${product.id}\">\r\n                        favorite_border\r\n                    </span></button>\r\n                <button type=\"button\" class=\"btn\"><span class=\"material-icons-outlined\">\r\n                        compare_arrows\r\n                    </span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>`\r\n}\r\n\n\n//# sourceURL=webpack://js-task-class/./scripts/render.js?");

/***/ }),

/***/ "./scripts/search.js":
/*!***************************!*\
  !*** ./scripts/search.js ***!
  \***************************/
/***/ (() => {

eval("// search logic\r\n\r\nconst search$ = document.getElementById(\"search\");\r\nsearch$.addEventListener(\"keyup\", function (event) {\r\n    // console.log(event)\r\n    const term = search$.value; //to enter the value in search and to see the value \r\n    // console.log(term);\r\n\r\n    const termLowerCased = term.toLowerCase(); //lowercase the letters \r\n    // console.log(termLowerCased);\r\n\r\n\r\n    // to filter the items for what we are searching for \r\n    const productFiltered = productsModified.filter(function (product) {\r\n        const titleLowercased = product.title.toLowerCase();\r\n        return titleLowercased.indexOf(termLowerCased) != -1; //if it matches give the result otherwise it will give -1 if not found.\r\n    })\r\n    renderProductCards(productFiltered);\r\n})\r\n\n\n//# sourceURL=webpack://js-task-class/./scripts/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;