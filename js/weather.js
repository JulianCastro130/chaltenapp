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

    $("#city-name").text("Ciudad: "+city_name);
    $("#city-weather").text("Clima: "+city_weather);
    $("#city-desc").text("Descripción: "+city_desc);
    $("#city-temp").text("Temperatura: "+city_temp+" °C");
    $("#city-wind").text("Velocidad del viento "+city_wind+" Km/h");
}