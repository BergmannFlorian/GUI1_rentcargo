document.getElementById("burger").addEventListener("click", function(event){
    event.target.classList.toggle("burgergold");
    document.getElementById("burgermenus").classList.toggle("hidden");
})