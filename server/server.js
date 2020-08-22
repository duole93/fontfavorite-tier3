require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();


app.get("/font", (req, res) => {
    axios.get('https://webfonts.googleapis.com/v1/webfonts?sort=POPULARITY&key=' + process.env.REACT_APP_API_KEY)
        .then(function (response) {
            let items = response.data.items.map(item => ({
                family: item.family, url: item.files.regular ? item.files.regular : item.files[Object.keys(item.files)[0]]
            }))
            res.send(items);            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
})


app.listen(process.env.PORT, () => {
    console.log("Server Started")
})