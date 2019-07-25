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
tPreBootcamp = document.getElementById("tiempo-antes-de-bootcamp");
const logoCabecera = document.getElementById("hide-header");
const iniciarSesion = document.getElementById('iniciar-sesion');

iniciarSesion.addEventListener('click', ()=> {
    Swal.fire({
        title: '<img src="/MEX008-hackathon-Interna-SF/src/img/login.png">',
        html:
          '<input type="email" placeholder="Email"> ' +
          '<input type="password" placeholder="Password">' + '<br>'+ '¿No tienes una cuenta?' + '<br>' + '<button class="btn-warning">Registrate</button>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Acceder!',
        confirmButtonAriaLabel: 'Registrate!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Cancelar',
      })
});


btnDefMeta.addEventListener("click", () => {
    scrnCalcula.style.display = "block";
    scrnIntro.style.display = "none";
    logoCabecera.style.display = "none";
    ahorro.focus();
});

formCalcula.addEventListener("submit", event => {
    event.preventDefault();
    const gastoTotal = presupuesto.expensesCalc(parseInt(gastoSemanal.value));
    const balance = presupuesto.balance(parseInt(ahorro.value), gastoTotal);
    console.log(gastoTotal, balance);
    

    if (balance > 0) {
       /*  Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        ) */
            /* Swal.fire({
                type: 'sucess',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
              }) */

        Swal.fire({
        title: `¡Cuentas con el ahorro necesario!`,
        text: `Financieramente no tendrías problemas para ingresar a Laboratoria. ¿Quieres que te ayudemos a gestionar tu presupuesto semanal?`,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        }).then((result) => {
        if (result.value) {
            Swal.fire(
            '...Próximamente'
            )
        }
        })
    }
    else if (balance == 0) {
        Swal.fire({
            title: `¡Tu ahorro apenas es suficiente!`,
            text: `Tienes ${tPreBootcamp.value} meses para ahorrar más. ¿Quieres que te ayudemos a aumentar tu ahorro?`,            type: 'error',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                '...Próximamente'
                )
            }
        })
    }

    else if (balance < 0) {
        Swal.fire({
            title: `¡Tu ahorro no es suficiente!`,
            text: `Tienes ${tPreBootcamp.value} meses para ahorrar más. ¿Quieres que te ayudemos a alcanzar tu meta?`,            
            type: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                '...Próximamente'
                )
            }
        })
    }
});