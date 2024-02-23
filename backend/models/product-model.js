const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    price: {
        type: Number,
    },
    imageName: {
        type: String,
    }
}, {versionKey: false, toJSON: {virtuals: true}, id: false});

ProductSchema.virtual("category", {
    ref: "CategoryModel",
    localField: "categoryId",
    foreignField: "_id",
    justOne: true
});

const ProductModel = mongoose.model("ProductModel", ProductSchema, "products");

module.exports = ProductModel;