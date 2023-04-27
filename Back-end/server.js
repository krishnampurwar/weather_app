const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
	let city = req.query.city;
	var request = require('request');
	request(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
		function(error, response, body) {
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
                res.send(data);
				res.send(`The weather in your city "${city}" is ${data.weather[0].description}`);
                
               
                console.log(body);
			}
		}
	);
});

app.listen(3000, () => console.log('Server started on port 3000'));