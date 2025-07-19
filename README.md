# Automação de Testes do Portfólio | Joelma Ferreira

<p align="center">
  <a href="#-versão-em-português-br">Português 🇧🇷</a> | 
  <a href="#-english-version-us">English 🇺🇸</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Cypress-v14.x-brightgreen?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress">
  <img src="https://img.shields.io/badge/Report-Allure-orange?style=for-the-badge&logo=allure&logoColor=white" alt="Allure Report">
  <img src="https://img.shields.io/badge/A11y-cypress--axe-blueviolet?style=for-the-badge" alt="Accessibility Testing">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License MIT">
</p>

---

## 🇧🇷 Versão em Português 🇧🇷

Este repositório contém a suíte de testes de ponta a ponta (E2E) desenvolvida com **Cypress** para validar o [Portfólio Profissional de Joelma Ferreira](https://github.com/joelmaferreira/portfolio).

A automação cobre funcionalidades essenciais, comportamento responsivo e critérios de acessibilidade digital com o uso de `cypress-axe`, garantindo que a experiência do usuário final se mantenha funcional, inclusiva e confiável.

### ✨ Funcionalidades Testadas

* **🎨 Tema Dinâmico:** Validação do modo claro e escuro.
* **🌐 Internacionalização (i18n):** Troca de idiomas e renderização correta.
* **🧭 Navegação:** Integridade dos links internos e carregamento das seções.
* **📁 Projetos:** Verificação de exibição, títulos e links dos cards.
* **📨 Formulário de Contato:** 
  * Envio bem-sucedido (happy path).
  * Mensagens de erro (e-mail inválido, campos obrigatórios).
* **📱 Responsividade:** Testes em dispositivos móveis (menu hambúrguer e layout).
* **♿ Acessibilidade Digital:** Análises automatizadas via `cypress-axe`, focadas em violações `critical` e `serious` da WCAG.

### 🛠️ Tecnologias Utilizadas

* **Cypress** (v14+)
* **JavaScript**
* **Page Object Model (POM)**
* **Allure Report**
* **cypress-axe**
* **npm**

### 📂 Estrutura do Projeto

```
/portfolio-automacao
├── allure-report/         # Relatórios HTML gerados
├── allure-results/        # Resultados brutos
├── cypress/
│   ├── e2e/               # Casos de teste
│   ├── fixtures/          # Massa de dados
│   ├── page/              # Page Objects
│   └── support/           # Comandos customizados e plugins
├── cypress.config.js      # Configuração global
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

### 🚀 Como Executar Localmente

1. Clone este repositório:
    ```bash
    git clone https://github.com/joelmaferreira/portfolio-automacao.git
    ```
2. Acesse a pasta:
    ```bash
    cd portfolio-automacao
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

### ▶️ Execução dos Testes

* **Modo interativo (UI do Cypress):**
    ```bash
    npm run cy:open
    ```

* **Modo headless (ideal para CI):**
    ```bash
    npm run test
    ```

### 📊 Geração de Relatórios com Allure

```bash
npm run test:allure         # Executa os testes e gera os resultados
npm run report:allure       # Gera o HTML
npm run report:open         # Abre no navegador
```

---

## 🙋 Sobre a Autora

**Joelma de Oliveira Prestes Ferreira**  
Líder de Engenharia de Qualidade apaixonada por automação de testes, acessibilidade digital e entrega contínua com excelência.

🔗 [LinkedIn](https://www.linkedin.com/in/joprestes84/)  
🔗 [GitHub](https://github.com/joelmaferreira)  
✍️ [Medium](https://medium.com/@joprestes)  
📧 joprestes@hotmail.com

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

*(Uma tradução não-oficial está disponível em [LICENSE.pt-BR.md](LICENSE.pt-BR.md).)*

## 🇺🇸 English Version 🇺🇸

This repository contains the Cypress E2E test suite for the [Joelma Ferreira’s Portfolio](https://github.com/joelmaferreira/portfolio), covering functional flows, responsiveness, and accessibility (a11y) compliance via `cypress-axe`.

### ✨ Key Test Areas

* Theme switching (light/dark)
* Language toggle (i18n)
* Navigation and internal links
* Project cards visibility and link validation
* Contact form (valid and invalid submissions)
* Mobile responsiveness
* WCAG accessibility with cypress-axe

### ▶️ Running Tests

```bash
npm install
npm run test:allure
npm run report:open
```

---

🔗 [LinkedIn](https://www.linkedin.com/in/joprestes84/) | [GitHub](https://github.com/joelmaferreira) | [Medium](https://medium.com/@joprestes)
