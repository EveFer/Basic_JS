const numero1 = 15
const numero2 = 50
const numero3 = "50"

console.log(numero1 > numero2)
console.log(numero1 < numero2)

// comparador de igual
// este primero compara si el valor es igual, sin embargo no es muy estricto ya que no verifica el tipo de dato
console.log(numero2 == numero3)
// sin encambio el triple igual es mas estricto ya que verifica si el tipo de dato es igual
console.log(numero2 === numero3)

// diferente de 
console.log( 2!=3)

// JS, tambien se pueden realizar comparaciones entre letras
// las de menor rango son las letras Mayusculas ABCDE...Z y las de mayor rango son las munusculas abcde...z

console.log('z' > 'A')