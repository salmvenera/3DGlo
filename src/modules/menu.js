const menu = () => {
    const menuBtn = document.querySelector('.menu') //к классу обращаемся через точку, находим кнопку меню
    const menu = document.querySelector('menu')  // к тегу обращаемся без точки, находим само меню
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a') // пункты в меню

    const handleMenu = () => {
        menu.classList.toggle('active-menu') // метод toggle проверит есть ли на элементе этот класс, если нет то добавит, если есть то удалит 
    }
    menuBtn.addEventListener('click', handleMenu)
    closeBtn.addEventListener('click', handleMenu)
     
    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))
}

export default menu