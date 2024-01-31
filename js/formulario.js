const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones ={
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/ // 7 a 14 numeros.
}

const validarFormulario = (e)=>{
    switch(e.target.name){
        case "Usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.querySelector('#GrupoUsuario .input-error').classList.remove('input-error-activa');

            }else{
                document.querySelector('#GrupoUsuario .input-error').classList.add('input-error-activa');
            }
        break

        case "Re_Password":
            validarRe_Password();
        break   
        
        case "Celular":
            if(expresiones.telefono.test(e.target.value)){
                document.querySelector('#GrupoCelular .input-error').classList.remove('input-error-activa');

            }else{
                document.querySelector('#GrupoCelular .input-error').classList.add('input-error-activa');
            }    
        break

        case "Password":
            if(expresiones.password.test(e.target.value)){
                document.querySelector('#GrupoPassword .input-error').classList.remove('input-error-activa');

            }else{
                document.querySelector('#GrupoPassword .input-error').classList.add('input-error-activa');
            }

        break

    }
}


const validarRe_Password = ()=>{
    const pass1=document.getElementById('Password');
    const pass2=document.getElementById('Re_Password');

    if(pass1.value !== pass2.value){
        document.querySelector('#GrupoPassword2 .input-error').classList.add('input-error-activa');

    }else{
        document.querySelector('#GrupoPassword2 .input-error').classList.remove('input-error-activa');
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let user = document.getElementById('Usuario').value;
    let mail = document.getElementById('Mail').value;
    let celular= document.getElementById('Celular').value;
    let pass1 = document.getElementById('Password').value;
    let pass2 = document.getElementById('Re_Password').value;

    if (user === '' || mail === '' || pass1 === '' || pass2 === ''||celular=='') {
        document.getElementById('alertGeneral').style.display = 'block';
    } else {
        document.getElementById('alertGeneral').style.display = 'none';
    }
});


inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});