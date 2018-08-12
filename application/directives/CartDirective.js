"use strict";


export default  function CartDirective( ){

    return {

        restrict: 'A',
        scope: {
            products: '='
        },
        templateUrl: 'templates/directives/cart-directive.html',
        controller: [ '$scope' , 'CartService' , function ( $scope , CartService){

            $scope.summ = $scope.products.reduce(function (sum, current) {

                return sum + (current.amount * current.ProductPrice);
            }, 0);


            CartService.OnSummRefresh( ()=>{
                $scope.summ = $scope.products.reduce(function (sum, current) {

                    return sum + (current.amount * current.ProductPrice);
                }, 0);
            } );


        } ],
        link: function ( scope , element ){

            // new SelectFx(
            //     // element.context.querySelector('select.cs-select'),
            //     // {
            //     //     onChange: scope.changeAmount // let val = this.value; scope.changeAmount( val )
            //     // }
            // );
            ripplyScott.init('.button', 0.75);

        }
    }

}