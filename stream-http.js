const http = require('http')
const {createReadStream} = require('fs')

const server = http.createServer((req,res) => {

    //datos se envian por partes
    const fileStream = createReadStream('./archives/bigFile.txt',{
        encoding:'utf-8'
    })

    fileStream.on('data', chunk => {
        fileStream.pipe(res)
    })

    fileStream.on('error', err => {
        console.log(err);
    })

})
server.listen(3000)
console.log('server on port 3000');