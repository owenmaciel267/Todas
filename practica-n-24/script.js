const liItems = document.querySelectorAll("ul li")
const imgItems = document.querySelectorAll(".productos img")

liItems.forEach(li => {
  li.onclick = function() {
    // activar

    liItems.forEach(li => {

      li.classList.remove("active")

    });
    
    li.classList.add("active")

    // filtrar
    const value = li.textContent.toLowerCase();

    imgItems.forEach(img => {

      img.style.display = "none"


      if (img.getAttribute("data-filter").toLowerCase() === value || value === "todos") {
        img.style.display = "block"
      }

    })


  }

})
