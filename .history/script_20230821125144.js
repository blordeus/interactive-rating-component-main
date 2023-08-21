const form = document.querySelector("[data-js-form");

function handleSubmit(event) {
    event.preventDefault();

    const rating = new FormData(event)

    console.log(event.target);
}

form.addEventListener("submit", handleSubmit);