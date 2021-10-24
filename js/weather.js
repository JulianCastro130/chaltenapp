$(document).ready(function(){
    $("#form-submit").submit(function(event){
        performSearch(event);
    });
});

function performSearch(event) {
    var request;
    event.preventDefault();

    request = $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather`,
        type: "GET",
        data: {
            q: $('#city').val(),
            appid: 'fc6585d1d517a717294b77d148873d02',
            units: 'metric'
        }
    });

    request.done(function(response){
        formatSearch(response);
    });
}

function formatSearch(jsonObjet) {
    var city_name = jsonObjet.name;
    var city_weather = jsonObjet.weather[0].main;
    var city_desc = jsonObjet.weather[0].description;
    var city_temp = jsonObjet.main.temp;
    var city_wind = jsonObjet.wind.speed;

    $("#city-name").text("City: "+city_name);
    $("#city-weather").text("Weather: "+city_weather);
    $("#city-desc").text("Desc: "+city_desc);
    $("#city-temp").text("Temperature: "+city_temp+" Celsius");
    $("#city-wind").text("Wind Speed "+city_wind+" Km/h");
}