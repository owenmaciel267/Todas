let products ={
    data: [
        {
            produtName : "Hamburguesas",
            category : "Comida",
            price : 30,
            img: "./img/1.jpg",
        },
        {
            produtName : "Pastel de papa",
            category : "Comida",
            price : 30,
            img: "./img/2.jpg",
        },{
            produtName : "Tacos",
            category : "Comida",
            price : 30,
            img: "./img/3.jpg",
        },{
            produtName : "Milanga",
            category : "Comida",
            price : 30,
            img: "./img/4.jpg",
        },
        
        {
            produtName : "Auto lamborguini",
            category : "Autos",
            price : 30,
            img: "./img/6.jpg",
        },
        {
            produtName : "Auto 4puertas chevrolet",
            category : "Autos",
            price : 30,
            img: "./img/7.jpg",
        },
        {
            produtName : "Auto 4puertas fiat",
            category : "Autos",
            price : 30,
            img: "./img/8.jpg",
        },

        {
            produtName : "Casas moderna",
            category : "Casas",
            price : 30,
            img: "./img/9.jpg",
        },
        {
            produtName : "Casas moderna minimalista",
            category : "Casas",
            price : 30,
            img: "./img/10.jpg",
        },
        {
            produtName : "Casas con pileta",
            category : "Casas",
            price : 30,
            img: "./img/11.jpg",
        },


        {
            produtName : "Viajes a madrid",
            category : "Vuelos",
            price : 30,
            img: "./img/12.jpg",
        },{
            produtName : "viajes a buenos aires",
            category : "Vuelos",
            price : 30,
            img: "./img/13.jpg",
        },
    ]
}
for (let i  of products.data){
    // Create cards
    let card = document.createElement("div")
    // card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide")

    // imagen div
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")
    // img tag
    let image = document.createElement("img")
    image.setAttribute("src", i.img)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    
    // container
    let container = document.createElement("div")
    container.classList.add("container")
    // product name
    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = i.produtName.toUpperCase()
    container.appendChild(name)

    // prices
    let price = document.createElement("div")
    price.classList.add("price")
    price.innerText = "$" + i.price
    container.appendChild(price)



    card.appendChild(container)
    document.getElementById("products").appendChild(card)

}
// parameter passed from button (parameter same as category)

// initially all products
function filterProduct (value){
    // buttion class code
    let buttons = document.querySelectorAll(".button-value")

    buttons.forEach((buttons)=>{
        // check if value equals innerText
        if(value.toUpperCase() == buttons.innerText.toUpperCase()){
            buttons.classList.add("active")
        }else{
            buttons.classList.remove("active")
        }
    })



    // select all cards
    let elements = document.querySelectorAll(".card")
    // loop through all cards
    elements.forEach((element)=>{
        if(value == "all"){
            element.classList.remove("hide")
        }else{
            // check if element contains category class
            if(element.classList.contains(value)){
                // display element based on category
                element.classList.remove("hide")
            }
            else{
                // hide other elements
                element.classList.add("hide")
            }
        }
    })
}

// search button click
document.getElementById("search").addEventListener("click", ()=>{
    // initializations
    let searchInput = document.getElementById("search-input").value
    
    let elements = document.querySelectorAll(".product-name")

    let cards = document.querySelectorAll(".card")

    // loop throung all elements
    elements.forEach((element, index) =>{
        // check if text includes the search value

        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide")
        }else{
            // hide others
            cards[index].classList.add("hide")
        }
    })

})


// initially display all products
window.onload = ()=>{
    filterProduct("all")
}