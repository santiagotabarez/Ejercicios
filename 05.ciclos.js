/*
  Ciclos
*/

let lista = [2, 10, 50];

/*
  Use un ciclo "for" para recorrer la lista de numeros y llamar a la funcion check con cada elemento de la lista
  NOTA: check es una funcion que recibe cualquiera dato.
  */
function cicloFor(check) {
  // Define el ciclo for aqui
  for(1=0; i <= lista.length; i++)
  check(lista[i])
}
/*
  Usa un ciclo "while" para recorrer la lista de numeros y llamar a la funcion check con cada elemento de la lista
*/
function cicloWhile(check) {
  // Define el ciclo while aqui
  let i=0
  while(i<lista.length){
    check(lista[i]);
    i++;
  }
}
