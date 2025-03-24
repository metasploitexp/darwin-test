const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5002;

//Решение проблемы cors
const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, process.env.FRONTEND_HOST);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
};

app.use(allowCrossDomain);
app.use(express.json());

app.use('/cars', require('./routes/car.routes'));

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})