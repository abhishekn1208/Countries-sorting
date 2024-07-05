let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`

let container = document.getElementById("container")




async function getData(URL){
    let response = await fetch(`${URL}`)
    let data1 = await response.json();
    countries = data1.data

    displayData(countries)
}
getData(URL);

function displayData(arr){
    container.innerHTML = "";
    arr.forEach((ele) => {
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
  
 getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc`)
}