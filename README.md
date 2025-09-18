
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)

This repository documents my learning journey with the Vue.js framework. It contains the source code for several projects developed during the course, demonstrating the evolution from fundamental concepts with the **Options API** to creating modern, well-structured applications with the **Composition API**, Vite, and Pinia.

## Projects in This Repository

### 1. Assignments (To-Do List) - Vue Fundamentals

This was the first complete project, focused on solidifying the core concepts of Vue.js.

* **Description:** A to-do list application that allows adding new tasks and dynamically separates them into "In Progress" and "Completed" lists.
* **Structure:** Uses an approach with individual `.html` files and JavaScript modules, with Vue being loaded via CDN. 
* **API Used:** Primarily written using the **Options API** (`data`, `computed`, `methods`).
* **Concepts Applied:**
    * List Rendering with `v-for`.
    * Conditional Rendering with `v-if`.
    * Two-Way Data Binding with `v-model` for the form.
    * Component communication via `props` (to pass data down) and events (`$emit`) (to notify the parent).
    * Using `slots` to compose components flexibly.

### 2. Team Dashboard & Quiz - Modern Structure

This project represents the transition to a modern Vue development ecosystem, using current build tools and architectural patterns. 

* **Description:** A dashboard for visualizing and managing teams and an interactive Quiz system.
* **Structure:** Built with **Vite**, which provides a fast and optimized development experience. The project is a Single Page Application (SPA).
* **API Used:** The code was refactored to the **Composition API** using the `<script setup>` syntax, which is more concise and powerful.
* **Concepts Applied:**
    * **State Management with Pinia:** Use of stores (`defineStore`) to manage the application's global state, with `state`, `actions`, and `getters`.
    * **Vue Router:** To create a Single Page Application with multiple pages and navigation.
    * **Composables:** Reusable logic, which was previously in `mixins`, was extracted into the `composables` folder (e.g., `useFormatters.js`, `useJobDispatch.js`), making the code cleaner, more explicit, and easier to maintain.
    * **Async Components (`defineAsyncComponent`):** Used to "lazy-load" components, improving the application's initial performance.
    * **Teleport:** Used to render UI components, like modals, outside the main DOM hierarchy, avoiding styling issues.
    * **Transition:** To apply enter and leave animations on elements, improving the user experience.

## Development Environment Setup (Vite Projects)

To run the more modern projects in this repository:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/joaoeferrari/vue_course.git](https://github.com/joaoeferrari/vue_course.git)
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd vue_course/team_dashboard 
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at the local address provided by the terminal (usually `http://localhost:5173`).

---

**Reference**: https://laracasts.com/series/learn-vue-3-step-by-step

This repository is a record of my progress and continuous learning with Vue.js and its ecosystem.
