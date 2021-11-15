module.exports = (sequelize,Sequelize)=>{
    const Grupo = sequelize.define('grupo',{
        nombre:{
            type: Sequelize.STRING,
            unique: true,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    });
    return Grupo;
}