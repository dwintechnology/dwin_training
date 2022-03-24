const Pool = require("pg").Pool;

const pool = new Pool({
    user: "tigran",
    password: "12345",
    database: "todo_db",
    host: "localhost",
    port: 5432
});

module.exports = pool;