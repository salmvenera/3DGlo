import {animate} from './helpers'

const modal = () => {
    
    const modal = document.querySelector('.popup'); // оболочка окна с затемненным фоном
    const buttons = document.querySelectorAll('.popup-btn'); // оставить заявку кнопка на сайте
    const closeBtn = modal.querySelector('.popup-close'); // крестик на окне
    const popupContent = document.querySelector('.popup-content'); // модальное окно всплывающее
    
   
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.opacity = 0;
            modal.style.display = 'block'; 
           
            //добавляем анимацию
            if (document.documentElement.clientWidth > 768) {
                animate({
                     duration: 3000,
                     timing(timeFraction) {
                         return timeFraction
                     },
                     draw(progress) {
                         modal.style.opacity = progress 
                     }
                })
            } 
        })
    })

    modal.addEventListener('click', (e) => { 
        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.opacity = '1';

            if (document.documentElement.clientWidth > 768) {
                modal.style.display = 'none';
                animate({
                     duration: 3000,
                     timing(timeFraction) {
                         return timeFraction
                     },

                     draw(progress) {
                         modal.style.opacity = 1 - progress
                     }
                })    
            } 
        }
    })

}
export default modal