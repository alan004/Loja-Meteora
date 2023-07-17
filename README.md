# Loja Meteora

Mais um challenge de Front-End concluído!! Esse foi bem divertido de criar e como terminei antes da hora, resolvi incluir também um painel de gerenciamento da loja para edição dos produtos.

> Caso queira apenas dar uma olhada, utilize a página [Loja Meteora no Github Pages](https://alan004.github.io/Loja-Meteora/). Ah, como a página administrativa não estava no escopo inicial do projeto, ela ainda não está responsiva no celular, ok? \
> Se quiser contribuir, siga as instruções em [Como rodar o projeto](#como-rodar-o-projeto). Vou ficar feliz com as sugestões!

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Loja Meteora**
| :label: Tecnologias | html, css, javascript
| :rocket: URL         | https://alan004.github.io/Loja-Meteora
| :fire: Desafio     | [Link do figma](https://www.figma.com/file/2TLgt8UjsWUViWlmpXu5Fz/Challenge-Front-end-%7C-Loja-Meteora?type=design&node-id=2386%3A2430&mode=design&t=hxiSpPCp8HDXwSBQ-1)

<!-- Inserir imagem com a #vitrinedev ao final do link -->
<!--![AdopetcAPA](https://user-images.githubusercontent.com/17684918/209195984-a3c4e20b-4f3a-4778-b5b4-3e17556a0480.png#vitrinedev)-->
![MeteoraCapa](https://user-images.githubusercontent.com/17684918/253834312-cdda2140-3232-4913-8e4c-9fa09ace4fb7.png#vitrinedev)

## Detalhes do projeto

> Status do Projeto: Versão 1.0 entregue  🫡  

A estrutura do projeto é feita em HTML e CSS, sem a utilização de framework. Diria que da estrutura, as partes mais legais de customizar foram a grade de produtos e o modal "ver mais", que foram bem satisfatórios de olhar quando concluídos. 
Depois de finalizar o projeto base, resolvi criar também uma página para administração do site, fazendo o CRUD completo.

### Javascript
Utilizando JS e simulando uma API, os produtos exibidos em tela são gerados dinâmicamente, permitindo fácil gerenciamento da loja. Nesse primeiro momento não é utilizado um sistema de login, já que o foco do estudo é apenas nos produtos em si (tanto que o painel ADM pode ser acessado por qualquer usuário a partir da página inicial). 

Como disse anteriormente, além da entrega do projeto base, inseri um painel administrativo, onde é possível criar, editar e excluir produtos. Nessa parte de edição e criação, alguns campos tiveram de ser tratados de maneira especial: tamanhos e cores, que precisam ter cada valor lido individualmente; e o preço, que precisa estar no formato correto para exibição.\
Para tratar o primeiro ponto, foi preciso "quebrar" o valor lido do formulário e ler os valores separados pela vígula. Já para tratar do segundo, utilizei o jquery-maskmoney do [Diego Plentz](https://github.com/plentz/jquery-maskmoney), assim o valor estará sempre com o "R$" no início.

### Funções disponíveis
- Responsividade na tela inicial
- Exibição dinâmica de produtos;
- Filtro por categoria;
- Botão pesquisar;
- Painel administrativo: criação, edição e exclusão de produtos;
- Cadastro de email: emails válidos são armazenados no db.json.

## Como rodar o projeto
Depois de clonar o repositório, instale o JSON server usando \
`npm install json-server` \
E o browser-sync usando \
`npm install -g browser-sync` \
NOTA: se você utilizar a extensão LIVE SERVER no seu VSCode não é necessário intalar o browser-sync

Após isso, é possível rodar nosso db.json pelo JSON server\
`json-server --watch db.json` 

E então rodar o projeto utilizando o Browsersync:\
`browser-sync start --server --file . --host --port 5000 --startPath index.html`
