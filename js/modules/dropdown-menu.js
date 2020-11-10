import outsideClick from './outsideclick.js';

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);
        this.activeClass = 'active';
        // Define touchstart e click como argumento padrão de eventos
        // caso o usuario não defina
        if (events === undefined) {
            this.events = ['touchstart', 'click'];
        } else {
            this.events = events;
        }
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    // Ativa o dropdownmenu e adiciona a função
    // que observa o clique fora dele
    activeDropdownMenu(event) {
        event.preventDefault();
        const elementTarget = event.currentTarget;
        elementTarget.classList.add(this.activeClass);
        outsideClick(elementTarget, this.events, () => {
            elementTarget.classList.remove(this.activeClass);
        });
    }

    // Adiciona os eventos ao dropdownmenu
    addDropdownMenusEvent() {
        this.dropdownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            });
        });
    }

    // Inicia o dropdown menu
    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenusEvent();
        }
        return this;
    }
}
