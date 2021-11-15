module.exports = (sequelize,Sequelize)=>{
    const Periodo = sequelize.define('periodo',{
        nombre:{
            type: Sequelize.STRING,
            unique: true,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    });
    return Periodo;
}