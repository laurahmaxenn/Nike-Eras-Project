document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var AddBtn = document.getElementById("addToBag");
  var cartBtn = document.getElementById("goToCart");

  document.addEventListener("click", function (event) {
    if (event.target.id == "modal") {
      closeModal();
    }
  });
  AddBtn.addEventListener("click", function (event) {
    openModal();
  });
  cartBtn.addEventListener("click", function (event) {
    window.location.href = "/cart/";
  });
});

function openModal() {
  var modal = document.getElementById("modal");
  modal.classList.remove("hidden");
}
function closeModal() {
  var modal = document.getElementById("modal");
  modal.classList.add("hidden");
}
