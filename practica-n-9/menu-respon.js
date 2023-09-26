const ham = document.getElementById("ham")
const menu = document.getElementById("nav__menu")

const pan = document.querySelectorAll(".ham span")

ham.addEventListener("click", ()=>{
    menu.classList.toggle("active")

    pan.forEach(child=>{
        child.classList.toggle("animado")
    })
})


