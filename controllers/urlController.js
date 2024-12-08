const mongoose = require("mongoose");
const { urlModel } = require("../models/urlModel");
const { json } = require("express");


//Shorten URL

const shorten = async (req, res) => {
    try {
        const { longUrl } = req.body;
        const Url = await urlModel.findOne({ longUrl });
        if (!Url) {
            if (longUrl.includes("https://") || longUrl.includes("http://")) {
                const count = await urlModel.countDocuments({});
                let shortUrl = "http://localhost:4000/url";
                let str = `${count + 1}`;
                shortUrl = shortUrl + str.padStart(3, '0');
                req.body.shortUrl = shortUrl;
                const url = await urlModel.create(req.body)

                return res.json({ success: true, message: "URL Shortened successfully" })
            }
            else {
                 return res.json({ success: false, message: "Enter valid URL" })
            }
        }
        else {
            res.json({ success: false, message: "URL already shortened", shortenedUrl: Url.shortUrl })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error Occurred" })
    }
}


// Fetch all URLS 

const fetch = async (req, res) => {
    try {
        const urls = await urlModel.find({})
        res.json({ success: true, urls, message: "URLs fetched successfully" });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error Occurred" })
    }
}

// Redirect URL

const redirect = async (req, res) => {
    try {
        const sUrl = req.params.shortUrl
        const Url = await urlModel.findOne({ shortUrl: `http://localhost:${process.env.PORT}/${sUrl}` })
        if (Url) {
            const currentDate = Url.lastClicked.getDate();
            Url.lastClicked = new Date(); 
            if (Url.lastClicked.getDate() === currentDate && Url.hitCount >= 20) {
                return res.json({ success: false, message: "More than 20 requests made for this day , Further requests will not be accepted" })
            }
            Url.hitCount = (Url.lastClicked.getDate() !== currentDate) ? 1 : (Url.hitCount + 1);
            await urlModel.findByIdAndUpdate(Url.id, { hitCount: Url.hitCount, lastClicked: Url.lastClicked })
            if (Url.hitCount % 10 === 0) {
                console.log(Url.hitCount);
                res.redirect('https://google.com')
            }
            else {
                console.log(Url.hitCount);
                res.redirect(Url.longUrl);
            }
        }
        else {
            res.status(404).json({ success: false, message: 'URL not found' })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error Occurred" })
    }
}

module.exports = { shorten, fetch, redirect };
