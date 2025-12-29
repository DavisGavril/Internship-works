const apiKey = "a03ba24649f172640de16d73665008bc";

function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data);
        
        })
        .catch(error => {
            result.innerHTML = "Error fetching data";
            console.log(error);
        });
}
