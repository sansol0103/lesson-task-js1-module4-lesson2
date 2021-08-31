const url = "https://breakingbadapi.com/api/characters/6";

const detailContainer = document.querySelector(".details");

// we need an async function as we are using await
async function fetchCharacter() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        // the endpoint is an array with one result, so we need to access the first item in the array
        const details = result[0];
        // pass the details to the function that will create the HTML
        createHtml(details);
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = error;
    }
}

// call the function
fetchCharacter();

function createHtml(details) {
    detailContainer.innerHTML = `<h1 class="name">${details.name}</h1>
                                <div class="image" style="background-image: url('${details.img}')"></div>
                                <div class="status">Status: <b>${details.status}</b></div>`;
}
