import "./styles.css";


document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".price-card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      cards.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
    });
  });
});