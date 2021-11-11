import {animate} from './helpers'

const modal = () => {
    
    const modal = document.querySelector('.popup'); // оболочка окна с затемненным фоном
    const buttons = document.querySelectorAll('.popup-btn'); // оставить заявку кнопка на сайте
    const closeBtn = modal.querySelector('.popup-close'); // крестик на окне
    const popupContent = document.querySelector('.popup-content'); // модальное окно всплывающее
    

    setTimeout(() => {

        animate({
            duration: 3000,
            timing(timeFraction) {
                return timeFraction   
            },
            
            draw(progress) {
                popupContent.style.opacity = progress
            }
          })
          
    }, 1500)

    /* const animateModel = (el, action) => {
        if (action === 'close') {
            el.style.opacity = +el.style.opacity - 0.01
        } else {
            el.style.opacity = +el.style.opacity + 0.01
        }
        if(+el.style.opacity <= 0 || +el.style.opacity >= 1) return true;
        else return false;
    }  */

    //перебираем кнопки и вешаем на каждый btn обработчик события
     buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'; 

            //добавляем анимацию
                /* if (document.documentElement.clientWidth > 768) {
                    modal.style.opacity = '0';
                    const animSetOpen = setInterval(()=>{
                        const res = animateModel(modal, 'open')
                        if(res === true) clearInterval(animSetOpen);
                    }, 10);
                }   */
        })
    }) 
 
    modal.addEventListener('click', (e) => { 
        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
            
        } 
        if (document.documentElement.clientWidth > 768) {
            modal.style.opacity = '1';
            /* const animSetClose = setInterval(()=>{
                let res = animateModel(modal, 'close')
                if(res === true) {
                    clearInterval(animSetClose);
                    modal.style.display = 'none';
                }
            }, 100); */
        }  
    })
    
}
export default modal