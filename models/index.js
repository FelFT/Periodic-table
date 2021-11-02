const Secualize = require("sequalize");
const { Sequelize } = require("sequelize/types");
const DB = require("../config/config");

const sequalize = new Sequelize(DB.DBNAME,DB.USER,DB.PASSWORD,{
    host: DB.HOST,
    dialect: DB.DIALECT
});

const db = {};