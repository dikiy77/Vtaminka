"use strict";


export default class CartService{


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