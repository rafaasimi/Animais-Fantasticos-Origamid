export default function initAccordion() {
    const accordionlist = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';

    function activeAccordion() {
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
    }

    if (accordionlist.length) {
        accordionlist[0].classList.add(activeClass);
        accordionlist[0].nextElementSibling.classList.add(activeClass);

        accordionlist.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}