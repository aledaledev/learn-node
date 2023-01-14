const {readFile} = require('fs/promises')
//leer arch ivos con promesas incluido

//equivale a ...
//const {readFile} = require('fs')
//const { promisify } = require('util')

//const readFilePromise = promisify(readFile)
//equivale a ...
/*function getText(pathFile){
    return new Promise(function (resolve,reject){
        readFile(pathFile,'utf-8',(err,data) => {
            if(err) return reject(err)
            resolve(data)
        })
    })
}*/

//classic promise
/*
getText('./archives/unix.txt') 
.then(data => console.log(data))
.then(() => getText('./archives/koni.txt'))
.then(data => console.log(data))
.catch(err => console.log(err))
*/

//async-await
async function read(){
    try {
        const result = await readFile('./archives/unix.txt')
        const result2 = await readFile('./archives/koni.txt','utf-8')
        console.log(result.toString());
        console.log(result2);
        //throw new Error('fatal error')
    } catch (error) {
        console.log(error);
    }
}
read()