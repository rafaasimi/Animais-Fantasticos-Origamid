export default class Accordion {
    constructor(list) {
        this.accordionlist = document.querySelectorAll(list);
        this.activeClass = 'ativo';
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }

    // Adiciona os eventos ao accordion
    addAccordionEvent() {
        this.accordionlist.forEach((item) => {
            item.addEventListener('click', () => this.toggleAccordion(item));
        });
    }

    // Iniciar função
    init() {
        if (this.accordionlist.length) {
            // Ativar primeiro item
            this.toggleAccordion(this.accordionlist[0]);
            this.addAccordionEvent();
        }
    }
}
