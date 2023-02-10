let searchButton = document.getElementById("search-button");

function kommuneToHTML(kommune) {
    return '<p>' + kommune.navn + '</p>'

}

/** @returns {Promise<string[]>} */
async function fetchkommuner(postnummer) {
    let response = await fetch('https://api.dataforsyningen.dk/postnumre/' + postnummer);
    let data = await response.json();
    return data.kommuner;
}

searchButton.addEventListener("click", async () => {
    let postnummer = document.getElementById("post-nr").value;
    let kommuner = await fetchkommuner(postnummer);
    let kommuneElements = kommuner.map(kommuneToHTML);
    let kommuneElementsjoind = kommuneElements.join('');
    document.getElementById("kommune").innerHTML = kommuneElementsjoind;
})