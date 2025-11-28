const captcha = document.getElementById('captcha')
const mostrarCodigo = document.getElementById('code')

const submit = document.getElementsByName('btnLogin')[0];
let codigo = '';

function getRandomInt() {
    return Math.floor(Math.random() * 9000) + 1000;
}

captcha.addEventListener('mouseenter', () => {
    mostrarCodigo.removeAttribute('style')
    codigo = getRandomInt()
    mostrarCodigo.textContent = codigo
})

captcha.addEventListener('mouseleave', () => {
    mostrarCodigo.textContent = ''
    mostrarCodigo.removeAttribute('style')
})

submit.addEventListener('click', (Event) => {
    Event.preventDefault()
    console.log(codigo);
    if (document.formulario.verify.value == codigo) {
        window.location.href('ej09-FormularioProcesado.html')
    }
}) 
   


