const Sequelize = require("sequelize");
const DB = require("../config/config");

const sequelize = new Sequelize(DB.DBNAME,DB.USER,DB.PASSWORD,{
    host: DB.HOST,
    dialect: DB.DIALECT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.elemento = require('./element')(sequelize,Sequelize);
db.estado = require('./state')(sequelize,Sequelize);
db.grupo = require('./group')(sequelize,Sequelize);
db.periodo = require('./period')(sequelize,Sequelize);
db.tipo = require('./type')(sequelize, Sequelize);

db.estado.hasMany(db.elemento);
db.grupo.hasMany(db.elemento);
db.periodo.hasMany(db.elemento);
db.tipo.hasMany(db.elemento);

db.elemento.belongsTo(db.estado);
db.elemento.belongsTo(db.grupo);
db.elemento.belongsTo(db.periodo);
db.elemento.belongsTo(db.tipo);


module.exports = db;