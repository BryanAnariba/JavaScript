const { Sequelize } = require( 'sequelize' );

const dataBase = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    dataBase,
    user,
    password,
    {
        host: host,
        dialect: 'mysql',
    }
);

const dbConnectMysql = async() => {
    try {
        await sequelize.authenticate();
        console.log( 'MySQL Started Successfully' );
    } catch ( err ) {
        console.log( `MySQL Error: ${ err.message }` );
    }
};

module.exports = {
    sequelize, dbConnectMysql,
}