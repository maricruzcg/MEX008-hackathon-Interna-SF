//alert('funcionaaa');
btnDefMeta   = document.getElementById("define-tu-meta");
btnCalcula   = document.getElementById("btn-calcula");
scrnIntro    = document.getElementById("scrn-intro");
scrnCalcula  = document.getElementById("scrn-calcula");
formCalcula  = document.getElementById("form-calcula");
ahorro       = document.getElementById("ingresa-ahorro");
gastoSemanal = document.getElementById("ingresa-gasto-semanal");

btnDefMeta.addEventListener("click", () => {
    scrnCalcula.style.display = "block";
    scrnIntro.style.display = "none";
    ahorro.focus();
});

formCalcula.addEventListener("submit", event => {
    event.preventDefault();
    console.log(presupuesto.budgetCalc(parseInt(ahorro.value), parseInt(gastoSemanal.value)));
});