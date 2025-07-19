
const homeElements = {
    // --- Header e Navegação ---
    header: {
        navbar: '[data-testid="navbar"]',
        brand: '[data-testid="navbar-brand"]',
        navLinks: {
            inicio: '[data-testid="nav-link-inicio"]',
            sobre: '[data-testid="nav-link-sobre"]',
            habilidades: '[data-testid="nav-link-habilidades"]',
            portfolio: '[data-testid="nav-link-portfolio"]',
            contato: '[data-testid="nav-link-contato"]'
        },
        buttons: {
            language: '[data-testid="botao-idioma"]',
            darkMode: '[data-testid="botao-modo-escuro"]'
        },
        // --- SELETORES PARA RESPONSIVIDADE ---
        hamburgerMenu: '[data-testid="navbar-toggler"]',
        mobileNavContainer: '#menuNav'
    },

    // --- Seção Hero ---
    hero: {
        section: '[data-testid="hero-section"]',
        title: '[data-testid="hero-title"]',
        description: '[data-testid="hero-description"]'
    },

    // --- Seção Portfólio ---
    portfolio: {
        section: '[data-testid="portfolio-section"]',
        title: '[data-testid="titulo-portfolio"]',
        getProjectCard: (projectName) => `[data-testid="projeto-${projectName}"]`,
        card: {
            title: '.card-title',
            description: '.card-text',
            viewButton: 'a.btn',
            techList: '.tech-list'
        }
    },

    // --- Seção Contato ---
    contact: {
        section: '[data-testid="contato-section"]',
        form: '[data-testid="contato-formulario"]',
        inputs: {
            name: '[data-testid="input-nome"]',
            email: '[data-testid="input-email"]',
            message: '[data-testid="input-mensagem"]'
        },
        submitButton: '[data-testid="botao-enviar"]',
        errorMessage: (fieldName) => `#${fieldName}-error`,
        statusMessage: '#form-status'
    },

    // --- Corpo da Página ---
    html: 'html'
};
export default homeElements;