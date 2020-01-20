// crear un objeto

const persona = {
    name: 'Fernanda',
    last_name: "Palacios",
    profession: "Web Developer",
    email: "fernandapalacios.dev@gmail.com",
    age: 24,
    music: ['pop', 'rock'],
    address: {
        city: 'CDMX',
        country: 'Mexico'
    },
    yearBirth: function(){
        return new Date().getFullYear() - this.age
    }
}

// Para acceder a datos de un objeto es por medio de punto.

console.log(persona.yearBirth())