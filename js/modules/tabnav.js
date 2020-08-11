export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')

    // Verifica se existe pelo menos 1 item para ser modificado
    if (tabMenu.length && tabContent.length) {

        tabContent[0].classList.add('ativo')

        //console.log(tabMenu)
        //console.log(tabContent)

        function activeTab(index) {
            tabContent.forEach((item) => {
                item.classList.remove('ativo');
            })
            
            const direcao = tabContent[index].dataset.anime
            tabContent[index].classList.add('ativo', direcao)
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })

    }
}

