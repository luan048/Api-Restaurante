const Client = require('pg').Client

const cliente = new Client({
    user: "postgres",
    password: "luan123",
    host: "127.0.0.1",
    port: 5432,
    database: "Restaurant"
})

module.exports = cliente