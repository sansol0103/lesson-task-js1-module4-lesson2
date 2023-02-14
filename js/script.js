const url = 'https://api.noroff.dev/api/v1/old-games/2';

const detailContainer = document.querySelector(".details");

async function fetchCharacter() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        const details = result;

        createHtml(details);
    }   catch (error) {
        console.log(error);
        detailContainer.innerHTML = error;
    }
}

function createHtml(details) {
  detailContainer.innerHTML = `<h1 class="name">${details.name}</h1>
                                    <div class="status">${details.description}</div>
                                    <div class="image" style="background-image: url('${details.image}')"></div>`;
}