var fraseUsuario =promt("hola, ingresa una frase");

for(var i = 0; i<fraseUsuario.length;i++){
  console-log(fraseUsuario.charAr(i),toUpperCase())
}
for(var i=0; i<fraseUsuario.length; i++){
  if(  fraseUsuario.charAr(i) !==" ")
  contadorLetras +=1
  else if (fraseUsuario.charAr(i) ==" ") {
    contadorEspacios++;
  }
}
console.log(contadorLetras, contadorEspacios);
