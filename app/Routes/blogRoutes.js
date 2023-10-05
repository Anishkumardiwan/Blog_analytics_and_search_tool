const express = require('express');
const { join } = require('path');
const blogController = require(join(__dirname, '../Controllers/blogControllers'));
const app = express();

// Middleware to fetch blog data and perform analytics
app.get('/api/blog-stats', blogController.retriveAndAnalyzeData);

app.get('/api/blog-search', blogController.blogSearch);

module.exports = app;