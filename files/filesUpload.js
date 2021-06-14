const fs = require('fs'); // FileSystem

fs.createReadStream('./assets/skye.jpg')
    .pipe(fs.createWriteStream('./assets/skye-stream.jpg')) // Transforma a Stream de leitura em Stream de escrita
    .on('finish', () => console.log('Imagem escrita com sucesso')) // Observador que dispara assim q o evento 'finish' for chamado