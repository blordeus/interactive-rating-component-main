const rating_cards = document.querySelectorAll(".ratings");
const submit_btn = document.querySelector(".submit_btn");
const thank_you = document.getElementById("thank_you");
const rating = document.getElementById("rating_section");
const rate_point = document.getElementById("rate");

let rate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        const active = document.querySelector('.checked');
        if (active) {
            active.classList.remove("checked")
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    });
})

submit_btn.addEventListener("click", () => {
    if (rate) {
        rate_point.innerText = rate;
        rating.classList.add("hidden");
        thank_you.classList.remove("hidden");
    }
})