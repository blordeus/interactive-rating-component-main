const rating_cards = document.querySelectorAll(".ratings-circle");
const submit_btn = document.querySelector(".submit-btn");
const thank_you = document.querySelector("#thank-you");
// Event Listeners
rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        rating_card.classList.toggle("active");
    });
})
submit_btn.addEventListener("click", (e) => {
    
})