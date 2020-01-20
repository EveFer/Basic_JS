const numero1 = 30,
      numero2 = "10",
      numero3 = "dos";

/*Convertir de string a numero */      
console.log(numero1 + Number(numero2))
console.log(numero1 + parseInt("50"))
/*JS no puede sumar un string con un number, pero si puede restarlo */
console.log(numero1 - numero2)
/*Si se convierte un valor no posible a number retorna un valor NaN */
console.log(parseInt(numero3))

let dato;
dato = Number("30") // 30
dato = Number("45.68948") // 45.68948
dato = Number(true) // 1
dato = Number(false) // 0
dato = Number(null) // 0
dato = Number(undefined) // NaN
dato = Number('Hola mundo') // NaN
dato = Number([1,2,3,4]) // NaN

// ParseFloat and ParseInt
dato = parseInt('100') // 100
dato = parseFloat('100') // 100
dato = parseFloat('100.230') // 100.23
dato = parseInt('100.340') // 100

// tofixed -> solo aplica para numbers
dato = 293904902 // toFixed() 293904902
dato = 229302934.3902980982 // toFixed() 229302934
dato = 30982093.348928323 // toFixed(3) 30982093.348


console.log(dato.toFixed(3))
