const product1 = 'Pizza',
      price1 = 180,
      product2 = 'Hamburger',
      price2 = 75;

let html;

// Forma anterior de concatenar

html = '<ul>' +
        '<li>Orden: ' + product1 + '</li>'+
        '<li>Price: ' + price1 + '</li>'+
        '<li>Orden: ' + product2 + '</li>'+
        '<li>Price: ' + price2 + '</li>'+
        '<li>Total: ' + (price1 + price2) + '</li>'+
       '</ul>';

// con Template Literal

html = `
     <ul>
        <li>Orden: ${product1} </li>
        <li>Price: ${price1} </li>
        <li>Orden: ${product2} </li>
        <li>Price: ${price2} </li>
        <li>Total: ${total(price1, price2)} </li>
     </ul>
`

function total(p1, p2) {
    return p1 + p2
}


document.getElementById('app').innerHTML = html