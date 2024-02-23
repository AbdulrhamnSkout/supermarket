const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    totalPrice: {
        type: Number,
    },
    city: {
        type: String,
    },
    street: {
        type: String,
    },
    deliveryDate: {
        type: Date,
        min: new Date(Date.now()).getDate() + 1,
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    fourDigits: {
        type: String,
    }
}, {versionKey: false, toJSON: {virtuals: true}, id: false});

OrderSchema.virtual("customer", {
    ref: "CustomerModel",
    localField: "customerId",
    foreignField: "_id",
    justOne: true
});

OrderSchema.virtual("cart", {
    ref: "CartModel",
    localField: "cartId",
    foreignField: "_id",
    justOne: true
});

const OrderModel = mongoose.model("OrderModel", OrderSchema, "orders");

module.exports = OrderModel;