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
    thank_you.classList.toggle("hidden");
    rating_cards.forEach((rating_card) => {
        rating_card.classList.remove("active");
    })
})
// 10. Scroll to top button
window.onscroll = () =>{
    if(document.documentElement.scrollTop > 100){
        document.getElementById("myBtn").style.display = "block";
    }else{
        document.getElementById("myBtn").style.display = "none";
    }
}
