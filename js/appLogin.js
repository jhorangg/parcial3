const registrarUsuario=()=>{
    var correo=document.querySelector("#correo").value;
    var contraseña=document.querySelector("#contraseña").value;
    var nombre=document.querySelector("#nombre").value;

    if(correo.trim()===''||
    password.trim()==='' ||
    nombre.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'FALTA LLENAR CAMPOS',
            footer: 'CRUD CONTACTOS'
          })

    }
  }
