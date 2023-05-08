let msg_header = document.getElementById('msg-from-backend')
let btn = document.getElementById('btn')


btn.addEventListener("click", (e) => {
    fetch("http://localhost:3000/hello")
    .then(resp => resp.json())
    .then(data => msg_header.innerText = data.msg)
    .catch(err => console.log(err))
})
