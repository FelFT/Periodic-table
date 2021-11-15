const db =  require('../models/index');

const grupo = db.grupo;

exports.createGrupos = async(req, res)=>{
    try {
        const { body } = req;

        if(!body.nombre) return res.status(404).send({message:'nombre es requerido'});

        const create = await grupo.create({
            nombre: body.nombre,
        })

        return res.status(201).send({message:"Grupo creado correctamente"});

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.getGrupos = async (req, res) =>{
    try {

        const find = await grupo.findAll();
        return res.status(200).send(find);

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.updateGrupos = async (req, res)=>{
    try{
        const {body,params} =req;
        
        if(!body) return res.status(400).send({message:'Los datos son requeridos para actualizar'});

        const validate = await grupo.findOne({
            where:{id: params.id}
        });

        if(!validate) return res.status(404).send({message:'No se encontró el grupo'});
        if(validate.statusDelete == true) return res.status(404).send({message:'No se encontró el grupo'});

        validate.nombre = body.nombre;

        validate.save();

        return res.status(200).send({message: 'Grupo se actualizó correctamente'})
    }catch (error){
        return res.status(500).send(message.error);
    }
}