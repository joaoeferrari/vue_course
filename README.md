![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)

Este repositório documenta minha jornada de aprendizado com o framework Vue.js. Ele contém o código-fonte de vários projetos desenvolvidos durante o curso, demonstrando a evolução desde os conceitos fundamentais com a **Options API** até a criação de aplicações modernas e bem estruturadas com a **Composition API**, Vite e Pinia.

## Projetos Contidos no Repositório

### 1. Lista de Tarefas (Assignments) - Fundamentos do Vue

Este foi o primeiro projeto completo, focado em solidificar os conceitos base do Vue.js.

* **Descrição:** Uma aplicação de lista de tarefas (`to-do list`) que permite adicionar novas tarefas e as separa dinamicamente em listas de "Em Progresso" e "Concluídas".
* **Estrutura:** Utiliza uma abordagem com arquivos `.html` individuais e módulos JavaScript, com o Vue sendo carregado via CDN. 
* **API Utilizada:** Escrito primariamente com a **Options API** (`data`, `computed`, `methods`).
* **Conceitos Aplicados:**
    * Renderização de Listas com `v-for`.
    * Renderização Condicional com `v-if`.
    * Ligação de Dados Bidirecional com `v-model` para o formulário.
    * Comunicação entre componentes através de `props` (para passar dados para baixo) e eventos (`$emit`) (para notificar o pai).
    * Uso de `slots` para compor componentes de forma flexível.

### 2. Dashboard de Times e Quiz - Estrutura Moderna

Este projeto representa a transição para um ecossistema de desenvolvimento Vue moderno, utilizando ferramentas de build e padrões de arquitetura atuais.

* **Descrição:** Um dashboard para visualização e gerenciamento de times e um sistema de Quiz interativo.
* **Estrutura:** Construído com **Vite**, o que proporciona um desenvolvimento rápido e otimizado. O projeto é um Single Page Application (SPA).
* **API Utilizada:** O código foi refatorado para a **Composition API** com a sintaxe `<script setup>`, que é mais concisa e poderosa.
* **Conceitos Aplicados:**
    * **Gerenciamento de Estado com Pinia:** Uso de stores (`defineStore`) para gerenciar o estado global da aplicação, com `state`, `actions` e `getters`.
    * **Vue Router:** Para criar uma Single Page Application com múltiplas páginas e navegação.
    * **Composables:** A lógica reutilizável, que antes estava em `mixins`, foi extraída para a pasta `composables` (ex: `useFormatters.js`, `useJobDispatch.js`), tornando o código mais limpo, explícito e fácil de manter.
    * **Componentes Assíncronos (`defineAsyncComponent`):** Utilizado para "lazy-load" de componentes, melhorando a performance inicial da aplicação.
    * **Teleport:** Usado para renderizar componentes de UI, como modais, fora da hierarquia do DOM principal, evitando problemas de estilo.
    * **Transition:** Para aplicar animações de entrada e saída em elementos, melhorando a experiência do usuário.

## Configuração do Ambiente de Desenvolvimento (Projetos com Vite)

Para executar os projetos mais modernos deste repositório:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/joaoeferrari/vue_course.git](https://github.com/joaoeferrari/vue_course.git)
    ```
2.  **Navegue para a pasta do projeto:**
    ```bash
    cd vue_course/team_dashboard 
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível no endereço local fornecido pelo terminal (geralmente `http://localhost:5173`).

---

Este repositório é um registro do meu progresso e aprendizado contínuo com o Vue.js e seu ecossistema.
