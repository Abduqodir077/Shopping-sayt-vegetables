let btn = document.getElementById("btn");
let cart = document.querySelector(".to-cart");
let p = document.getElementById("demo");

btn.addEventListener("click", function(){
    cart.style.display = "flex";
    // alert("salom");
})

p.addEventListener("click", function(){
    cart.style.display = "none";
})

// nav.style.display = "none";