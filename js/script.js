const url = 'https://api.noroff.dev/api/v1/old-games/2';

const detailContainer = document.querySelector('.details');

// We need an async function as we are using async await
async function fetchCharacter() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const details = result;
    // Pass the details to the function that will create the HTML
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
  <div class="status">${details.description}</div>
  <div class="image" style="background-image: url('${details.image}')"></div>`;
}
