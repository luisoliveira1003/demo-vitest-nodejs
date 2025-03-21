# Demo Vitest Node.js

Este projeto é uma demonstração prática de uma API simples construída com Node.js e Express, com testes automatizados utilizando Vitest e Supertest. O objetivo é demonstrar boas práticas de desenvolvimento, separação de responsabilidades e integração contínua (CI) em projetos Node.js.

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Testes](#testes)
- [Integração Contínua](#integração-contínua)
- [Licença](#licença)

## Visão Geral

O projeto consiste em uma API que expõe um endpoint para validar URLs curtas. A validação é feita por uma função que verifica se a URL possui, no máximo, 10 caracteres e se contém apenas letras, números, traços ou underscores.

Para demonstrar boas práticas, a aplicação foi dividida em duas camadas:

- **Configuração do App:** O arquivo `src/app.js` contém toda a configuração do Express (rotas, middlewares, etc.) sem iniciar o servidor.
- **Inicialização do Servidor:** O arquivo `src/server.js` importa o app e inicia o servidor utilizando `app.listen()`. Isso facilita os testes, permitindo que o app seja importado sem iniciar o servidor.

## Funcionalidades

- **Validação de URL curta:**  
  A função `validateShortURL` verifica se a URL atende aos critérios (máximo 10 caracteres e apenas caracteres válidos).

- **Endpoint de validação:**  
  Rota POST `/validate-url` que recebe uma URL no corpo da requisição e retorna:

  - `200` com `{ valid: true }` se a URL for válida.
  - `400` com `{ valid: false }` se a URL for inválida.

- **Testes Automatizados:**  
  São realizados testes unitários, de integração e E2E utilizando Vitest e Supertest.

## Tecnologias Utilizadas

- **Node.js (v18+)**
- **Express:** Framework web para Node.js.
- **Vitest:** Ferramenta de testes moderna e rápida.
- **Supertest:** Biblioteca para testes de endpoints HTTP.
- **GitHub Actions:** Para integração contínua, realizando build e execução dos testes.

## Estrutura do Projeto

```markdown
demo-vitest-nodejs/
├── src/
│ ├── app.js # Configuração da aplicação Express (rotas, middlewares)
│ ├── server.js # Inicialização do servidor (usa o app do app.js)
│ └── urlValidator.js # Função para validação das URLs
├── tests/
│ ├── urlValidator/
│ │ ├── e2e.test.js # Testes ponta a ponta (E2E) para o validador de URLs
│ │ ├── integration.test.js# Testes de integração para o validador de URLs
│ │ └── unit.test.js # Testes unitários para o validador de URLs
│ ├── app.test.js # Testes de integração/E2E para o app (sem iniciar o servidor)
│ └── server.test.js # Testes que iniciam o servidor e validam os endpoints
├── .github/
│ └── workflows/
│ └── build-test.yml # Workflow do GitHub Actions para build e testes
├── package.json # Configurações do projeto e scripts
└── README.md # Documentação do projeto
```

## Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/luisoliveira1003/demo-vitest-nodejs.git
   cd demo-vitest-nodejs
   ```

2. **Instale as dependências:**

   ```bash
   npm ci
   ```

## Executando o Projeto

### Build e Inicialização

Como não há um processo de build real (como transpilar ou empacotar o código), o script de build foi configurado para finalizar imediatamente com uma mensagem. Em ambiente de desenvolvimento/produção, use:

```bash
npm run start
```

_Observação:_ No exemplo, o script `start` está configurado para rodar `node src/server.js`.

### Executando os Testes

- **Rodar todos os testes:**

```bash
npm test
```

- **Rodar testes com cobertura:**

```bash
npm run test:coverage
```

- **Rodar testes em modo watch:**

```bash
npm run test:watch
```

## Integração Contínua

O projeto possui um workflow configurado com GitHub Actions (`.github/workflows/build-test.yml`) que realiza as seguintes etapas:

- Checkout do código
- Instalação do Node.js
- Instalação das dependências com `npm ci`
- Execução do script de build (atualize o script conforme a necessidade do seu ambiente)
- Execução dos testes com Vitest e geração do relatório de cobertura

## Licença

Este projeto está licenciado sob a [LICENÇA MIT](LICENSE) – veja o arquivo de licença para mais detalhes.
