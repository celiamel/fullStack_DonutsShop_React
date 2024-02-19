const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const donutSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const donut = mongoose.model("Donut", donutSchema, "Donut")

module.exports = donut