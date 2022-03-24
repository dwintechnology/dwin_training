import pg from "pg";

export const pool = new pg.Pool({
    user: 'jorjjan',
    host: 'localhost',
    database: 'newdb',
    password: '1111',
    port: 5432,
})