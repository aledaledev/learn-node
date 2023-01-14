const path = require("path");
//dependiendo el os se implementan distintas configuraciones (path te lo soluciona)

//une direcciones dependiendo del os
const filePath = path.join('/home','styles','main.css')

//retorna solo direccion principal
console.log(path.basename(filePath))

//devuelve toda la ruta menos el archivo principal
console.log(path.dirname(filePath))

//objeto de informacion de la ruta pasada
console.log(path.parse(filePath))

//añade una ubicacion a la ruta actual
console.log(path.resolve('components'))