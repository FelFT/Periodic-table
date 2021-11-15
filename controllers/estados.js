const db =  require('../models/index');

const estado = db.estado;

exports.createEstados = async(req, res)=>{
    try {
        const { body } = req;

        if(!body.nombre) return res.status(404).send({message:'nombre es requerido'});

        const create = await estado.create({
            nombre: body.nombre,
        })

        return res.status(201).send({message:"Estado creado correctamente"});

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.getEstados = async (req, res) =>{
    try {

        const find = await estado.findAll();
        return res.status(200).send(find);

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.updateEstados = async (req, res)=>{
    try{
        const {body,params} =req;
        
        if(!body) return res.status(400).send({message:'Los datos son requeridos para actualizar'});

        const validate = await estado.findOne({
            where:{id: params.id}
        });

        if(!validate) return res.status(404).send({message:'No se encontró el estado'});
        if(validate.statusDelete == true) return res.status(404).send({message:'No se encontró el estado'});

        validate.nombre = body.nombre;

        validate.save();

        return res.status(200).send({message: 'Estado se actualizó correctamente'})
    }catch (error){
        return res.status(500).send(message.error);
    }
}