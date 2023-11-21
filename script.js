var person = document.getElementById('person');
var heart = document.getElementById('heart');
var cart = document.getElementById('cart');
var search = document.getElementById('search');

person.addEventListener("mouseover", function() {
    person.classList.add("bi-person-fill-exclamation");
    person.classList.remove("bi-person-fill");
});

person.addEventListener("mouseout", function() {
    person.classList.remove("bi-person-fill-exclamation");
    person.classList.add("bi-person-fill");
});

heart.addEventListener("mouseover", function() {
    heart.classList.add("bi-heart-fill");
    heart.classList.remove("bi-heart");
});

heart.addEventListener("mouseout", function() {
    heart.classList.remove("bi-heart-fill");
    heart.classList.add("bi-heart");
});

cart.addEventListener("mouseover", function() {
    cart.classList.add("bi-cart-fill");
    cart.classList.remove("bi-cart");
});

cart.addEventListener("mouseout", function() {
    cart.classList.remove("bi-cart-fill");
    cart.classList.add("bi-cart");
});

search.addEventListener("mouseover", function() {
    search.classList.add("bi-search-heart-fill");
    search.classList.remove("bi-search");
});

search.addEventListener("mouseout", function() {
    search.classList.remove("bi-search-heart-fill");
    search.classList.add("bi-search");
});
