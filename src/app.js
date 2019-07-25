//Prueba sweet alert
document.getElementById('modal-ayuda').addEventListener('click', ()=> {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
});

btnDefMeta   = document.getElementById("define-tu-meta");
btnCalcula   = document.getElementById("btn-calcula");
scrnIntro    = document.getElementById("scrn-intro");
scrnCalcula  = document.getElementById("scrn-calcula");
formCalcula  = document.getElementById("form-calcula");
ahorro       = document.getElementById("ingresa-ahorro");
gastoSemanal = document.getElementById("ingresa-gasto");

btnDefMeta.addEventListener("click", () => {
    scrnCalcula.style.display = "block";
    scrnIntro.style.display = "none";
    ahorro.focus();
});

formCalcula.addEventListener("submit", event => {
    event.preventDefault();
    console.log(presupuesto.budgetCalc(parseInt(ahorro.value), parseInt(gastoSemanal.value)));
});