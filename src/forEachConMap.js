const Filter = [
{id:3},
{id:2},
{id:6},
{id:7}
]
let edad = 27
console.log(Filter)

Filter.forEach((otraCosa, index) => console.log(`Multiplicando mi edad ${edad} con ${otraCosa.id} El resultado Sería ${otraCosa.id*edad}`));

const numerosPares = Filter.filter(function(otraCosa){
  return otraCosa.id % 2 === 0
    
})
console.log('Cantidad de Numeros pares dentro del arreglo:',numerosPares.length)
console.log('Numero que son pares dentro del arreglo:',numerosPares)

const numerosPares2 = Filter.filter(function(otraCosa){
  return otraCosa.id % 2 === 0
    
})
console.log('Numeros pares dentro del resultado de la multiplicacion' ,numerosPares2)

export default Filter;