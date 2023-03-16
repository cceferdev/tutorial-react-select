


const Filter = [3,4,6,1,3,10,2,5,6,7,1,9,7,5]
let edad = 27

const Multip = Filter.map(function Multi(elementoActual) {
    return elementoActual * edad;

  });
console.log('El resultado de la multiplicacion de mi edad que es ', edad, 'Con la lista de arreglos es: ', Multip);


Filter.forEach(function(Filter) {
    console.log(Filter)
})



export default Filter;