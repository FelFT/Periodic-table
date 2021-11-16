const fs = require('fs');
const path = require('path');

exports.fileUpload = async function(file, namePath){
    try {
        let matches = file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let response = {};

        response.type=matches[1];
        response.data = Buffer.from(matches[2],'base64');
        let imageBuffer = response.data;

        if(!fs.existsSync('${path.dirname(require.main.filename)}/public${namePath}')){
            fs.mkdirSync('${path.dirname(require.main.filename)}/public${namePath}',true);
        }


    } catch (error) {
        
    }
}