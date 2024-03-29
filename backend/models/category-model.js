const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
    }
}, {versionKey: false});

const CategoryModel = mongoose.model("CategoryModel", CategorySchema, "categories");

module.exports = CategoryModel;


