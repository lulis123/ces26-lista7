<img alt="ITA" title="#front-vestibulinho-casd" src="https://logodownload.org/wp-content/uploads/2018/01/ita-logo.png" width="500px" />

# [CES-26] Lista 7
Resolução da lista 7 de CES-26: Desenvolvimento web\
Aluno: Luís Eduardo Martins Lauro\
ITA, COMP-21\
Código no snack: https://snack.expo.io/@luisedumlg/lista7

# Primeira utilização
### Clone o repositório front-end
$ git clone https://github.com/lulis123/ces26-lista6
### Entre no repositório
$ cd ces26-lista7
### Instale o módulo
$ npm install
### Rodar a API
$ npm start

# Padrão de pastas
- Public: pasta que contém tudo que é acessado pelo client-side da aplicação: index.html e a aplicação AJAX no script.js (front-end).
- src: pasta onde fica o código em React que será renderizado no index.html
  - components: pasta onde estão as os componentes para a calculadora (calculator display e calculator button)
  - actions.js: arquivo com a definição das actions para o redux
  - reducers.js: arquivo com os reducers para o o redux
  - App.js: aplciatiov principal da calculadora, que é renderizado dentro do index.html
