// Create Arrays

const numero = [10,20,30,40,50]


// Array mixed
const mixed = ['Hola', 1, 'Mundo', null, undefined, true, [2,3,4], {name: 'Fernanda'}]

// Array of String (alternative method)

const months = new Array('Enero', 'Febrero', 'Marzo', 'Abril')

// methods to arrays
let data;
    // length()
data = months.length
    // para conocer si un arreglo es un arreglo
data = Array.isArray(months)
    // Acceder a elementos de un array
data = months[3]
    // para agregar datos aun arreglo
months[4] = 'Mayo'
months.push('Junio') // lo agrega al final del arreglo
months.unshift('Mes 0') // agregar al inicio de un areglo

    // Eliminar elemento de un arreglo
months.pop() // elimina al final del arreglo
months.shift() // elimina al principio del arreglo
months.splice(2, 1) // elimina dandole el index y la cantidad de desea eliminar
months.reverse() // coloca de forma inversa al arreglo

    // Unir 2 arreglos
let array1 = [3,45,6],
    array2 = [5,6,7];

    console.log(array1.concat(array2))

    // ordenar un arreglo de string
let frutas = ['Naranja', 'Guayaba', 'Kiwi', 'Fresa', 'Sandia']
frutas.sort()
    // ordernar un arreglo de numberos
array1 = [56,12,4,5,98,4,2,0,3,1]

array1.sort(function(x,y) {
    return x - y
})

console.log(array1)

data = months
    // encontrar un elemento en un arreglo
data = months.indexOf('Abril')



console.log(months)
console.log(data)