// (function(){
//     const listElements = document.querySelectorAll('.menu__item--show')
//     const liste = document.querySelector('.menu__links')
//     const menu = document.querySelector('.menu__hamburguer')


//     const addClick = ()=>{
//         listElements.forEach(element => {
//             element.addEventListener('click', ()=>{
//                 let subMenu = element.children[1]
//                 let heigth = 0;
//                 element.classList.toggle("menu__item--active")
//                 if(subMenu.clientHeigh===0){
//                     heigth = subMenu.scrollHeigth;
//                 }

//                 subMenu.style.heigth = `${heigth}px`;
//             })
//         });
//     }


//     addClick();
// })();


let menuLinks = document.getElementById("menu-links");
let menuham = document.getElementById("menu-hamburguer");


menuham.addEventListener("click", ()=>{
    menuLinks.classList.toggle("active")
})

