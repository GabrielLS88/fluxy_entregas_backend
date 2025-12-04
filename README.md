# Fluxy Entregas Back End

Esse back end foi criado para entregar dados e cadastras novos e atualizar, feito com node + express e usando MongoDB para armazenamento de dados e toda a aplicação foi criada com JavaScript.

## Tecnologias Utilizadas

- **NodeJS**
- **Express**
- **MongoDB**

## Estrutura do projeto

- Temos a pasta src que contem config ( Conexão com o DB ), controllers ( Toda a funcionalidades do back-end se encontra ), models ( Onde fica nossas clases ), routes ( As rotas de cada api ) e app.js as configurações de dar o start ma aplicação.

## Como rodar o projeto?

Você pode clonr o repositorio no link abaixo:
https://github.com/GabrielLS88/fluxy_entregas_backend

Apos isso e necessario criar o arquivo .env na pasta raiz do projeto com as seguintes variaveis de ambiente:

PORT=5090 -> Porta que deseja rodar a aplicação ( Necessario manter para o front end continuar conectando )

MONGODB_URI="mongodb://mongo:2505@147.79.110.10:5095/" -> URL de conexão do seu banco de dados 

Apos isso basta dar o comando "npm i" para instalar as dependencias do projeto.

Depois "npm run dev" para iniciar o projeto que vai rodar na "http://localhost:5090"