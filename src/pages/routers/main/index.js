const express = require("express");
const config = require("../../../../config.js");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render(__dirname + "/views/main_page.ejs", {
    title: config.site.title + " Main",
    req,
    res,
  });
});

router.get("/register", async (req, res) => {
  res.render(__dirname + "/views/register.ejs", {
    title: config.site.title + " Main",
    req,
    res,
  });
});

router.get("/login", async (req, res) => {
   res.render(__dirname + "/views/login.ejs", {
     title: config.site.title + " Main",
     req,
     res,
   });
 });

 router.get("/status", async (req, res) => {
   res.render(__dirname + "/views/status.ejs", {
     title: config.site.title + " Main",
     req,
     res,
   });
 });
 
 router.get("/about", async (req, res) => {
   res.render(__dirname + "/views/about.ejs", {
     title: config.site.title + " Main",
     req,
     res,
   });
 });

 router.get("/blog", async (req, res) => {
   res.render(__dirname + "/views/blog.ejs", {
     title: config.site.title + " Main",
     req,
     res,
   });
 });
 
 
 router.get("/pricing", async (req, res) => {
  res.render(__dirname + "/views/price.ejs", {
    title: config.site.title + " Main",
    req,
    res,
  });
});
module.exports = router;
