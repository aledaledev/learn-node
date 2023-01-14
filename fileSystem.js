const fs = require('fs')
//para leer, modificar, borrar y crear archivos

/*
//leer archivos
const unix = fs.readFileSync('./archives/unix.txt','utf-8')
console.log(unix);

//crear archivo
fs.writeFileSync('./archives/koni.txt','koni sapent!')

//modificar contenido
const content = 'saturday night'
fs.writeFileSync('./archives/koni.txt',content,{
    flag:'a'    //añadir contenido
})
*/

//callback hell -> podemos usar async/await
//leer archivos asincronamente (usando callbacks)
fs.readFile('./archives/unix.txt','utf-8', (error,data) => {
    if(error) return console.log(error)
    console.log(data);

    //despues de leer el archivo va modificar otro
    fs.writeFile('./archives/koni.txt','lopez',{flag:'a'},(error,data) => {
        if(error) return console.log(error)
        return true
    })
})