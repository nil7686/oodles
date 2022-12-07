require('dotenv').config();

const pgp = require('pg-promise')();

const connectionParams = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database : process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    port:5432
};

const adminCollection = new pgp.helpers.ColumnSet(
    [
        'id',
        'email',
        'password'

    ],
    {table:'Admin_user'}
);

const db =pgp(connectionParams)

module.exports = { 
    db ,
    adminCollection
    }