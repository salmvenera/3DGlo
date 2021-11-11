    const slider = () => {
        
        const sliderBlock = document.querySelector('.portfolio-content')  // ul список с изображ(весь блок слайдера)
        const slides = document.querySelectorAll('.portfolio-item')       // li пункт с отдельным img
        //const portfolioDots = document.querySelector('.portfolio-dots')  // ul список с точками
                           
        const timeInterval = 2000
    
        let currentSlide = 0   
        let interval = 0
        let dots = 0
    
        const genDot = () => {  
            const portfolioDots = document.querySelector('.portfolio-dots')   
            let elemNew = ``;
            slides.forEach((elems, index) => {
                if (index === 0) {
                    elemNew += `<li class="dot dot-active"></li>`;
                } else {
                    elemNew += `<li class="dot"></li>`;
                }
            });
                portfolioDots.insertAdjacentHTML('beforeend', elemNew);
                dots = document.querySelectorAll('.dot')
        };
        genDot()   
        
        /* let newDot
        let maxDots =  6                                                
        for (let i = 0; i < maxDots; i++) {
            newDot = document.createElement('li')
            if (i === 0) {    
                newDot.classList.add('dot', 'dot-activ')
            } else {
                newDot.classList.add('dot') 
            }
            portfolioDots.appendChild(newDot)
        }  */ 
 
        const prevSlide = (elem, index, strClass) => {  
            elem[index].classList.remove(strClass)
             
        }                                                         

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass)
        }

        //чтобы слайды автоматически переключались
        const autoSlide = () => {
            prevSlide(slides, currentSlide, 'portfolio-item-active')      
            prevSlide(dots, currentSlide, 'dot-active')
            currentSlide++   

            if (currentSlide >= slides.length) {
                    currentSlide = 0
            }
            nextSlide(slides, currentSlide, 'portfolio-item-active') 
            nextSlide(dots, currentSlide, 'dot-active')
        }

        // запускает ф-ю autoSlide в интервале
        const startSlide = (timer = 1500) => {
            interval = setInterval(autoSlide, timer)
        }

        const stopSlide = () => {
            clearInterval(interval)
        }
        sliderBlock.addEventListener('click', (e) => {
            e.preventDefault() // отменяет действие страницы

            let target = e.target;
            if (!e.target.matches('.dot, .portfolio-btn')) {
                return
            }

            prevSlide(slides, currentSlide, 'portfolio-item-active')
            prevSlide(dots, currentSlide, 'dot-active')
       
            if (e.target.matches('#arrow-right')) {    
                currentSlide++
            } else if (e.target.matches('#arrow-left')) {
                currentSlide--
            } else if (e.target.matches('.dot')) {  //ищем класс dot
                dots.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index
                    }
                })
            }

            if (currentSlide >= slides.length) {
                currentSlide = 0
            }

            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
                }

            nextSlide(slides, currentSlide, 'portfolio-item-active')
            nextSlide(dots, currentSlide, 'dot-active')
        })

        sliderBlock.addEventListener('mouseenter', (e) => {
            if (e.target.matches('.dot, .portfolio-btn')) {
                stopSlide()
            }
        }, true)

        sliderBlock.addEventListener('mouseleave', (e) => {
            if (e.target.matches('.dot, .portfolio-btn')) {
                startSlide(timeInterval)
            }
        }, true)

        startSlide(timeInterval)
    
   
}
export default slider 