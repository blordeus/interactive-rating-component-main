const form = document.querySelector("[data-js-form");

function handleSubmit(event) {
    event.preventDefault();

    console.log(event.target);
}

form.addEventListener("submit", handleSubmit);