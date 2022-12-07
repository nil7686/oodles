const Pool = require('pg').Pool

const pool = new Pool({
    host: "localhost",
    user: "nilesh",
    port: 5432,
    password: "Nilesh@1234",
    database: "user_db"
});

module.exports = pool