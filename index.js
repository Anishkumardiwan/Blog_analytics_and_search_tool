const express = require('express');
const bodyParser = require('body-parser');
const { join } = require('path');
const cors = require('cors');
const blogRoutes = require(join(__dirname, './app/Routes/blogRoutes'));
require("dotenv").config();

const app = express();

// CORS
app.use(cors({
    origin: '*'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Climate Routes
app.use(blogRoutes);

const myPort = process.env.PORT || 3030;
app.listen(myPort, () => {
    console.log(`server is running: http://localhost:${myPort}/`,);
});









