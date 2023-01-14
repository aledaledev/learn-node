const {createReadStream} = require('fs')
const { Stream } = require('stream')
/*const {writeFile} = require('fs/promises')

//cada letra del string ocupa 1 byte

const createBigFile = async () => {
    await writeFile('./archives/bigFile.txt','hello world'.repeat(10000))
}
createBigFile()*/

const stream = createReadStream('./archives/bigFile.txt','utf-8',{
    //flags...
})

//cuando se reciban los datos 
stream.on('data', function (chunk) {
    console.log(chunk);
})

stream.on('end',() => {
    console.log('finished!');
})

stream.on('error',error => {
    console.log(error);
})