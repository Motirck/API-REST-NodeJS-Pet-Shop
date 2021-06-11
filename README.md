# API-REST-NodeJS-Pet-Shop
Criação de API REST utilizando NodeJS com Express e MySQL

### Comandos necessários
* npm init (criar o arquivo **package.json**)
* npm install express
* npm install --save-dev nodemon (nodemon fará com que o servidor "escute" qualquer alteração e recompile automaticamente o projeto e o "--save-dev" fará com que a lib exista apenas em ambiente de Dev)
* npm install consign (agrupa todas as rotas criadas dentro do app (index.js))






### Dicas
- Em package.json utilize o **start** dentro de **scripts** para informar qual o comando inicial será executado ao digitar **npm start**. Isso evita ter que digitar o caminho inteiro do projeto até o **index.js** toda vez que precisar de recompilação. Feito isso, podemos então instalar o pacote **nodemon** para automatizar o processo de compilação e toda vez que houver mudanças no projeto a recompilação será feita automaticamente pelo **nodemon**. Exemplo:

```json
"scripts": {
    "start": "nodemon index.js",
},
```
