const animate = ({timing, draw, duration}) => {

    let start = performance.now();
  
    requestAnimationFrame(function showAnimate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time -  start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(showAnimate);
      }
      if (timeFraction > 1) {
        requestAnimationFrame(showAnimate);
      }
  
    });
  }
  export { animate }



  // когда запускается ф-я animate эта ф-ия создает переменную start значением которой 
  // присваивает отработку метода performance.now()- он возвращает текущую точку времени, фиксирует точку времени на lанный момент,
  // точка времени старта самой анимации. Duration - длительность самой анимации.
  // Далее внутри requestAnimationFrame запускается еще одна ф-ия animate.

  // Далее эта ф-ия animate каждый раз принимает время(time) временную рамку очередного повторения ф-ии animate.
  // Создаем переменную let timeFraction значением которой идет разность между текущим временем и началом нашей анимации и все это делится на duration, который мы передали в ф-ию animate.
  // Создается переменная progress которая принимает в себя результат выполнения ф-ии timing. 
  // В timing(timeFraction); мы передаем timeFraction. который будет возвращать число от 0 до 1, дробленный на разные участки.
  // Каждый раз timeFraction будет передаваться в ф-ию timing, если в  = ({timing, draw, duration}) обычная линейная анимация, то он будет возвращаться в let progress = timing(timeFraction);
  // Ну а progress уже будет поступать в колбэк draw(progress), который будем передавать
  // if (timeFraction < 1) {
    //requestAnimationFrame(animate);
  //проверяем не дошли ли мы до единички и если  дошли до 1 requestAnimationFrame больше не отработает
  // если еще не дошли до 1, то requestAnimationFrame повторяет анимацию