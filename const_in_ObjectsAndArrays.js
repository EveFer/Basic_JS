/* Cuando tenemos un Array/Objects de tipo const no podemos
    reagsinar todo el arreglo/Objeto, pero si un elemento del arreglo*/

const num = [4,5,6,7]

num = [5,6,7,5] // esto marca un error

num[2] = 10 // esto si es correcto

// tambien se le pueden agregar elementos a un array y aplicarle todos lo metodos para array
num.push(50)

