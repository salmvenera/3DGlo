const modal = () => {
    
    const modal = document.querySelector('.popup'); // оболочка окна с затемненным фоном
    const buttons = document.querySelectorAll('.popup-btn'); // кнопка на сайте
    const closeBtn = modal.querySelector('.popup-close'); // крестик на окне
    const popupContent = document.querySelector('.popup-content'); // модальное окно всплывающее
    
    const animateModel = (el, count, action) => {
        if (action === 'close') {
            el.style.opacity = count - 0.01
        } else {
            el.style.opacity = count + 0.01
        }
        if(el.style.opacity <= 0 || el.style.opacity >= 0.99) return false 

    } 

    window.addEventListener('resize', () => {
        
    })

    //перебираем кнопки и вешаем на каждый btn обработчик события
    buttons.forEach(btn => {
        let width = document.documentElement.clientWidth
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            //добавляем анимацию
            if (document.documentElement.clientWidth <= 768) {
                clearTimeout(animateModel)
            } else {
                setTimeout(()=>animateModel(modal, 0.5, 'open'), 10);
            }
        })
    })
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}
export default modal