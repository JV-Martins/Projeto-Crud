const adicionar = document.getElementById("modal-adicionar")
const editar = document.getElementById("modal-editar");


window.onload = () => {
    adicionar.style.display = 'none';
    editar.style.display = 'none';
}

function Adicionar(){
    adicionar.style.display = "block";  
}

function Editar(){
    editar.style.display = "block";
}

function Fechar(){
    adicionar.style.display = 'none';
    editar.style.display = 'none';
}
