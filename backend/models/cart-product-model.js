const mongoose = require("mongoose");

const CartProductSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    quantity: {
        type: Number,
    },
    totalPrice: {
        type: Number,
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
    }
}, {versionKey: false, toJSON: {virtuals: true}, id: false});

CartProductSchema.virtual("cart", {
    ref: "CartModel",
    localField: "cartId",
    foreignField: "_id",
    justOne: true
});

CartProductSchema.virtual("product", {
    ref: "ProductModel",
    localField: "productId",
    foreignField: "_id",
    justOne: true
});

const CartProductModel = mongoose.model("CartProductModel", CartProductSchema, "cartsProducts");

module.exports = CartProductModel;