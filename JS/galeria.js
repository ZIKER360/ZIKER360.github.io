let div = document.getElementById('info-1');
let div1 = document.getElementById('info-2');
let div2 = document.getElementById('info-3');

document.getElementById('img-1').addEventListener("click", info1);
document.getElementById('img-2').addEventListener("click", info2);
document.getElementById('img-3').addEventListener("click", info3);

function info1(){
    let click=document.getElementById('valor1').value;

    if (click==1){
        div.style.display="block";
        document.getElementById('valor1').value=2;
    }else{
        div.style.display='none';
        document.getElementById('valor1').value=1;
    }
}

function info2(){
    let click=document.getElementById('valor2').value;

    if (click==1){
        div1.style.display="block";
        document.getElementById('valor2').value=2;
    }else{
        div1.style.display='none';
        document.getElementById('valor2').value=1;
    }
}

function info3(){
    let click=document.getElementById('valor3').value;

    if (click==1){
        div2.style.display="block";
        document.getElementById('valor3').value=2;
    }else{
        div2.style.display='none';
        document.getElementById('valor3').value=1;
    }
}