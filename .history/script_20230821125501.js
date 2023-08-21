const form = document.querySelector("[data-js-form");

cons
function handleSubmit(event) {
    event.preventDefault();

    const rating = new FormData(event.target).get("rating");

    console.log(event.target);
}

form.addEventListener("submit", handleSubmit);