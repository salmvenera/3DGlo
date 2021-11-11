const test = () => {
    const sliderBlock = document.querySelector('.portfolio-content')  // ul список с изображ(весь блок слайдера)
    const slides = document.querySelectorAll('.portfolio-item')       // li пункт с отдельным img
    const portfolioDots = document.querySelector('.portfolio-dots')  // ul список с точками
                       // li каждая точка
    const timeInterval = 2000
    
    let currentSlide = 0   
    //let interval 

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    let newDot
    let maxDots =  6                                                
    for (let i = 0; i < maxDots; i++) {
        newDot = document.createElement('li')
        if (i === 0) {
        newDot.classList.add('dot', 'dot-activ')
        } else {
            newDot.classList.add('dot') 
        }
        portfolioDots.appendChild(newDot)
    }  

     

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(newDot, currentSlide, 'dot-activ')

        currentSlide++  

          if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(newDot, currentSlide, 'dot-activ')
    }

    // запускает ф-ю autoSlide в интервале
    const startSlide = () => {
        setInterval(autoSlide, 2000)
    }

    const stopSlide = () => {
        
    }
    startSlide()
    /* sliderBlock.addEventListener('click', (e) => {
        e.preventDefault() // отменяет действие страницы

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(newDot, currentSlide, 'dot-active')
       
        if (e.target.matches('#arrow-right')) {   
            console.log('arrow-right');  
            currentSlide++
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--
        } else if (e.target.classList.contains('dot')) {  //ищем класс dot
            newDot.forEach((dot, index) => {
               if (e.target === dot) {
                   currentSlide = index
               }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(newDot, currentSlide, 'dot-active')
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
 */
    
    
   
}
//export default test