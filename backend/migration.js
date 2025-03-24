const pg = require('pg');
const fs = require('fs');
var path = require('path');
require('dotenv').config();

const Client = pg.Client;

const config = {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT || '5432',
}

const sqlFile = 'create-and-fill-tables.sql';

const client = new Client(config);

//sql builder
(async () => {
    const sql = await readSQL(sqlFile);
    await client.connect().catch(console.log);
    await client.query(sql).catch(console.log);
    client.end().then(console.log('Таблицы успешно созданы и заполнены!'));
})()

//Чтение sql файла
function readSQL(name) {
    const filePath = path.join(__dirname, 'migrations', name);
    return new Promise( function( resolve, reject ) {
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (err) return reject(err);
        resolve(data);
        });
    })
}