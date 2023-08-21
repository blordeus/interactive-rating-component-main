const rating_cards = document.querySelectorAll(".ratings-circle");
const submit_btn = document.querySelector(".submit-btn");
const thank_you = document.querySelector("#thank-you");
const rating = document.querySelector("rating");
const rate_point = document.getElementById("rate");

let rate
// Event Listeners
rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        rating_card.classList.toggle("active");
    });
})
submit_btn.addEventListener("click", (e) => {
    thank_you.classList.toggle("hidden");
    rating_cards.forEach((rating_card) => {
        rating_card.classList.remove("active");
    })
})
