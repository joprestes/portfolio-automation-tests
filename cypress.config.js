const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://joprestes.github.io/portfolio/",

    viewportWidth: 1440,
    viewportHeight: 900,
    
    setupNodeEvents(on, config) {
      // Implemente os ouvintes de eventos do nó aqui
      allureWriter(on, config); // Linha chave para ativar o Allure
      return config;
    },
    // Adicione esta variável de ambiente para habilitar o Allure
    env: {
      allure: true
    }
  },
});
