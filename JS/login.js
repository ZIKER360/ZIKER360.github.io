document.getElementById('btn_login').addEventListener('click', validar);

function validar(){
    let user=document.getElementById('username').value;
    let pass=document.getElementById('password').value;

    const userName="User";
    const passCode="123456";

    if(user=="" || pass==""){
        alert("Los campos son requeridos");
    }else{
        if(userName==user && passCode==pass){
            window.location.href='formulario.html';
        }else{
            alert('Usuario o contraseña incorrecta');
        }

    }
}