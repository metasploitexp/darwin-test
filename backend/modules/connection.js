const pg = require('pg');

const Client = pg.Client;

//конфиг для бд
const config = {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT || '5432',
}

const connection = new Client(config);

//установка соединения
connection.connect();

module.exports = connection;
