//welcome message
var user = 'Mike';
var salutation = 'Hello, ';
var greeting =  salutation + user + '! Here are the Pizza Reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 15,
    memberDiscount = .20,
    memberPrice = price - (price * memberDiscount),
    priceEl = document.getElementById('price'),
    memberPriceEl = document.getElementById('member-price');

priceEl.textContent = price.toFixed(2);
memberPriceEl.textContent = memberPrice.toFixed(2);