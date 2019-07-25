//Prueba sweet alert

document.getElementById('modal-ayuda').addEventListener('click', ()=> {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
});

