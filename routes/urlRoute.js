const express=require("express");
const { shorten, fetch, redirect } = require("../controllers/urlcontroller");

const urlRouter=express.Router();

urlRouter.post('/shorten',shorten);
urlRouter.get('/fetch',fetch);
urlRouter.get('/redirect/:shortUrl',redirect);

module.exports={urlRouter};