const db =  require('../models/index');

const elemento = db.elemento;

exports.createElements = async(req, res)=>{
    try {
        const { body } = req;

        if(!body.nombre) return res.status(404).send({message:'nombre es requerido'});
        if(!body.noAtomico) return res.status(404).send({message:'noAtomico es requerido'});
        if(!body.simbolo) return res.status(404).send({message:'simbolo es requerido'});
        if(!body.masa) return res.status(404).send({message:'masa es requerido'});
        if(!body.imagen) return res.status(404).send({message:'imagen es requerido'});


        const create = await elemento.create({
            nombre: body.nombre,
            noAtomico: body.noAtomico,
            simbolo: body.simbolo,
            masa: body.masa,
            imagen: body.imagen,
        })

        return res.status(201).send({message:"Elemento creado correctamente"});

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.getElements = async (req, res) =>{
    try {

        const find = await elemento.findAll();
        return res.status(200).send(find);

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.updateElements = async (req, res)=>{
    try{
        const {body,params} =req;
        
        if(!body) return res.status(400).send({message:'Los datos son requeridos para actualizar'});

        const validate = await elemento.findOne({
            where:{id: params.id}
        });

        if(!validate) return res.status(404).send({message:'No se encontró el elemento'});
        if(validate.statusDelete == true) return res.status(404).send({message:'No se encontró el elemento'});

        validate.nombre = body.nombre;
        validate.noAtomico = body.noAtomico;
        validate.simbolo = body.simbolo;
        validate.masa = body.masa;
        validate.imagen = body.imagen;
        validate.save();

        return res.status(200).send({message: 'Elemento se actualizó correctamente'})
    }catch (error){
        return res.status(500).send(message.error);
    }
}