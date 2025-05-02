# efood

Projeto de e-commerce para delivery de comida desenvolvido como exercício do curso de Frontend da EBAC.

## Descrição

O efood é uma plataforma de delivery que permite aos usuários:
- Visualizar restaurantes disponíveis
- Acessar cardápios específicos de cada restaurante
- Visualizar pratos e suas descrições
- Interface responsiva e moderna

## Tecnologias Utilizadas

- React
- TypeScript
- Styled Components
- React Router DOM
- Vite

## Pré-requisitos

- Node.js
- npm ou yarn

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/rafaelscdev/efood.git
```

2. Acesse a pasta do projeto
```bash
cd efood
```

3. Instale as dependências
```bash
npm install
```

4. Execute o projeto
```bash
npm run dev
```

## Estrutura do Projeto

```
src/
  ├── assets/         # Imagens e recursos estáticos
  ├── components/     # Componentes reutilizáveis
  │   ├── Header/
  │   ├── Footer/
  │   ├── RestaurantCard/
  │   └── ProductCard/
  ├── pages/         # Páginas da aplicação
  │   ├── Home/
  │   └── Restaurant/
  ├── styles/        # Estilos globais
  └── types/         # Tipos TypeScript
```

## Funcionalidades

- Lista de restaurantes na página inicial
- Página individual para cada restaurante
- Cards de produtos
- Navegação entre páginas
- Layout responsivo
- Componentes reutilizáveis
- Estilização com Styled Components

## Layout

O layout do projeto foi baseado no [design do Figma](https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood)

## Desenvolvimento

O projeto foi desenvolvido utilizando as seguintes práticas:
- Componentização
- Tipagem forte com TypeScript
- Estilização modular com Styled Components
- Roteamento com React Router DOM
- Versionamento com Git
