// What this script does: on the store.html page you'll see the anchor tag to purchase sets 'productid' to a number of 1 to 6.
// The value of the variable 'productid' allows the page the anchor tag leads to (checkout.html) to have different content assigned depending on which of the six links were clicked.
// Looking below you'll see if the first link was clicked a certain image, header, and description will be shown on checkout.html, whereas if you clicked the 4th link a different image, header, and description will be assigned.

var productid = localStorage.getItem("productid");

if (productid == 1) {
  document.getElementById("checkout-image").src = "images/blackstone1.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Classic'";
  document.getElementById("checkout-desc").innerHTML = "A tried and true choice, 'The Classic' is sure to please anyone. One of these is a great choice as a gift for a family member you're not quite sure how to sway.";
}

if (productid == 2) {
  document.getElementById("checkout-image").src = "images/blackstone2.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Exotic'";
  document.getElementById("checkout-desc").innerHTML = "A little something out of the ordinary, 'The Exotic' is the perfect addition to your private island, dutifully sitting just off the shore.";
}

if (productid == 3) {
  document.getElementById("checkout-image").src = "images/blackstone3.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Modern'";
  document.getElementById("checkout-desc").innerHTML = "A little something to bring your mansion into the 21st century, 'The Modern' goes well in a room that perhaps the last inheritor forgot to update.";
}

if (productid == 4) {
  document.getElementById("checkout-image").src = "images/blackstone4.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Headturner'";
  document.getElementById("checkout-desc").innerHTML = "Quite possibly the peak of sophistication, 'The Headturner' is sure to do just that. With it's unrelenting, yet refreshingly natural geomotry, this stone is sure to be welcome edition to any place of residence.";
}

if (productid == 5) {
  document.getElementById("checkout-image").src = "images/blackstone5.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Dinner Topic'";
  document.getElementById("checkout-desc").innerHTML = "Though transportation fees are not included, don't think 'The Dinner Topic' is not a underpriced gem. Currently going for a quarter of it's original price, this stone has been priced to clear.";
}

if (productid == 6) {
  document.getElementById("checkout-image").src = "images/blackstone6.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Bitsized'";
  document.getElementById("checkout-desc").innerHTML = "Filling the niche of sophisticated yet prortable stones, 'The Bitsized' will trustfully complete this role, and many others.";
}
