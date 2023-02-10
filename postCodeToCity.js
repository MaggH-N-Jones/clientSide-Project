let searchButton = document.getElementById("search-button");

function kommuneToHTML(kommune) {
    return '<p>' + kommune.navn + '</p>'

}

/** @returns {Promise<string[]>} */
async function fetchkommuner(postnummer) {
    let response = await fetch('https://api.dataforsyningen.dk/postnumre/' + postnummer);
    let data = await response.json();
    return data;
}

searchButton.addEventListener("click", async () => {
    let postnummer = document.getElementById("post-nr").value;
    let response = await fetchkommuner(postnummer);
    let kommuneElements = response.kommuner.map(kommuneToHTML);
    let kommuneElementsjoind = kommuneElements.join('');
    document.getElementById("kommune").innerHTML = kommuneElementsjoind;
    document.getElementById("city").innerHTML = "zip name: " + response.navn;
})