require ('dotenv').config()

const config = {
    development: {
        username: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE,
        host: process.env.MYSQLHOST,
        dialect: 'mysql'
    }
}


module.exports = config;