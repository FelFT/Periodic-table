const db =  require('../models/index');

const tipo = db.tipo;

exports.createTipos = async(req, res)=>{
    try {
        const { body } = req;

        if(!body.nombre) return res.status(404).send({message:'nombre es requerido'});

        const create = await tipo.create({
            nombre: body.nombre,
        })

        return res.status(201).send({message:"Tipo creado correctamente"});

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.getTipos = async (req, res) =>{
    try {

        const find = await tipo.findAll();
        return res.status(200).send(find);

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.updateTipos = async (req, res)=>{
    try{
        const {body,params} =req;
        
        if(!body) return res.status(400).send({message:'Los datos son requeridos para actualizar'});

        const validate = await tipo.findOne({
            where:{id: params.id}
        });

        if(!validate) return res.status(404).send({message:'No se encontró el tipo'});
        if(validate.statusDelete == true) return res.status(404).send({message:'No se encontró el tipo'});

        validate.nombre = body.nombre;

        validate.save();

        return res.status(200).send({message: 'Tipos se actualizó correctamente'})
    }catch (error){
        return res.status(500).send(message.error);
    }
}

exports.deleteTipos=async(req,res)=>{
    try {
        const {id}=req.params;

        const find = await tipo.findByPk(id);
        
        if (!find) return res.status(404).send({message: 'No se encontró tipo'});
        if(find.statusDelete == true) return res.status(404).send({message:'No se encontró el tipo'});

        find.statusDelete = true;
        find.save();

        return res.status(500).send({message:'Tipo eliminado correctamente'});
    } catch (error) {
        
    }

};