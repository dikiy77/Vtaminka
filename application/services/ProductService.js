"use strict";

export default class ProductService{

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