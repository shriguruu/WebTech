//JavaScript file for the Weather Dashboard

//API key:
const apiKey = "6617ae0602114cc4ac283640253107";

// Method to get the weather details using the weatherapi API 
async function getWeather(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        document.getElementById("cityName").textContent = data.location.name;
        document.getElementById("temp").textContent = `${data.current.temp_c}°C`;
        document.getElementById("weatherDesc").textContent = data.current.condition.text;
        document.querySelector(".humidity").textContent = `${data.current.humidity}%`;
        document.querySelector(".wind").textContent = `${data.current.wind_kph} km/h`;
        document.querySelector(".card").style.display = "flex";
        document.querySelector(".card img").src = data.current.condition.icon;
    }
    catch(error) {
        alert(error.message);
    }
}

//Method to search weather for the input
function searchWeather() {
    const city = document.getElementById("cityInput").value;
    if (city) {
        getWeather(city);
    }
}

//Initialize the page and setting up event listeners
document.addEventListener('DOMContentLoaded',function(){
    
    document.querySelector(".card").style.display = "none";

    const cityInput = document.getElementById("cityInput");
    cityInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter')
        {
            searchWeather();
        }
    });
});
