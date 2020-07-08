function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    // Verifica se existe pelo menos 1 item para ser modificado
    if (tabMenu.length && tabContent.length) {

        tabContent[0].classList.add('ativo')

        console.log(tabMenu)
        console.log(tabContent)

        function activeTab(index) {
            tabContent.forEach((item) => {
                item.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })

    }
}

initTabNav();

function initAccordion() {
    const accordionlist = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if (accordionlist.length) {
        accordionlist[0].classList.add(activeClass)
        accordionlist[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionlist.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })

    }
}

initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        /* forma alternativa
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        });*/
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })

}

initScrollSuave();