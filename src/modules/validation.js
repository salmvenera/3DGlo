const validation = () => {

    // калькулятор
    const calcSquare = document.querySelector('.calc-square')
    const calcDay = document.querySelector('.calc-day')
    const calcCount = document.querySelector('.calc-count')

    // 1-ый экран
    const form1Name = document.getElementById('form1-name')  
    const form1Email = document.getElementById('form1-email')
    const form1Phone = document.getElementById('form1-phone')
    
    // последний экран
    const form2Name = document.getElementById('form2-name')  
    const form2Email = document.getElementById('form2-email')
    const form2Phone = document.getElementById('form2-phone')
    const form2Message = document.getElementById('form2-message') 

    //модальное окно
    const form3Name = document.getElementById('form3-name')  
    const form3Email = document.getElementById('form3-email')
    const form3Phone = document.getElementById('form3-phone')

    //калькулятор
    calcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
    calcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
    calcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })

    // 1-ый экран
    form1Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-я\-\ ]/gi, "")
    })
    form1Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-z\-\ \@\_\.\!\'\~\*]/gi, "")
    })
    form1Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\()\-]/gi, "")
    })

    // последний экран
    form2Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-я\-\ ]/gi, "")
    })
    form2Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-z\-\ \@\_\.\!\'\~\*]/gi, "")
    })
    form2Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\()\-]/gi, "")
    })
    form2Message.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-я\-\ ]/gi, "")
    })

    //модальное окно
    form3Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-я\-\ ]/gi, "")
    })
    form3Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-z\-\ \@\_\.\!\'\~\*]/gi, "")
    })
    form3Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\()\-]/gi, "")
    })

}
export default validation