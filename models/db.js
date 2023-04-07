const Pool = require('pg').Pool;

const movie = new Pool({
    user: '',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'moviescope'
});

module.exports = movie;