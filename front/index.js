let msg_header1 = document.getElementById('msg-from-backend-rust')
let btn1 = document.getElementById('btn1')

let msg_header2 = document.getElementById('msg-from-backend-django')
let btn2 = document.getElementById('btn2')


btn1.addEventListener("click", (e) => {
    fetch("http://localhost:3000/hello")
    .then(resp => resp.json())
    .then(data => msg_header1.innerText = data.msg)
    .catch(err => console.log(err))
})

btn2.addEventListener("click", (e) => {
    fetch("http://localhost:8000/hello/")
    .then(resp => resp.json())
    .then(data => msg_header2.innerText = data.msg)
    .catch(err => console.log(err))
})
