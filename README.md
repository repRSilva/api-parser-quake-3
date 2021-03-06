<h1 align="center">Api parser de arquivo de log do game QUAKE III para formato JSON, agrupado por partida.</h1>

## 📝 **Sobre**
Essa aplicação consiste no processamento de um arquivo .log do jogo Quake III, transformando-o e agrupando os eventos do game em um arquivo JSON.
A solução proposta, é realizar a leitura linha a linha do arquivo de log, identificando o tipo de evento e a partir disso encaminhar para funções específicas
que realizam o tratamento da informação e as agrupam de acordo com seu tipo. Fazendo o controle de criação de um novo game, adição de player no game, adição de kills
por player no game, subtração de kills realizadas pelo game.

## 🔨 **Tecnologias Utilizadas**

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Sonarqube](https://docs.sonarqube.org/)

## 📚 **Requisitos para rodar o ambiente**
- NodeJS 12.18.2


## 🚀 **Começando**

- Instalando ou atualizando o nvm siga a documentação de acordo com seu sistema operacional, encontrada [repositório oficial do NVM](https://github.com/nvm-sh/nvm#installing-and-updating).

  Aguarde a instalação terminar antes de prosseguir.

  E depois:
  ```bash
    nvm use 12.18.2
  ```
  Esses comandos vão fazer seu computador baixar o Node.js na sua útima versão LTS (que é a atual versão LTS, mas você pode checar por mudanças no [site oficial do NodeJS](https://nodejs.org/en/)) e usar ela.

- Clone o projeto do repositório com o comando abaixo
```sh
$ git clone https://github.com/repRSilva/api-parser-quake-3.git
```

- Instale as dependências na pasta do projeto
```sh
$ yarn install
```

- Executar aplicação em modo produção
```sh
$ yarn start
```

- Executar aplicação em modo desenvolvimento com live reload
```sh
$ yarn dev
```

- Executar testes da aplicação
```sh
$ yarn test
```

- Executar o sonarqube na aplicação - Para configurar acesse a documentação do [sonarqube](https://docs.sonarqube.org/)
```sh
$ yarn sonar
```

## ⚙️ **Obtendo os resultados**
- Com o ambiente funcionando, você terá duas opções de resultado:
  - Listagem geral, ou seja, de todos os games que estão disponíveis;
    ```sh
    $ http://localhost:3000/games/list/all
    ```
  - Listagem filtrada pelo nome do game, ou seja, de todos os dados de um game específico.
    ```sh
    $ http://localhost:3000/games/list/name/?name="nome_do_game"
    ```


Desenvolvido por [Rafael Silva](https://github.com/repRSilva/) ;D

