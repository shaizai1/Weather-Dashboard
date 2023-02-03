//add event listener on submit
let apiKey = ""

fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={Api key}")
.then(response => response.JSON())
.then (citiesFound => {
    let firstCity = citiesFound[0];
    console.log(firstCity.lon);
    console.log(firstCity.lat)
    return fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=${apiKey}`)


})
.then(response => response.JSON())
.then(data=>{
    console.log(data);
})
