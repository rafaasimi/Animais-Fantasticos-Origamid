import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        });
    }

    dropdownMenus.forEach((menu) => {
        // Adicionar + de um evento
        // Array ou adicionando 2 addEventListener
        // Click = Demora 300ms para ser executado no Mobile
        // TouchStart = Inicia na hora
        ['touchstart', 'click'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        });
    });
}
