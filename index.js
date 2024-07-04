let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`

let container = document.getElementById("container")
let countries = [];

getData();

async function getData(){
    let response = await fetch(URL)
    let data1 = await response.json();
    countries = data1.data

    displayData(countries)
}

function displayData(countries){
    container.innerHTML = "";
    countries.forEach((ele) => {
        let card = document.createElement("div")
        card.style.border = "1px solid black"
        card.style.textAlign = "center"
        card.innerHTML = `<h3>Country : ${ele.country}</h3>
        <p>Rank : ${ele.Rank}</p>
        <p>Population : ${ele.population}</p>`

        container.appendChild(card)
    });
}

document.getElementById("sort").addEventListener("click", function(){
    sortData();
})

function sortData(){
 
        const sortcountry = [...countries].sort((a,b)=> b.population - a.population)
        console.log(sortcountry)

    displayData(sortcountry)
}