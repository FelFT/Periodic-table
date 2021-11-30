module.exports = (sequelize,Sequelize)=>{
    const Elemento = sequelize.define('elemento',{
        nombre:{
            type: Sequelize.STRING,
            unique: true,
        },
        noAtomico:{
            type: Sequelize.STRING,
            unique: true,
        },
        simbolo:{
            type: Sequelize.STRING,
            unique: true,
        },
        masa:{
            type: Sequelize.STRING,
        },
        imagen:{
            type: Sequelize.STRING,
            unique: true,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    });
    return Elemento;
}