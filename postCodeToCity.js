async function postCodeToCity(){

    let postnr = document.getElementById("post-nr").value;
    
    fetch('https://api.dataforsyningen.dk/postnumre/' + postnr)
    .then (Response=>{
        return Response.json();
    })
    .then(json=>{
        document.getElementById("city").innerHTML = json.navn;
        document.getElementById("kommune").innerHTML = json.kommuner.navn;
    })
    
    
}   