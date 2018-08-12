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

    changeAmound( product ){

        for (let i = 0; i < this.cart.length; i++){
            if (product.ProductID === this.cart[i].id) {

                this.cart[i].amount =  product.amount;

                this._localStorageService.set('cart' , this.cart);
                return;
            }
        }

    }//changeAmound

    getShortProduct( product ){

            //console.log(product.ProductID);

        return {
            'id' : product.ProductID,
            'amount' : product.amount,

        }
    }//getShortProduct

    clearCart(){
        this._localStorageService.clearAll();
        this.cart.length = 0;
    }

    removeProduct ( index ){

        this.cart.splice( index, 1 );

        this._localStorageService.set('cart' , this.cart);

    }//removeProduct

    OnSummRefresh(callback){
        this._refreshSumm = callback;
    }

    summRefresh(){
        if(this._refreshSumm)
        this._refreshSumm();
    }
}//CartService