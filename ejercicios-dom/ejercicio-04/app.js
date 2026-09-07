const clickInput = document.querySelector('.click');

clickInput.addEventListener('click', function(event) {
    console.log('1.1 Información del evento click:', event);
});


const focusInput = document.querySelector('.focus');

focusInput.addEventListener('focus', function(event) {
    console.log('1.2 Valor del input al hacer focus:', event.target.value);
});


        const valueInput = document.querySelector('.value');

valueInput.addEventListener('input', function(event) {
    console.log('1.3 Valor en tiempo real (input):', event.target.value);
});
