
document.getElementById('botoncontacto').addEventListener('click', function(){
    document.getElementById('form').style.display = 'block';
}); 

document.getElementById('botonenviar').addEventListener('click', function(){
    document.getElementById('form').style.display = 'none';
    document.getElementById('agradecimiento').style.display = 'block';
}); 

document.getElementById('volver').addEventListener('click', function(){
    document.getElementById('agradecimiento').style.display = 'none';
}); 