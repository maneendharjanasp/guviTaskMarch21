var countryRequest = new XMLHttpRequest();
countryRequest.open("GET", "https://restcountries.eu/rest/v2/all", true);
countryRequest.send();
countryRequest.onload = function(){
    var countryData = JSON.parse(this.response);
    displayWeatherDetails(countryData, countryData[0], 0, countryData.length);
}

function displayWeatherDetails(countryData, country, count, size){
    var weatherRequest = new XMLHttpRequest();
    var weatherURL = encodeURI("api.openweathermap.org/data/2.5/weather?q="+country.name+"&appid=47cb9415c8d6cbd829e6fa6f092f9977");
        if(country.latlng[0] || country.latlng[1]){
            weatherURL = encodeURI("http://api.openweathermap.org/data/2.5/weather?lat="+country.latlng[0]+"&lon="+country.latlng[1]+"&appid=47cb9415c8d6cbd829e6fa6f092f9977");
        }
        weatherRequest.open("GET", weatherURL, true);
        weatherRequest.send();
        weatherRequest.onload = function(){
            var weather = JSON.parse(this.response);
            console.log(count+1+". Country Name : "+country.name+" | Latitude : "+weather.coord.lat+" | Longitude : "+weather.coord.lon+" | Weather Today : "+weather.weather[0].description+" | Temperature : "+weather.main.temp);
            count++;
            if(count < size){
                displayWeatherDetails(countryData, countryData[count], count, size);
            } 
        }
        weatherRequest.onerror = function(){
            console.log(count+1+". Cannot display details for Country : "+country.name+" due to error in fetching details.");
            count++;
            if(count < size){
                displayWeatherDetails(countryData, countryData[count], count, size);
            } 
        }
}