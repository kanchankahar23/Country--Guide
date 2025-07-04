let searchbtn = document.getElementById('search-box');
let input = document.getElementById('search-inp');
searchbtn.addEventListener('click', () => {
    let result = document.getElementById('result');
    let countryinput = input.value;
    let url = `https://restcountries.com/v3.1/name/${countryinput}?fullText=true`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data[0].capital[0]);
            console.log(data[0].continents[0]);
            console.log(Object.values(data[0].currencies)[0].name);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(Object.values(data[0].languages).toString().split(",").join(","))
            result.innerHTML = `
        <img src = "${data[0].flags.svg}" class = "flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
        </div>
        </div>
                <div class="wrapper">
        <div class="data-wrapper">
        <h4>Continent:</h4>
        <span>${data[0].continents[0]}</span>
        </div>
        </div>
                <div class="wrapper">
        <div class="data-wrapper">
        <h4>Currency:</h4>
        <span>${Object.values(data[0].currencies)[0].name}</span>
        </div>
        </div>
         <div class="wrapper">
        <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${data[0].population}</span>
        </div>
        </div>
         <div class="wrapper">
        <div class="data-wrapper">
        <h4>Language:</h4>
        <span>${Object.values(data[0].languages).toString().split(" , ").join(" , ")}</span>
        </div>
        </div>
        `
        })
        .catch(() => {
            if(countryinput.length == 0){
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            }
            else{
                result.innerHTML=`<h3>Please enter a valid country name!!! </h3>`;
            }
        })
})