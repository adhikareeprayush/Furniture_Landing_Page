// Get references to DOM elements with specific IDs
var person = document.getElementById('person');
var heart = document.getElementById('heart');
var cart = document.getElementById('cart');
var search = document.getElementById('search');

// Event listener for mouseover on the 'person' icon
person.addEventListener("mouseover", function() {
    // Add the filled exclamation class and remove the unfilled class
    person.classList.add("bi-person-fill-exclamation");
    person.classList.remove("bi-person-fill");
});

// Event listener for mouseout on the 'person' icon
person.addEventListener("mouseout", function() {
    // Remove the filled exclamation class and add the unfilled class
    person.classList.remove("bi-person-fill-exclamation");
    person.classList.add("bi-person-fill");
});

// Event listener for mouseover on the 'heart' icon
heart.addEventListener("mouseover", function() {
    // Add the filled class and remove the unfilled class
    heart.classList.add("bi-heart-fill");
    heart.classList.remove("bi-heart");
});

// Event listener for mouseout on the 'heart' icon
heart.addEventListener("mouseout", function() {
    // Remove the filled class and add the unfilled class
    heart.classList.remove("bi-heart-fill");
    heart.classList.add("bi-heart");
});

// Event listener for mouseover on the 'cart' icon
cart.addEventListener("mouseover", function() {
    // Add the filled class and remove the unfilled class
    cart.classList.add("bi-cart-fill");
    cart.classList.remove("bi-cart");
});

// Event listener for mouseout on the 'cart' icon
cart.addEventListener("mouseout", function() {
    // Remove the filled class and add the unfilled class
    cart.classList.remove("bi-cart-fill");
    cart.classList.add("bi-cart");
});

// Event listener for mouseover on the 'search' icon
search.addEventListener("mouseover", function() {
    // Add the filled class and remove the unfilled class
    search.classList.add("bi-search-heart-fill");
    search.classList.remove("bi-search");
});

// Event listener for mouseout on the 'search' icon
search.addEventListener("mouseout", function() {
    // Remove the filled class and add the unfilled class
    search.classList.remove("bi-search-heart-fill");
    search.classList.add("bi-search");
});
