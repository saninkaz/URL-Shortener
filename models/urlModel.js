const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: [true, "Please Enter a URL"]
    },
    shortUrl: {
        type: String,
        required: false //Could also add reject validation later
    },
    hitCount: {
        type: Number,
        required: false,
        default: 0
    },
    lastClicked: {
        type:Date,
        required: false,
        default: 0
    }
})

const urlModel = mongoose.models.url || mongoose.model("url", urlSchema);

module.exports = { urlModel }