import outsideClick from './outsideclick.js';

export default class MenuMobile {
    constructor(menuButton, menuList, events) {
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);
        this.classActive = 'active';

        this.openMenu = this.openMenu.bind(this);

        if (events === undefined) {
            this.events = ['click', 'touchstart'];
        } else {
            this.events = events;
        }
    }

    openMenu(event) {
        event.preventDefault();
        this.menuList.classList.add(this.classActive);
        this.menuButton.classList.add(this.classActive);
        outsideClick(this.menuList, this.events, () => {
            this.menuList.classList.remove(this.classActive);
            this.menuButton.classList.remove(this.classActive);
        });
    }

    addMenuMobileEvents() {
        this.events.forEach((evento) => {
            this.menuButton.addEventListener(evento, this.openMenu);
        });
    }

    init() {
        if (this.menuButton && this.menuList) {
            this.addMenuMobileEvents();
        }
        return this;
    }
}
