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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/app.js":
/*!****************************!*\
  !*** ./application/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainController */ "./application/controllers/MainController.js");
/* harmony import */ var _services_LocaleService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/LocaleService */ "./application/services/LocaleService.js");
/* harmony import */ var _services_ProductService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ProductService */ "./application/services/ProductService.js");
/* harmony import */ var _services_CartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/CartService */ "./application/services/CartService.js");
/* harmony import */ var _directives_LangsOptionDirective__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/LangsOptionDirective */ "./application/directives/LangsOptionDirective.js");
/* harmony import */ var _directives_ProductDirective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/ProductDirective */ "./application/directives/ProductDirective.js");


//====================CONTROLLERS===========================//


//====================SERVICES==============================//




//====================FILTERS==============================//

//====================DIRECTIVES==============================//



angular.module('VtaminkaApplication.controllers' , []);
angular.module('VtaminkaApplication.services' , []);
angular.module('VtaminkaApplication.filters' , []);
angular.module('VtaminkaApplication.directives' , []);
angular.module('VtaminkaApplication.constants' , []);

//====================CONTROLLERS DECLARATIONS================================//
angular.module('VtaminkaApplication.controllers')
    .controller( 'MainController' , [ '$scope' , 'LocaleService' , '$translate', _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__["default"] ]);

//====================CONSTANTS================================//
angular.module('VtaminkaApplication.constants')
       .constant('HOST' , 'http://localhost:63342/Vtaminka/public/');

angular.module('VtaminkaApplication.constants')
    .constant('GET_LANGS' , 'i18n/langs.json');

//GET_PRODUCTS
angular.module('VtaminkaApplication.constants')
    .constant('GET_PRODUCTS' , 'products/products-list.json');

angular.module('VtaminkaApplication.constants')
    .constant('GET_TRANSLATIONS' , 'i18n/{{LANG}}.json');

//====================SERVICES DECLARATIONS===================//
angular.module('VtaminkaApplication.services')
    .service('LocaleService' , [ '$http', 'HOST' , 'GET_LANGS' , 'GET_TRANSLATIONS' , _services_LocaleService__WEBPACK_IMPORTED_MODULE_1__["default"] ]);

angular.module('VtaminkaApplication.services')
    .service('ProductService' , [ '$http', 'HOST' , 'GET_PRODUCTS' , 'CartService' , _services_ProductService__WEBPACK_IMPORTED_MODULE_2__["default"] ]);

angular.module('VtaminkaApplication.services')
    .service('CartService' , [ 'localStorageService' ,_services_CartService__WEBPACK_IMPORTED_MODULE_3__["default"] ]);

//====================DIRECTIVES DECLARATIONS===================//
angular.module('VtaminkaApplication.directives')
    .directive('langsOptionDirective' , [ _directives_LangsOptionDirective__WEBPACK_IMPORTED_MODULE_4__["default"] ]);

angular.module('VtaminkaApplication.directives')
    .directive('productDirective' , [ _directives_ProductDirective__WEBPACK_IMPORTED_MODULE_5__["default"] ]);


let app = angular.module('VtaminkaApplication',[
    'angular-loading-bar',
    'LocalStorageModule',
    'VtaminkaApplication.controllers',
    'VtaminkaApplication.filters',
    'VtaminkaApplication.services',
    'VtaminkaApplication.directives',
    'VtaminkaApplication.constants',
    'ngRoute',
    'ui.router',
    'pascalprecht.translate',
]);

app.config( [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'localStorageServiceProvider' ,
    'cfpLoadingBarProvider',
    '$translateProvider',
    ($stateProvider , $urlRouterProvider , $locationProvider , localStorageServiceProvider , cfpLoadingBarProvider , $translateProvider)=>{

    $urlRouterProvider.otherwise('/home');

    $locationProvider.html5Mode(true);

    $translateProvider.useStaticFilesLoader({
        'prefix': 'i18n/',
        'suffix': '.json'
    });

    $translateProvider.preferredLanguage('RU');

    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;

    localStorageServiceProvider.setStorageCookie( 7 , '/' );
    localStorageServiceProvider.setStorageCookieDomain('localhost');

    $stateProvider.state('home' , {
        'url': '/home',
        'views':{
            "header":{
                "templateUrl": "templates/header.html",
                controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                    $scope.langs = langs;
                    $scope.cart = CartService.getCart();
                } ]
            },
            "content": {
                'templateUrl': "templates/home/home.html",
                controller: [ '$scope' ,  'CartService' , 'products' , function ($scope , CartService , products){

                    $scope.products = products;
                    $scope.cart = CartService.getCart();

                } ]
            },
            "footer": {
                'templateUrl': "templates/footer.html",
            }
        },
        'resolve': {

            'products': [ 'ProductService' , function ( ProductService ){

                return ProductService.getProducts();
            } ],
            'langs': [ 'LocaleService' , function ( LocaleService ){
                return LocaleService.getLangs();
            }  ]

        }
    });

    $stateProvider.state('cart' , {
            'url': '/cart',
            'views':{
                "header":{
                    "templateUrl": "templates/header.html",
                    controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                        $scope.langs = langs;
                        $scope.cart = CartService.getCart();
                    } ]
                },
                "content": {
                    'templateUrl': "templates/cart/cart.html",
                    controller: [ '$scope' ,  'CartService' , 'products' , function ($scope , CartService , products){

                        $scope.products = products;
                        $scope.cart = CartService.getCart();

                    } ]
                },
                "footer": {
                    'templateUrl': "templates/footer.html",
                }
            },
            'resolve': {

                'products': [ 'ProductService' , function ( ProductService ){
                    return ProductService.getProducts();
                } ],
                'langs': [ 'LocaleService' , function ( LocaleService ){
                    return LocaleService.getLangs();
                }  ]

            }
        });


} ] );

app.run(
    [          '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {

        }
    ]);


/***/ }),

/***/ "./application/controllers/MainController.js":
/*!***************************************************!*\
  !*** ./application/controllers/MainController.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainController; });


class MainController{

    constructor( $scope , LocaleService , $translate ){

        $scope.updateTranslations = function ( lang ){
            $translate.use(lang);
        }

    }//constructor

}

/***/ }),

/***/ "./application/directives/LangsOptionDirective.js":
/*!********************************************************!*\
  !*** ./application/directives/LangsOptionDirective.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LangsOptionDirective; });



function LangsOptionDirective( ){

    return {

        restrict: 'A',
        template: '',
        scope: {
            'langs': '='
        },
        controller: [ '$scope' , function ( $scope ){

            $scope.currentLang = $scope.langs[0];
            $scope.changeLanguage = function ( newLanguage ){

                console.log(newLanguage);
                $scope.$parent.updateTranslations( newLanguage );

            };

        } ],
        link: function ( scope, element, attrs, controller, transcludeFn ){

            let options = '';

            scope.langs.forEach( (lang) => {
                options += `<option value="${lang}" >${lang}</option>`;
            } );

            element.html( options );

            new SelectFx(
                document.querySelector('#langs'),{
                    onChange: scope.changeLanguage
                }
            );

        }//link

    }//LangsListDirective {}

}//LangsListDirective ()

/***/ }),

/***/ "./application/directives/ProductDirective.js":
/*!****************************************************!*\
  !*** ./application/directives/ProductDirective.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDirective; });



function ProductDirective( ){

    return {

        restrict: 'A',
        scope: {
            product: '='
        },
        templateUrl: 'templates/directives/product-directive.html',
        controller: [ '$scope' , 'CartService' , function ( $scope , CartService){

            $scope.changeAmount = function ( newAmount ){
                $scope.product.amount = newAmount;
            }

            $scope.AddProduct = function ( product ){
                product.isInCart = true;
                CartService.addProduct( product );
                //console.log( CartService.getCart() )
            }

        } ],
        link: function ( scope , element ){

            new SelectFx(
                element.context.querySelector('select.cs-select'),
                {
                    onChange: scope.changeAmount // let val = this.value; scope.changeAmount( val )
                }
            );
            ripplyScott.init('.button', 0.75);

        }
    }

}

/***/ }),

/***/ "./application/services/CartService.js":
/*!*********************************************!*\
  !*** ./application/services/CartService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartService; });



class CartService{


    constructor(localStorageService ){

        //this.cart = [];
        //localStorageService.clearAll();
        if(localStorageService.get('cart')){
            this.cart = localStorageService.get('cart');
        }// if
        else{
            this.cart = [];
        }// else

        this._localStorageService = localStorageService;
        //this._ProductService = ProductService;

    }//constructor

    getCart(){
        return this.cart;
    }//getCart

    isExist( product){

        return this.cart.some( p => {
            return p.id ===  product.ProductID;
        });
    }

    addProduct( product ){

        this.cart.push( this.getShortProduct( product ) );

        this._localStorageService.set('cart' , this.cart);

    }//addProduct

    getShortProduct( product ){

            console.log(product.ProductID);

        return {
            'id' : product.ProductID,
            'amount' : product.amount,

        }
    }//getShortProduct

    clearCart(){
        this._localStorageService.clearAll();
        this.cart.length = 0;
    }

}

/***/ }),

/***/ "./application/services/LocaleService.js":
/*!***********************************************!*\
  !*** ./application/services/LocaleService.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocaleService; });



class LocaleService{

    constructor(
        $http ,
        HOST ,
        GET_LANGS,
        GET_TRANSLATIONS
    ){

        this._$http = $http;
        this._HOST = HOST;
        this._GET_LANGS = GET_LANGS;
        this._GET_TRANSLATIONS = GET_TRANSLATIONS;

    }

    async getLangs(){

            let response = await this._$http.get( `${this._HOST}${this._GET_LANGS}` );
            return response.data;

    }//getLangs

    async getTranslations( lang ){

        let sourceUrl = this._GET_TRANSLATIONS.replace('{{LANG}}' , lang.toUpperCase());

        let response = await this._$http.get( `${this._HOST}${sourceUrl}` );
        return response.data;


    }//getTranslations

}

/***/ }),

/***/ "./application/services/ProductService.js":
/*!************************************************!*\
  !*** ./application/services/ProductService.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductService; });


class ProductService{

    constructor(
        $http ,
        HOST ,
        GET_PRODUCTS,
        CartService
    ){

        this._$http = $http;
        this._HOST = HOST;
        this._GET_PRODUCTS = GET_PRODUCTS;
        this._CartService = CartService;
        //this._cart = CartService.getCart();
    }

    async getProducts(){
        try {
            let response = await this._$http.get( `${this._HOST}${this._GET_PRODUCTS}` );

            let products = response.data;

            let cart = this._CartService.getCart();

            if(cart.length === 0){
                products.forEach( p => {
                    p.amount = 1;
                    p.isInCart = false;
                } );
            }
            else{

                products.forEach( p => {
                    if(this._CartService.isExist( p )){

                        for (let i = 0; i < cart.length; i++){
                            if (p.ProductID === cart[i].id) {
                                p.amount = cart[i].amount;
                                p.isInCart = true;
                            }
                        }

                    }//if
                    else {
                        p.amount = 1;
                        p.isInCart = false;
                    }
                } );

            }//else

            return products;
        }//try
        catch{
            console.log("Exeption: getProducts");
            return [];
            }//catch


    }//getProducts


}//ProductService

/***/ })

/******/ });
//# sourceMappingURL=index.js.map