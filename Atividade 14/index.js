function Validar(){
  var ele = document.meuForm.elements;
  

  if(ele[0].value.length < 10 ){
    alert("Nome não pode ter menos que 10 caracteres")
    return false;
  }
  if(!document.getElementById("email").value.includes("@")  || !document.getElementById("email").value.includes(".")  ){
    alert("Email precisa conter @ e .")
    return false;
  }
  if(document.getElementById("comentario").value.length < 20 ){
    alert("Comentário precisa ter no mínimo 20 caracteres")
    return false;
  }
  
  
  if(document.getElementById("rbSim").checked){
    alert("Que bom que você voltou a visitar esta página!")
  } else if (document.getElementById("rbNao").checked){
    alert("Volte sempre à está página!")
  } else{
    alert("Por favor responda a pesquisa.")
    return false;
  }

}

function Limpar(){
  var ele = document.meuForm.elements;
  for (let index = 0; index < ele.length; index++) {
    ele[index].value = ""
    
  }

}