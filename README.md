# ⚛️ Estudando React + TypeScript

Repositório criado para acompanhar minha jornada de estudos em **React** e **TypeScript**, registrando a evolução prática durante um curso de desenvolvimento Front-End.

A proposta deste repositório é manter cada etapa do aprendizado organizada, permitindo acompanhar os conceitos estudados, os projetos desenvolvidos e a evolução do código ao longo do tempo.

> 🚧 **Status:** Em desenvolvimento — novos conteúdos e projetos serão adicionados conforme o avanço dos estudos.

---

## 🎯 Objetivo

O objetivo deste repositório é servir como um **diário prático de aprendizagem**, onde cada projeto representa uma etapa do processo de aprendizado de React e TypeScript.

Além de armazenar os projetos desenvolvidos durante o curso, o repositório também permite acompanhar minha evolução através dos commits realizados ao longo do desenvolvimento.

---

## 📚 Projetos

Atualmente, o repositório contém os seguintes projetos:

### 🪄 Magic React

Projeto desenvolvido durante os estudos iniciais de React.

O projeto trabalha conceitos fundamentais da biblioteca, incluindo:

* Componentização
* Props
* Estado com `useState`
* Organização de componentes
* Estrutura de projetos React
* TypeScript com React
* Renderização de componentes
* Organização de arquivos

A aplicação possui componentes como `Header`, `Conteudo` e `Project`, além de uma estrutura de conteúdo e rodapé.

📁 Diretório:

```text
magic-react/
```

### 📝 Tarefas

Aplicação de gerenciamento de tarefas desenvolvida para colocar em prática conceitos mais avançados de React.

Atualmente, o projeto possui uma estrutura composta por:

* Formulário para tarefas
* Lista de tarefas
* Barra lateral de navegação
* Tarefas completas
* Tarefas favoritas
* Navegação entre páginas
* Componentização
* React Router
* Ícones do Material UI

A aplicação possui rotas para:

```text
/             → Todas as tarefas
/completas    → Tarefas completas
/favoritas    → Tarefas favoritas
```

A navegação é implementada utilizando `react-router-dom`.

📁 Diretório:

```text
tarefas/
```

---

## 🛠️ Tecnologias

### Principal

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)

### Ferramentas e bibliotecas

* **React**
* **TypeScript**
* **Vite**
* **ESLint**
* **React DOM**
* **React Router DOM**
* **Material UI Icons**
* **Emotion**
* **React Compiler**

As versões e dependências são definidas individualmente em cada projeto através de seus respectivos `package.json`.

---

## 📂 Estrutura do Repositório

```text
Estudando-React/
│
├── magic-react/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── README.md
│
├── tarefas/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── README.md
│
└── README.md
```

---

## 🚀 Como executar

Como cada projeto possui seu próprio `package.json`, eles podem ser executados individualmente.

### 1. Clone o repositório

```bash
git clone https://github.com/Math-aMalafaia/Estudando-React.git
```

Entre no diretório:

```bash
cd Estudando-React
```

---

### 2. Execute o Magic React

Entre na pasta:

```bash
cd magic-react
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento.

---

### 3. Execute o projeto Tarefas

Volte para a raiz:

```bash
cd ..
```

Entre na pasta:

```bash
cd tarefas
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

---

## 📜 Scripts disponíveis

Os projetos utilizam scripts padrão do Vite.

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

### Build

```bash
npm run build
```

Compila o projeto para produção.

### Lint

```bash
npm run lint
```

Executa a análise de código utilizando ESLint.

### Preview

```bash
npm run preview
```

Executa uma prévia da versão de produção.

Esses scripts estão definidos nos `package.json` dos projetos.

---

## 🧠 Conceitos estudados

Este repositório está sendo utilizado para praticar conceitos importantes do ecossistema React, incluindo:

* [x] Estrutura de uma aplicação React
* [x] Componentes
* [x] JSX / TSX
* [x] TypeScript
* [x] Props
* [x] Estado
* [x] `useState`
* [x] Componentização
* [x] Organização de projetos
* [x] React Router
* [x] Rotas
* [x] Navegação entre páginas
* [x] Integração de bibliotecas externas
* [ ] Hooks avançados
* [ ] Context API
* [ ] Consumo de APIs
* [ ] Gerenciamento de estado
* [ ] Autenticação
* [ ] Integração com Back-End
* [ ] Testes
* [ ] Deploy

> A lista será atualizada conforme novos conceitos forem estudados.

---

## 📈 Progresso

O repositório está sendo construído gradualmente durante o curso.

Cada novo projeto representa uma etapa do aprendizado e pode conter seus próprios componentes, dependências e experimentos.

```text
React + TypeScript
        │
        ▼
   Fundamentos
        │
        ▼
 Componentização
        │
        ▼
    useState
        │
        ▼
    Projetos
        │
        ▼
 React Router
        │
        ▼
      APIs
        │
        ▼
 Gerenciamento
   de Estado
        │
        ▼
   Projetos
  mais completos
```

---

## 🔄 Organização dos commits

Os commits são utilizados para registrar a evolução dos estudos.

A ideia é que cada etapa importante do curso seja registrada no Git, permitindo acompanhar:

* O que foi estudado;
* O que foi implementado;
* Alterações realizadas;
* Correções de erros;
* Evolução dos projetos.

Atualmente, o repositório possui **24 commits** na branch `main`.

---

## 🎓 Sobre este repositório

Este não é um projeto finalizado.

Ele representa um **processo de aprendizagem**.

Por isso, alguns códigos podem apresentar experimentações, mudanças de abordagem, erros corrigidos posteriormente e diferentes formas de implementar determinado recurso.

A intenção é justamente registrar essa evolução e transformar o repositório em uma espécie de histórico do aprendizado de React e TypeScript.

---

## 👨‍💻 Autor

**Math-aMalafaia**

Estudante de **Análise e Desenvolvimento de Sistemas**, atualmente aprofundando os conhecimentos em desenvolvimento Front-End, com foco em:

* React
* TypeScript
* JavaScript
* Desenvolvimento Web
* APIs
* Git e GitHub

---

## 🔗 Repositório

[![GitHub](https://img.shields.io/badge/GitHub-Estudando--React-181717?style=for-the-badge\&logo=github)](https://github.com/Math-aMalafaia/Estudando-React)

**Repositório:**
https://github.com/Math-aMalafaia/Estudando-React

---

⭐ Este repositório está em constante evolução conforme novos conhecimentos são adquiridos durante os estudos.
