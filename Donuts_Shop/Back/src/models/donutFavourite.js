const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donutFavouriteSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    // price: {
    //     type: Number,
    //     required: true
    // }
})

const donutFavourite = mongoose.model("DonutFavourite", donutFavouriteSchema, "DonutFavourite")

module.exports = donutFavourite