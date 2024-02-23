const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    idNumber: {
        type: String,
    },
    password: {
        type: String,
    },
    city: {
        type: String,
    },
    street: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    },
    token: {
        type: String
    }

}, {versionKey: false});

const CustomerModel = mongoose.model("CustomerModel", CustomerSchema, "customers");

module.exports = CustomerModel;