const fs = require('fs'); // FileSystem (nativo do Nodejs)
const path = require('path'); // (nativo do Nodejs)

module.exports = (filePath, fileName, callBackCreatedImage) => {

    const allowedExtensions = ['jpg', 'png', 'jpeg'];
    const mimeType = path.extname(filePath);
    const isValidType = allowedExtensions.indexOf(mimeType.substring(1)) !== -1;

    if (!isValidType) {
        const error = 'Extensão de arquivo não permitida.';
        callBackCreatedImage(error);
    }
    else {
        const fullPath = `./assets/images/${fileName}${mimeType}`;

        fs.createReadStream('./assets/skye.jpg')
            .pipe(fs.createWriteStream(fullPath)) // Transforma a Stream de leitura em Stream de escrita
            .on('finish', () => callBackCreatedImage(false, fullPath)) // Observador que dispara assim q o evento 'finish' for chamado
    }

}