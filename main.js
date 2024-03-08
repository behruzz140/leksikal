async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET'
    })

datas =await response.json()

console.log(words);
}
getUsers()

