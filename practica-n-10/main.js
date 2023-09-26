const toggleMenu = document.getElementById("toggle-menu")
const mainNav = document.getElementById("main-nav")
const mainMenu = document.getElementById("main-menu")

toggleMenu.addEventListener("click", ()=>{
    mainNav.classList.toggle("nav--show")
    mainMenu.classList.toggle("main-menu--show")
})

Window.addEventListener("resize",()=>{
    if(mainNav.classList.contains("nav--show")){
        mainNav.classList.remove("nav--show")
    
    mainMenu.classList.remove("main-mmenu--show")
    }
})