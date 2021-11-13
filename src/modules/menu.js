const menu = () => {
    const menuBtn = document.querySelector('.menu') //к классу обращаемся через точку, находим кнопку меню (кнопка меню) находится в блоке container
    const menu = document.querySelector('menu')  // к тегу обращаемся без точки, (само меню)
    const closeBtn = menu.querySelector('.close-btn') 
    const menuItems = menu.querySelectorAll('ul>li>a') // пункты в меню
    const main = document.querySelector('main')
    const activeMenu = document.querySelector('active-menu')
    
    const toggleMenu = () => {
	    document.body.addEventListener("click", (e) => {
		    console.dir(e.target);
			if (e.target.closest(".menu")) {
			    menu.classList.toggle("active-menu");
			} else if (e.target.closest("menu")  === menu && (e.target.classList.contains("close-btn"))) {
                if (!e.target.classList.contains("close-btn")) {
                    menu.classList.toggle("active-menu");
                } else {
                    menu.classList.toggle("active-menu");
                }
            } else if (e.target.closest("menu") !== menu) {
                menu.classList.remove("active-menu");
            } else if (e.target.tagName === "A") {
                menu.classList.toggle("active-menu");
            }
        });
    };
	toggleMenu();
};
export default menu