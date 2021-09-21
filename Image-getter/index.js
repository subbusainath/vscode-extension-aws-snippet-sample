const serverless = require("serverless-http");
const express = require("express");
const app = new express();
const s3_get_object = require("../Image-getter/helper");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/image", s3_get_object);

const image = serverless(app);
module.exports = { image };
