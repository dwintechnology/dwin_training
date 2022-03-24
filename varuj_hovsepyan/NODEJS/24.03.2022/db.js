import pg from "pg";
const pool = new pg.Pool({
    user: 'varuj',
    host: 'localhost',
    database: 'mydb',
    password: '12345',
    port: 5432,
  })
export default pool  