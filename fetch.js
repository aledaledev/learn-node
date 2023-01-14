import fetch from 'node-fetch'

/*
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data))
*/

//nos podemos ahorrar la funcion async await
//async function getData(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
//}
//getData()