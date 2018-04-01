const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const port = 8050;
const corsConfig = {
    origin: ["./public/scripts.js", "https://factsea.herokuapp.com", "http://localhost:8050"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/visits', (req, res) =>{
	res.sendfile('./public/shownumber.html')
})
// enabling pre-flight
app.options("*", cors(corsConfig));
app.listen(process.env.PORT || port, () => console.log(`Server started on port ${port}`))
	