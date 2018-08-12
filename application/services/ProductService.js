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

    async getProductsInCart(){
        try {
            let response = await this._$http.get( `${this._HOST}${this._GET_PRODUCTS}` );

            let products = response.data;

            let cart = this._CartService.getCart();

            let productsInCart = [];

            if(cart.length === 0){
               return [];
            }

            products.forEach( p => {
                if(this._CartService.isExist( p )){

                    for (let i = 0; i < cart.length; i++){
                        if (p.ProductID === cart[i].id) {
                            p.amount = cart[i].amount;
                            p.isInCart = true;
                            productsInCart.push(p);
                        }
                    }

                }//if
                else {
                    p.amount = 1;
                    p.isInCart = false;
                }
            } );



            return productsInCart;
        }//try
        catch{
            console.log("Exeption: getProductsInCart");
            return [];
        }//catch


    }//getProductsInCart

    async getSingleProduct(productId){
        try {
            let response = await this._$http.get( `${this._HOST}/products/${productId}.json` );

            let product = response.data;

            let cart = this._CartService.getCart();

            if(this._CartService.isExist( product )){
                console.log(product);
                for (let i = 0; i < cart.length; i++){
                    if (product.ProductID === cart[i].id) {
                        product.amount = cart[i].amount;
                        product.isInCart = true;
                    }
                }

            }//if
            else {
                product.amount = 1;
                product.isInCart = false;
            }

            return product;
        }//try
        catch{
            console.log("Exeption: getSingleProduct");
            return [];
        }//catch


    }//getSingleProduct


}//ProductService