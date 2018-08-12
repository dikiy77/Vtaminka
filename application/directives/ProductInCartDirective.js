"use strict";

export default function ProductInCartDirective() {
    return {

        restrict: 'AE',
        scope: {
            products: '=',

        },
        templateUrl: 'templates/directives/product-in-cart-directive.html',
        controller: [ '$scope' , 'CartService' , function ( $scope , CartService){

            $scope.changeAmount = function ( product ){

                // if(product.amount === "0" || product.amount === ""){
                //     product.amount = 1;
                // }

                CartService.changeAmound( product );
                //console.log( CartService.getCart() )

                CartService.summRefresh();

            }

            $scope.removeProduct = function ( index ) {

                CartService.removeProduct(index);

                $scope.products.splice(index, 1);

                CartService.summRefresh();

            }
        } ],
        link: function ( scope , element ){

            // new SelectFx(
            //     element.context.querySelector('select.cs-select'),
            //     {
            //         onChange: scope.changeAmount // let val = this.value; scope.changeAmount( val )
            //     }
            // );
            ripplyScott.init('.button', 0.75);

        }
    }
}//ProductInCartDirective