'use strict';

module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQuantity = oldCart.totalQuantity || 0;

    this.address = oldCart.address || {};
    this.paymentMethod = oldCart.paymentMethod || "COD";

    this.getTotalQuantity = () => {
        var quantity = 0;
        for (var id in this.items) {
            quantity += parseInt(this.items[id].quantity);
        }
        return quantity;
    };



    this.add = (item, id, quantity) => {
        var storedItem = this.items[id];
        if (!storedItem) {
            this.items[id] = { item: item, quantity: 0 };
            storedItem = this.items[id];
        }

        storedItem.quantity += parseInt(quantity);

        this.totalQuantity = this.getTotalQuantity();

        return this.getCartItem(id);
    };

    this.remove = (id) => {
        var storedItem = this.items[id];
        if (storedItem) {
            delete this.items[id];
            this.totalQuantity = this.getTotalQuantity();

        }
    };

    this.update = (id, quantity) => {
        var storedItem = this.items[id];
        if (storedItem && quantity >= 1) {
            storedItem.quantity = quantity;

            this.totalQuantity = this.getTotalQuantity();

        }
        return this.getCartItem(id);
    };

    this.empty = () => {
        this.items = {};
        this.totalQuantity = 0;
    };

    this.generateArray = () => {
        var arr = [];
        for (var id in this.items) {

            arr.push(this.items[id]);
        }
        return arr;
    };

    this.getCart = function() {
        var cart = {
            items: this.generateArray(),
            totalQuantity: this.totalQuantity,

            address: this.address,
            paymentMethod: this.paymentMethod
        };
        return cart;
    }

    this.getCartItem = function(id) {
        var cartItem = {
            item: this.items[id],
            totalQuantity: this.totalQuantity,
        }
        return cartItem;
    }
};