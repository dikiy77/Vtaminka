"use strict";

//====================CONTROLLERS===========================//
import MainController from './controllers/MainController';

//====================SERVICES==============================//
import LocaleService from './services/LocaleService';
import ProductService from './services/ProductService';
import CartService from './services/CartService';

//====================FILTERS==============================//

//====================DIRECTIVES==============================//
import LangsOptionDirective from './directives/LangsOptionDirective';
import ProductDirective from './directives/ProductDirective';
import CartDirective from './directives/CartDirective';
import ProductInCartDirective from './directives/ProductInCartDirective';

angular.module('VtaminkaApplication.controllers' , []);
angular.module('VtaminkaApplication.services' , []);
angular.module('VtaminkaApplication.filters' , []);
angular.module('VtaminkaApplication.directives' , []);
angular.module('VtaminkaApplication.constants' , []);

//====================CONTROLLERS DECLARATIONS================================//
angular.module('VtaminkaApplication.controllers')
    .controller( 'MainController' , [ '$scope' , 'LocaleService' , '$translate', MainController ]);

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
    .service('LocaleService' , [ '$http', 'HOST' , 'GET_LANGS' , 'GET_TRANSLATIONS' , LocaleService ]);

angular.module('VtaminkaApplication.services')
    .service('ProductService' , [ '$http', 'HOST' , 'GET_PRODUCTS' , 'CartService' , ProductService ]);

angular.module('VtaminkaApplication.services')
    .service('CartService' , [ 'localStorageService' ,CartService ]);

//====================DIRECTIVES DECLARATIONS===================//
angular.module('VtaminkaApplication.directives')
    .directive('langsOptionDirective' , [ LangsOptionDirective ]);

angular.module('VtaminkaApplication.directives')
    .directive('productDirective' , [ ProductDirective ]);

angular.module('VtaminkaApplication.directives')
    .directive('cartDirective' , [ CartDirective ]);

angular.module('VtaminkaApplication.directives')
    .directive('productInCartDirective' , [ ProductInCartDirective ]);

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
                    return ProductService.getProductsInCart();
                } ],
                'langs': [ 'LocaleService' , function ( LocaleService ){
                    return LocaleService.getLangs();
                }  ]

            }
        });

    $stateProvider.state('SingleProduct' , {
            'url': '/product/:productID',
            'views':{
                "header":{
                    "templateUrl": "templates/header.html",
                    controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                        $scope.langs = langs;
                        $scope.cart = CartService.getCart();
                    } ]
                },
                "content": {
                    'templateUrl': "templates/product/single-product.html",
                    controller: [ '$scope' ,  'CartService' , 'product' , function ($scope , CartService , product){

                        $scope.product = product;
                        $scope.cart = CartService.getCart();

                        $scope.changeAmount = function ( product ){
                            CartService.changeAmound( product );
                        };

                        $scope.AddProduct = function ( product ){
                            $scope.product.isInCart = true;

                            CartService.addProduct( $scope.product );
                            console.log( "AddProduct" );
                        };

                    } ]
                },
                "footer": {
                    'templateUrl': "templates/footer.html",
                }
            },
            'resolve': {

                'product': [ 'ProductService' , '$stateParams' , function ( ProductService , $stateParams ){
                    return ProductService.getSingleProduct($stateParams.productID);
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
