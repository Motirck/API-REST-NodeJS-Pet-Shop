# API-REST-NodeJS-Pet-Shop
Criação de API REST utilizando NodeJS com Express e MySQL

### Comandos necessários
* npm init (criar o arquivo **package.json**)
* npm install express
* npm install --save-dev nodemon (nodemon fará com que o servidor "escute" qualquer alteração e recompile automaticamente o projeto e o "--save-dev" fará com que a lib exista apenas em ambiente de Dev)
* npm install consign (agrupa todas as rotas criadas dentro do app (index.js))
* npm install mysql (instala o mysql como banco de dados)
* npm install moment (instala a biblioteca moment para trabalhar com datas)




### Dicas
- Em package.json utilize o **start** dentro de **scripts** para informar qual o comando inicial será executado ao digitar **npm start**. Isso evita ter que digitar o caminho inteiro do projeto até o **index.js** toda vez que precisar de recompilação. Feito isso, podemos então instalar o pacote **nodemon** para automatizar o processo de compilação e toda vez que houver mudanças no projeto a recompilação será feita automaticamente pelo **nodemon**. Exemplo:

```json
"scripts": {
    "start": "nodemon index.js",
},
```
- Para conferir o significado de todos os status HTTP acesse: https://httpstatuses.com/

### Banco MySQL
- Faça a instalação do MySQL Community (Gratuito)
- Escolha a opção de instalção **custom** e escolha a ultima versão do **MySQL Server** e **MySQL Workbench**
- Password: Admin123$&
- Crie uma nova conexão do MySQL (agenda-petshop)
- No Workbench crie um novo schema para criação do novo banco de dados (agenda-petshop)