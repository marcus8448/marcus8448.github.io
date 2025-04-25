window.onload = function() {
  let burger = document.getElementById("nav-burger");

  burger.addEventListener("click", function() {
    burger.classList.toggle("active");
    let nav = document.getElementById("nav-dropdown");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  })
}
