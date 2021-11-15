const Sequelize = require("sequelize");
const DB = require("../config/config");

const sequelize = new Sequelize(DB.DBNAME,DB.USER,DB.PASSWORD,{
    host: DB.HOST,
    dialect: DB.DIALECT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.elemento = require('./elemento')(sequelize,Sequelize);
db.estado = require('./estadoAgregacion')(sequelize,Sequelize);
db.grupo = require('./grupo')(sequelize,Sequelize);
db.periodo = require('./periodo')(sequelize,Sequelize);
db.tipo = require('./tipo')(sequelize, Sequelize);

module.exports = db;