let slider = document.querySelector(".slider-contenedor")
let sliderIndividual= document.querySelectorAll(".contenido-slider")

let contador = 1; 
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

let derecha = document.querySelector(".siguiente")

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;

})

setInterval(function(){
    slides();
},intervalo);


    derecha.addEventListener("click", ()=>{
        sliderIndividual.style.trasnform = "translate("+(-width*contador)+"px)";
    })

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .7s";
    contador++;
    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)"
            slider.style.transition = "transform 0s";
            contador = 1;
        })
    }
}


