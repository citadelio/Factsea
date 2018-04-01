const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const port = 8050;
const fetch = require('node-fetch');
// const corsConfig = {
//     origin: ["./public/scripts.js", "https://factsea.herokuapp.com", "http://localhost:8050"],
//     credentials: true,
//     methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//     allowedHeaders: ['Content-Type']
// };
//app.use(cors(corsConfig));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/visits', (req, res) =>{
	res.sendfile('./public/shownumber.html')
})

app.post('/findyear', (req, res) => {
	var b = JSON.stringify(req.body);
	var year = b.substring(2,6);
	fetch("http://numbersapi.com/"+year+"/year")
    .then(res => res.text())
    .then(data => {
    	return res.send(data);
    })
    .catch(error => console.log(error));
 
})
app.post('/findnumber', (req, res) => {
	var b = JSON.stringify(req.body);
	var d = b.substring(2,99);
	var number = parseInt(d);
	console.log(number);
	fetch("http://numbersapi.com/"+number)
    .then(res => res.text())
    .then(data => {
    	return res.send(data);
    })
    .catch(error => console.log(error));
 
})
// enabling pre-flight
//app.options("*", cors(corsConfig));
app.listen(process.env.PORT || port, () => console.log(`Server started on port ${port}`))
	