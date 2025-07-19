import homePage from '../page/home_page';

describe('Portfólio de Joelma Ferreira - Testes de UI', () => {

    beforeEach(() => {
        cy.visitAndCheck();
    });

    context('Navegação e Funcionalidades Gerais', () => {

        it('deve navegar para a seção "Portfólio" ao clicar no link do menu', () => {
            // CORREÇÃO: Todas as tags Allure agora estão DENTRO do 'it'
            cy.allure()
                .suite('Testes de UI - Desktop')
                .feature('Navegação e UI Geral')
                .story('Navegação via Menu Principal')
                .severity('critical')
                .owner('Time de QA')
                .tag('Navegação', 'Smoke');

            homePage.clickNavLink('portfolio');
            homePage.checkUrlContains('#portfolio');
        });

        it('deve alternar entre modo claro e escuro', () => {
            cy.allure()
                .suite('Testes de UI - Desktop')
                .feature('Navegação e UI Geral')
                .story('Alternância de Tema (Dark Mode)')
                .severity('minor')
                .tag('UI', 'Feature');

            homePage.checkDarkModeIsActive(false);
            homePage.toggleDarkMode();
            homePage.checkDarkModeIsActive(true);
            homePage.toggleDarkMode();
            homePage.checkDarkModeIsActive(false);
        });

        it('deve alternar o idioma da página corretamente', () => {
            cy.allure()
                .suite('Testes de UI - Desktop')
                .feature('Navegação e UI Geral')
                .story('Internacionalização (i18n)')
                .severity('critical')
                .tag('Conteúdo', 'i18n');

            homePage.checkTitleContains('Líder de QA');
            homePage.checkLanguageButtonText('EN');
            homePage.toggleLanguage();
            homePage.checkTitleContains('QA & Accessibility Lead');
            homePage.checkLanguageButtonText('PT');
            homePage.toggleLanguage();
            homePage.checkTitleContains('Líder de QA');
            homePage.checkLanguageButtonText('EN');
        });
        
        it('deve passar nas verificações de acessibilidade (a11y)', () => {
            cy.allure()
                .suite('Testes de UI - Desktop')
                .feature('Acessibilidade')
                .story('Conformidade WCAG')
                .severity('blocker')
                .owner('Time de Acessibilidade')
                .tag('A11y', 'Requisito');
            
            cy.injectAxe();
            cy.checkA11y(null, {
                includedImpacts: ['critical', 'serious']
            });
        });
    });

    context('Seção Portfólio', () => {
        beforeEach(() => {
            homePage.clickNavLink('portfolio');
        });

        it('deve exibir o projeto "Estante de Livros" com detalhes e link corretos', () => {
            cy.allure()
                .suite('Testes de UI - Desktop')
                .feature('Seção de Portfólio')
                .story("Validação do Projeto 'Estante de Livros'")
                .severity('normal');
            
            const projectName = 'estante';
            homePage.checkProjectIsVisible(projectName);
            homePage.checkProjectDetails(projectName, {
                title: 'Estante de Livros',
                description: 'Página que simula uma estante virtual. Criada com HTML semântico e CSS, com foco em estrutura acessível e design responsivo.'
            });
            homePage.checkProjectLink(projectName, 'projetos/estante/estante.html');
        });

        it('deve exibir o projeto "Mario Jump" com detalhes e link corretos', () => {
            cy.allure()
                .suite('Testes de UI - Desktop')
                .feature('Seção de Portfólio')
                .story("Validação do Projeto 'Mario Jump'")
                .severity('normal');

            const projectName = 'mario';
            homePage.checkProjectIsVisible(projectName);
            homePage.checkProjectDetails(projectName, {
                title: 'Mario Jump',
                description: 'Jogo simples demonstrando manipulação do DOM e eventos de teclado com JavaScript puro, HTML e CSS.'
            });
            homePage.checkProjectLink(projectName, 'projetos/mario/mario.html');
        });
    });

    context('Formulário de Contato', () => {
        beforeEach(() => { homePage.clickNavLink('contato'); });

        it('deve exibir mensagem de erro para campos obrigatórios', () => {
            cy.allure()
                .suite('Testes de UI - Desktop')
                .feature('Formulário de Contato')
                .story('Validação de Erros - Campos Vazios')
                .severity('critical')
                .tag('Formulário', 'Validação de Erro');

            homePage.submitContactForm();
            homePage.checkContactFormErrorMessage('nome', 'Por favor, insira seu nome.');
            homePage.checkContactFormErrorMessage('email', 'Por favor, insira um e-mail válido.');
            homePage.checkContactFormErrorMessage('mensagem', 'Por favor, escreva uma mensagem.');
        });

        it('deve exibir mensagem de erro para e-mail inválido', () => {
            cy.allure()
                .suite('Testes de UI - Desktop')
                .feature('Formulário de Contato')
                .story('Validação de Erros - E-mail Inválido')
                .severity('critical')
                .tag('Formulário', 'Validação de Erro');

            cy.fixture('contactData').then((data) => { homePage.fillContactForm(data.invalidEmail); });
            homePage.submitContactForm();
            homePage.checkContactFormErrorMessage('email', 'Por favor, insira um e-mail válido.');
        });

        it('deve exibir mensagem de sucesso ao preencher o formulário corretamente', () => {
            cy.allure()
                .suite('Testes de UI - Desktop')
                .feature('Formulário de Contato')
                .story('Submissão com Sucesso (Happy Path)')
                .severity('critical')
                .tag('Formulário', 'Happy Path', 'Smoke');

            cy.fixture('contactData').then((data) => { homePage.fillContactForm(data.success); });
            homePage.submitContactForm();
            homePage.checkContactFormSuccessMessage('Mensagem enviada com sucesso! Obrigado.');
        }); 
    });
});

describe('Testes de Responsividade - Mobile', () => {

    beforeEach(() => {
        cy.viewport('iphone-xr');
        cy.visitAndCheck();
    });

    it('deve exibir o menu hambúrguer e abrir a navegação móvel ao ser clicado', () => {
        cy.allure()
            .suite('Testes de UI - Responsividade Mobile')
            .feature('Menu de Navegação Mobile')
            .story('Abertura e Fechamento do Menu Hamburguer')
            .severity('critical')
            .owner('Time de Frontend')
            .tag('Mobile', 'Responsividade');

        homePage.checkDesktopNavIsNotVisible();
        
        homePage.getHamburgerMenu().should('be.visible').click();
        homePage.getMobileNavContainer().should('be.visible');

        homePage.getMobileNavContainer()
          .find('[data-testid="nav-link-portfolio"]')
          .should('be.visible');
    });
});