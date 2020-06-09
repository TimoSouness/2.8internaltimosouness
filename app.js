var productid = localStorage.getItem("productid");

if (productid == 1) {
  document.getElementById("checkout-image").src = "images/blackstone1.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Classic'";
  document.getElementById("checkout-desc").innerHTML = "rock 1";
}

if (productid == 2) {
  document.getElementById("checkout-image").src = "images/blackstone2.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Exotic'";
  document.getElementById("checkout-desc").innerHTML = "rock 2";
}

if (productid == 3) {
  document.getElementById("checkout-image").src = "images/blackstone3.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Modern'";
  document.getElementById("checkout-desc").innerHTML = "rock 2";
}

if (productid == 4) {
  document.getElementById("checkout-image").src = "images/blackstone4.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Headturner'";
  document.getElementById("checkout-desc").innerHTML = "rock 2";
}

if (productid == 5) {
  document.getElementById("checkout-image").src = "images/blackstone5.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Dinner Topic'";
  document.getElementById("checkout-desc").innerHTML = "rock 2";
}

if (productid == 6) {
  document.getElementById("checkout-image").src = "images/blackstone6.jpg";
  document.getElementById("checkout-header").innerHTML = "'The Bitsized'";
  document.getElementById("checkout-desc").innerHTML = "rock 2";
}
