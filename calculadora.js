function insert(num){ 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
  }
  var clean = function(){
    document.getElementById('resultado').innerHTML = "";
  }
  var back = () =>{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
  }
  var calcular = () => {
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
      document.getElementById('resultado').innerHTML = eval(resultado); 
  
    }
    else{
      document.getElementById('resultado').innerHTML = "Nada à calcular";
    }
  } 