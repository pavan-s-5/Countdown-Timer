(function () {

let hours = document.querySelector('.hour')
let minutes = document.querySelector('.minute')
let seconds = document.querySelector('.seconds')
let ms = document.querySelector('.ms')

let startBtn  = document.querySelector('.Start')
let stopBtn = document.querySelector('.Stop')
let ResetBtn = document.querySelector('.Reset')

let countdownTimer = null;

startBtn.addEventListener('click', function (){
    if(hours.value == 0 && minutes.value == 0 && seconds.value == 0 && ms.value == 0) return

    function startTimer () {

        startBtn.style.display='none'
        stopBtn.style.display='initial'

        countdownTimer = setInterval(() => {
            timer()
        }, 10)
    }
    startTimer()
})

const stopTimer = (state) => {
    startBtn.innerHTML = state === 'pause' ? 'Continue' : 'Start'
    startBtn.style.display='initial'
    stopBtn.style.display='none'
    clearInterval(countdownTimer)
}






const timer = () => {

    if(seconds.value > 59){
        minutes.value++
        seconds.value = seconds.value - 59
    }
    if(minutes.value > 59){
        hours.value++
        minutes.value = minutes.value - 59
    }

    if(hours.value == 0 && minutes.value == 0 && seconds.value == 0 && ms.value == 0) {
        hours.value = '';
        minutes.value = '';
        seconds.value = '';
        ms.value = '';
        stopTimer()
    }else if(ms.value != 0){
        ms.value = `${ms.value <= 10 ? '0' : ''}${ms.value-1}`

    }else if(seconds.value != 0){
        ms.value = 99
        seconds.value = `${seconds.value <= 10 ? '0' : ''}${seconds.value-1}`

    }else if(minutes.value != 0){
        ms.value = 99
        seconds.value = 59
        minutes.value = `${minutes.value <= 10 ? '0' : ''}${minutes.value-1}`

    }else if(hours.value != 0){
        ms.value = 99
        seconds.value = 59
        minutes.value = 59
        hours.value = `${hours.value <= 10 ? '0' : ''}${hours.value-1}`

    }
}

stopBtn.addEventListener('click', function () {
    stopTimer('pause')
})


ResetBtn.addEventListener('click', function () {
    hours.value = '';
    minutes.value = '';
    seconds.value = '';
    ms.value = '';
    stopTimer()
})

})
()