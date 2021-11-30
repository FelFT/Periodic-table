const db =  require('../models/index');

const periodo = db.periodo;

exports.createPeriodos = async(req, res)=>{
    try {
        const { body } = req;

        if(!body.nombre) return res.status(404).send({message:'nombre es requerido'});

        const create = await periodo.create({
            nombre: body.nombre,
        })

        return res.status(201).send({message:"Periodo creado correctamente"});

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.getPeriodos = async (req, res) =>{
    try {

        const find = await periodo.findAll();
        return res.status(200).send(find);

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.updatePeriodos = async (req, res)=>{
    try{
        const {body,params} =req;
        
        if(!body) return res.status(400).send({message:'Los datos son requeridos para actualizar'});

        const validate = await periodo.findOne({
            where:{id: params.id}
        });

        if(!validate) return res.status(404).send({message:'No se encontró el periodo'});
        if(validate.statusDelete == true) return res.status(404).send({message:'No se encontró el periodo'});

        validate.nombre = body.nombre;

        validate.save();

        return res.status(200).send({message: 'Periodo se actualizó correctamente'})
    }catch (error){
        return res.status(500).send(message.error);
    }
}

exports.deletePeriodos=async(req,res)=>{
    try {
        const {id}=req.params;

        const find = await periodo.findByPk(id);
        
        if (!find) return res.status(404).send({message: 'No se encontró periodo'});
        if(find.statusDelete == true) return res.status(404).send({message:'No se encontró el periodo'});

        find.statusDelete = true;
        find.save();

        return res.status(500).send({message:'Periodo eliminado correctamente'});
    } catch (error) {
        
    }

};