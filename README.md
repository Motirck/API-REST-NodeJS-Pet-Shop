# API-REST-NodeJS-Pet-Shop
Criação de API REST utilizando NodeJS com Express e MySQL

### Comandos necessários
> npm init (criar o arquivo **package.json**)

> npm install express

> npm install --save-dev nodemon (nodemon fará com que o servidor "escute" qualquer alteração e recompile automaticamente o projeto e o "--save-dev" fará com que a lib exista apenas em ambiente de Dev)

> npm install consign (agrupa todas as rotas criadas dentro do app (index.js))

> npm install mysql (instala o mysql como banco de dados)

> npm install moment (instala a biblioteca moment para trabalhar com datas)

> npm install (executar dentro do caminho da API dentro dessa API chamada Services) e logo após **node clients.js** para executar essa API

### Dicas
- Em package.json utilize o **start** dentro de **scripts** para informar qual o comando inicial será executado ao digitar **npm start**. Isso evita ter que digitar o caminho inteiro do projeto até o **index.js** toda vez que precisar de recompilação. Feito isso, podemos então instalar o pacote **nodemon** para automatizar o processo de compilação e toda vez que houver mudanças no projeto a recompilação será feita automaticamente pelo **nodemon**. Exemplo:

```json
"scripts": {
    "start": "nodemon index.js",
},
```
- Para conferir o significado de todos os status HTTP acesse: https://httpstatuses.com/

### Como debugar o Nodejs através do VSCode?
1) Instale o Nodemon conforme as orientações acima
2) Adicione a configuração de launch.json clicando no ícone de Debug do VSCode e logo após no ícone de engrenagem
3) Clique no botão **Add Configuration** e escolha **{} Node.js: Attach**
4) Altere o **package.json** e adcione o **--inspect** ao comando de start dos cripts. Exemplo:

```json
"scripts": {
    "start:dev": "nodemon --inspect index.js",
    "start": "node index.js"
  },
```

5) Para executar o node via terminal execute o comando: **npm run start:dev**
6) Pronto! Basta adicionar os break points no arquivo desejado e disparar uma requisição.

### Banco MySQL
- Faça a instalação do MySQL Community (Gratuito)
- Escolha a opção de instalção **custom** e escolha a ultima versão do **MySQL Server** e **MySQL Workbench**
- Password: Admin123$&
- Crie uma nova conexão do MySQL (agenda-petshop)
- No Workbench crie um novo schema para criação do novo banco de dados (agenda-petshop)

### Como testar essa API?
- Dentro da pasta chamada **insomnia** existe um json que pode ser importado pelo Insomnia e que já contém todas as rotas e configurações necessárias para os testes dos endpoints
