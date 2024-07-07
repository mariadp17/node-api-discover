const url="http://localhost:5500/api"

const newUser = {
    name: "Maria",
    avatar: "https://avatars.githubusercontent.com/u/120607567?s=400&u=c8eec6238116165da41f577d3034dfe4b8d7d9bc&v=4",
    city: "Natal"
}

const upUser = {
    name: "Cebolinha",
    avatar: "http://lorempixel.com.br/500/400/?1",
    city: "São Paulo"
}

function getUser(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getUser()

function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
// addNewUser()

function updateUser() {
    axios.put(`${url}/1`, upUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
updateUser()