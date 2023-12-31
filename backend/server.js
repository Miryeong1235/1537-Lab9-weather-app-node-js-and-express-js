const port = 3000;

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const fetch = require('node-fetch');

app.get('/getCityWeather', async (req, res) => {
    resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=c0cc8f065c4ca0234b6fc2b84f8f2833&units=metric`);
    jsonResp = await resp.json();
    res.send(jsonResp);
});





app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});