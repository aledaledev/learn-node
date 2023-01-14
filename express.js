//usamos express en lugar de http
import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send(`<h1>Home</h1>`)
})  

app.get('/about', (req,res) => {
    res.send(`<h2>About</h2>`)
})  

app.listen(3000)
console.log('server on port 3000');
