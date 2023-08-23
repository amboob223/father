const POOL = require("pg").Pool;
const dotenv = require("dotenv")
    dotenv.config()





console.log("PASSWORD:", process.env.PASSWORD);
console.log("HOSTNAME:", process.env.HOSTNAME);
console.log("DATABASE:", process.env.DATABASE);
console.log("PORT:", process.env.PORT);

const pool = new POOL({
    user:"postgres",
    password:process.env.PASSWORD,
    host:process.env.HOSTNAME,
    database:process.env.DATABASE,
    port:process.env.PORT
});

module.exports = pool 