const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


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
    let direc1 = document.getElementById('DireccionPartida').value;
    let direc2 = document.getElementById('DireccionLlegada').value;
    let fecha= document.getElementById('FechaMudanza').value;
    let tipo = document.getElementById('TipoMudanza').value;

    if (user === '' || mail === '' || celular === '' || direc1 === ''||direc2=='' || fecha === ''||tipo=='') {
        document.getElementById('alertGeneral').style.display = 'block';
    } else {
        document.getElementById('alertGeneral').style.display = 'none';
        document.getElementById('Usuario').value = '';
        document.getElementById('Mail').value = '';
        document.getElementById('Celular').value = '';
        document.getElementById('DireccionPartida').value = '';
        document.getElementById('DireccionLlegada').value = '';
        document.getElementById('FechaMudanza').value = '';
        document.getElementById('TipoMudanza').value = '';
    }
});


inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});