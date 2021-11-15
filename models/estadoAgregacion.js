module.exports = (sequelize,Sequelize)=>{
    const Estado = sequelize.define('estado',{
        nombre:{
            type: Sequelize.STRING,
            unique: true,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    });
    return Estado;
}