async function addrToPost(){

    let bynavn = document.getElementById("zip-name").value;
    
    fetch('https://api.dataforsyningen.dk/supplerendebynavne/' + bynavn)
    .then (Response=>{
        return Response.json();
    })
    .then(json=>{
        document.getElementById("zip").innerHTML = json.postnumre[0].nr;
    })
    
    
}   