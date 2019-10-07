document.getElementById("burger").addEventListener("click", function(event){
    event.target.classList.toggle("burgerclose");
    document.getElementById("burgermenus").classList.toggle("hidden");
})