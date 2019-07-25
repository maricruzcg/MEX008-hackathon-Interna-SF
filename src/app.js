//Modal ayuda
document.getElementById('modal-ayuda').addEventListener('click', ()=> {
    Swal.fire(
        'Te recomendamos considerar lo siguiente para tu cálculo aproximado:',
        'Transporte, alimentos y la "Cultura de pago ($250 mxn)"',
        'question'
      )
});

btnDefMeta   = document.getElementById("define-tu-meta");
btnCalcula   = document.getElementById("btn-calcula");
scrnIntro    = document.getElementById("scrn-intro");
scrnCalcula  = document.getElementById("scrn-calcula");
formCalcula  = document.getElementById("form-calcula");
ahorro       = document.getElementById("ingresa-ahorro");
gastoSemanal = document.getElementById("ingresa-gasto");
const logoCabecera = document.getElementById("hide-header");

btnDefMeta.addEventListener("click", () => {
    scrnCalcula.style.display = "block";
    scrnIntro.style.display = "none";
    logoCabecera.style.display = "none";
    ahorro.focus();
});

formCalcula.addEventListener("submit", event => {
    event.preventDefault();
    console.log(presupuesto.budgetCalc(parseInt(ahorro.value), parseInt(gastoSemanal.value)));
});