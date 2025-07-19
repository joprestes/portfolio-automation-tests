


import el from './home_elements';

class HomePage {

    // --- MÉTODOS GETTER PARA O TESTE MOBILE  ---
    getHamburgerMenu() {
        return cy.get(el.header.hamburgerMenu);
    }

    getMobileNavContainer() {
        return cy.get(el.header.mobileNavContainer);
    }

    // --- Ações e Navegação Geral ---
    clickNavLink(linkName) {
        cy.get(el.header.navLinks[linkName]).click({ force: true });
    }

    toggleDarkMode() {
        cy.get(el.header.buttons.darkMode).click();
    }

    toggleLanguage() {
        cy.get(el.header.buttons.language).click({ force: true });
    }

    // --- Verificações Gerais ---
    checkUrlContains(path) {
        cy.url().should('include', path);
    }

    checkTitleContains(text) {
        cy.title().should('contain', text);
    }

    checkDarkModeIsActive(isActive) {
        const assertion = isActive ? 'have.attr' : 'not.have.attr';
        cy.get(el.html).should(assertion, 'data-theme', 'dark');
    }

    checkLanguageButtonText(expectedText) {
        cy.get(el.header.buttons.language).should('have.text', expectedText);
    }

    checkDesktopNavIsNotVisible() {
        cy.get(el.header.navLinks.portfolio).should('not.be.visible');
    }

    // --- Métodos da Seção Portfólio ---
    checkProjectIsVisible(projectName) {
        cy.get(el.portfolio.getProjectCard(projectName))
            .scrollIntoView()
            .should('be.visible');
    }

    checkProjectDetails(projectName, details) {
        cy.get(el.portfolio.getProjectCard(projectName)).within(() => {
            if (details.title) {
                cy.get(el.portfolio.card.title).should('contain', details.title);
            }
            if (details.description) {
                cy.get(el.portfolio.card.description).should('have.text', details.description);
            }
        });
    }

    checkProjectLink(projectName, expectedUrl) {
        cy.get(el.portfolio.getProjectCard(projectName)).within(() => {
            cy.get(el.portfolio.card.viewButton).should('have.attr', 'href', expectedUrl);
        });
    }

    // --- Métodos do Formulário de Contato ---
    fillContactForm({ name, email, message }) {
        if (name) cy.get(el.contact.inputs.name).type(name);
        if (email) cy.get(el.contact.inputs.email).type(email);
        if (message) cy.get(el.contact.inputs.message).type(message);
    }

    submitContactForm() {
        cy.get(el.contact.submitButton).click();
    }

    checkContactFormErrorMessage(fieldName, message) {
        cy.get(el.contact.errorMessage(fieldName)).should('have.text', message);
    }

    checkContactFormSuccessMessage(message) {
        cy.get(el.contact.statusMessage).should('have.text', message);
    }
}

export default new HomePage();