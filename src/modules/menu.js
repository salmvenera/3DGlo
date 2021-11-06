const menu = () => {
    const menuBtn = document.querySelector('.menu') //к классу обращаемся через точку, находим кнопку меню (кнопка меню) находится в блоке container
    const menu = document.querySelector('menu')  // к тегу обращаемся без точки, (само меню)
    const closeBtn = menu.querySelector('.close-btn') 
    const menuItems = menu.querySelectorAll('ul>li>a') // пункты в меню
    const main = document.querySelector('main')

    main.addEventListener('click', (e) => {
        if (!e.target.classList.contains('menu')) {
            return false
        } else {
            menu.classList.toggle('active-menu')
        e.target.closest('main')
        }
    })

    menu.addEventListener('click', (e) => {
        menu.classList.toggle('active-menu')
        e.target.closest('close-btn')
    })
}

export default menu