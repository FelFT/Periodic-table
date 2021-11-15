module.exports = (sequelize,Sequelize)=>{
    const Tipo = sequelize.define('tipo',{
        nombre:{
            type: Sequelize.STRING,
            unique: true,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    });
    return Tipo;
}