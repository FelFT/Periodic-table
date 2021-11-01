let elements = [];

exports.createElements = async(req, res)=>{
    try {
        const { body } = req;

        console.log('\n THIS IS THE BODY',body);

        const data = {
            id: body.id,
            name: body.name,
            type: body.type
        }
        elements.push(...data);

        return res.status(201).send({message:"Comunidad creada correctamente"});

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.getElements = async (req, res) =>{
    try {
        return res.status(200).send({elements});
    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.updateElements = async (req, res)=>{
    try{
        const {body,params} =req.params;
        const update = elements.find(id);

        const data={
        }

    }catch (error){

    }
}