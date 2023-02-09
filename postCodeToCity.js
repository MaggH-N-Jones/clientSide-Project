async function postCodeToCity(){
    document.getElementById("kommune").innerHTML = "Hello World";
    document.getElementById("city").innerHTML = "Hello World";

    var postnr = document.getElementById("city").value
    fetch('https://api.dataforsyningen.dk/postnumre/' + postnr)
}