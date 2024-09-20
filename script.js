let firistName = document.getElementsByClassName('contact__firistname')[0],
    message = document.getElementsByName('message')[0]

firistName.addEventListener('input', function () {
    message.value = 'mening ismim ${firistName.value} i y cochu'
})