const express=require("express");
const { shorten, fetch, redirect, details, rank } = require("../controllers/urlController");

const urlRouter=express.Router();

urlRouter.post('/shorten',shorten);
urlRouter.get('/fetch',fetch);
urlRouter.get('/redirect/:shortUrl',redirect);
urlRouter.get('/details/:url',details);
urlRouter.get('/top/:number',rank);

module.exports={urlRouter};