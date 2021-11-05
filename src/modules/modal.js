const modal = () => {
    
    const modal = document.querySelector('.popup'); // оболочка окна с затемненным фоном
    const buttons = document.querySelectorAll('.popup-btn'); // кнопка на сайте
    const closeBtn = modal.querySelector('.popup-close'); // крестик на окне
    const popupContent = document.querySelector('.popup-content'); // модальное окно всплывающее
    
    const animateModel = (el, action) => {
        if (action === 'close') {
            el.style.opacity = +el.style.opacity - 0.01
        } else {
            el.style.opacity = +el.style.opacity + 0.01
        }
        if(+el.style.opacity <= 0 || +el.style.opacity >= 1) return true;
        else return false;
    } 

    //перебираем кнопки и вешаем на каждый btn обработчик события
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            //добавляем анимацию
                if (document.documentElement.clientWidth > 768) {
                    modal.style.opacity = '0';
                    const animSetOpen = setInterval(()=>{
                        const res = animateModel(modal, 'open')
                        if(res === true) clearInterval(animSetOpen);
                    }, 10);
                }  
                
        })
    })
    
    closeBtn.addEventListener('click', () => {
        
        if (document.documentElement.clientWidth > 768) {
            modal.style.opacity = '1';
            const animSetClose = setInterval(()=>{
                let res = animateModel(modal, 'close')
                if(res === true) {
                    clearInterval(animSetClose);
                    
                    modal.style.display = 'none';
                }
            }, 10);
        }  
    })
}
export default modal
