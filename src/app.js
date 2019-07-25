//alert('funcionaaa');
btnDefMeta = document.getElementById("define-tu-meta");
btnCalcula = document.getElementById("btn-calcula");
scrnIntro = document.getElementById("scrn-intro");
scrnCalcula = document.getElementById("scrn-calcula");

btnDefMeta.addEventListener("click", () => {
    scrnCalcula.style.display = "block";
    scrnIntro.style.display = "none";
});