//product price
var price = 50,
    memberDiscount = .10,
    memberPrice = price - (price * memberDiscount),
    priceEl = document.getElementById('price'),
    memberPriceEl = document.getElementById('member-price');

priceEl.textContent = price.toFixed(2);
memberPriceEl.textContent = memberPrice.toFixed(2);