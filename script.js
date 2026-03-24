// Připraveno pro budoucí dynamické přidávání dlaždic

const cardsContainer = document.getElementById("cards-container");

function addCard(image, link) {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    col.innerHTML = `
        <a href="${link}" class="card-link">
            <div class="card-tile">
                <img src="${image}" alt="Logo">
            </div>
        </a>
    `;

    cardsContainer.appendChild(col);
}

// Příklad použití:
// addCard('https://via.placeholder.com/300', '#');
