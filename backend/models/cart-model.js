const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    dateOfCreationCart: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {versionKey: false, toJSON: {virtuals: true}, id: false, });

CartSchema.virtual("customer", {
    ref: "CustomerModel",
    localField: "customerId",
    foreignField: "_id",
    justOne: true
});

const CartModel = mongoose.model("CartModel", CartSchema, "carts");

module.exports = CartModel;