import pkg from "pg";
const pool = new pkg.Pool({
  user: "brat",
  password: "1111",
  database: "new_database",
  host: "localhost",
  port: 5432,
});
export default pool;