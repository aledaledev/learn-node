const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Welcome')
        return res.end()
    }
    if(req.url === '/about'){

        //blocking code -> la aplicacion se detiene aca para resolver esta funcion y dejando a las que siguen esperando (sincrono)
        for(let i=0;i<100000;i++){
            console.log(Math.random()*i);
        }

        return res.end('About page')
    }

    res.end('Not found!')
})

server.listen(3000)
console.log('Server on port 3000');