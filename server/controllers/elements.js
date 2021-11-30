const db =  require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const fileUpload = require('../utils/uploadImages');

const elemento = db.elemento;
const estado = db.estado;
const grupo = db.grupo;
const periodo = db.periodo;
const tipo = db.tipo; 

exports.createElements = async(req, res)=>{
    try {
        const { body } = req;

        if(!body.nombre) return res.status(404).send({message:'nombre es requerido'});
        if(!body.noAtomico) return res.status(404).send({message:'noAtomico es requerido'});
        if(!body.simbolo) return res.status(404).send({message:'simbolo es requerido'});
        if(!body.masa) return res.status(404).send({message:'masa es requerido'});
        if(!body.imagen) return res.status(404).send({message:'imagen es requerido'});
        if(!body.estadoId) return res.status(404).send({message:'estadoId es requerido'});
        if(!body.grupoId) return res.status(404).send({message:'grupoId es requerido'});
        if(!body.periodoId) return res.status(404).send({message:'periodoId es requerido'});
        if(!body.tipoId) return res.status(404).send({message:'tipoId es requerido'});

        const findEstado = await estado.findOne({
            where: {id: body.estadoId, statusDelete: false},
        });
        const findGrupo = await grupo.findOne({
            where: {id: body.grupoId, statusDelete: false},
        });
        const findPeriodo = await periodo.findOne({
            where: {id: body.periodoId, statusDelete: false},
        });
        const findTipo = await tipo.findOne({
            where: {id: body.tipoId, statusDelete: false},
        });

        let imagen = await fileUpload.fileUpload(body.imagen,'/imagen');

        if(!findEstado) return res.status(404).send({message: 'Estado no encontrado'});
        if(!findGrupo) return res.status(404).send({message: 'Grupo no encontrado'});
        if(!findPeriodo) return res.status(404).send({message: 'Periodo no encontrado'});
        if(!findTipo) return res.status(404).send({message: 'Tipo no encontrado'});


        const create = await elemento.create({
            nombre: body.nombre,
            noAtomico: body.noAtomico,
            simbolo: body.simbolo,
            masa: body.masa,
            imagen: imagen,
            estadoId: body.estadoId,
            grupoId : body.grupoId,
            periodoId: body.periodoId,
            tipoId: body.tipoId,
        })

        return res.status(201).send({message:"Elemento creado correctamente"});

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.getElements = async (req, res) =>{
    try {
        const {estadoNombre}=req.query;
        const {grupoNombre}=req.query;
        const {periodoNombre}=req.query;
        const {tipoNombre}=req.query;

        if(estadoNombre){
            const find = await elemento.findAll({
                where:{statusDelete: false},
                include: {
                    model:estado,
                    where:{nombre:{[Op.iRegexp]:estadoNombre} }
                },
            });
            return res.status(200).send(find);
        }

        if(grupoNombre){
            const find = await elemento.findAll({
                where:{statusDelete: false},
                include: {
                    model:grupo,
                    where:{nombre:{[Op.iRegexp]:grupoNombre} }
                },
            });
            return res.status(200).send(find);
        }

        if(periodoNombre){
            const find = await elemento.findAll({
                where:{statusDelete: false},
                include: {
                    model:estado,
                    where:{nombre:{[Op.iRegexp]:periodoNombre} }
                },
            });
            return res.status(200).send(find);
        }

        if(tipoNombre){
            const find = await elemento.findAll({
                where:{statusDelete: false},
                include: {
                    model:estado,
                    where:{nombre:{[Op.iRegexp]:tipoNombre} }
                },
            });
            return res.status(200).send(find);
        }

        const find = await elemento.findAll({
            where:{statusDelete:false}
        });
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

exports.deleteElement=async(req,res)=>{
    try {
        const {id}=req.params;

        const find = await elemento.findByPk(id);
        
        if (!find) return res.status(404).send({message: 'No se econtró elemento'});
        if(find.statusDelete == true) return res.status(404).send({message:'No se encontró el elemento'});

        find.statusDelete = true;
        find.save();

        return res.status(500).send({message:'Elemento eliminado correctamente'});
    } catch (error) {
        
    }

};