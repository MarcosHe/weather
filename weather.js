window.onload = function() {

var zip;
var requestString;
var latitude;
var longitude;

var xhttp = new XMLHttpRequest();

var response;
  
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            requestString = "https://api.darksky.net/forecast/2b8648eea6ad7f5f349ffe98a5164a20/{lat},{lon}?exclude=minutely,hourly,daily";
            requestString = requestString.replace(/{lat}/, latitude);
            requestString = requestString.replace(/{lon}/, longitude);

            getWeather();
        });
    } 

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
        }
    };

    function getWeather() {
        xhttp.open("GET", requestString, true);
        xhttp.send();
    }

  document.getElementById('rain').textContent = (response.currently.precipProbability * 100).toFixed(0) + '%';

  document.getElementById('wind-speed').textContent = (response.currently.windSpeed).toFixed(0);

  var windDirection = null;
  var windDegree = response.currently.windBearing;
  console.log(windDegree);
    if (windDegree <= 45 || windDegree >= 315 ){
      windDirection = "north";
    } else if (windDegree >= 45 || windDegree <= 135 ){
      windDirection = "east";
    } else if (windDegree >= 135 || windDegree <= 225 ){
      windDirection = "south";
    } else if (windDegree >= 225 || windDegree <= 315 ){
      windDirection = "west";
    }
  document.getElementById('wind-direction').textContent = windDirection;

  document.getElementById('temp').textContent = (response.currently.temperature).toFixed(0);

  var iconSrc = null;
  var icon = response.currently.icon;
  if (icon == 'clear-day') {
    iconSrc = 'climacons/Sun.svg';
  } else if (icon == 'clear-night') {
    iconSrc = 'climacons/Moon.svg';
  } else if (icon == 'rain') {
    iconSrc = 'climacons/Cloud-Rain.svg';
  } else if (icon == 'snow') {
    iconSrc = 'climacons/Cloud-Snow.svg';
  } else if (icon == 'sleet') {
    iconSrc = 'climacons/Cloud-Hail.svg';
  } else if (icon == 'wind') {
    iconSrc = 'climacons/Wind.svg';
  } else if (icon == 'fog') {
    iconSrc = 'climacons/Cloud-Fog.svg';
  } else if (icon == 'cloudy') {
    iconSrc = 'climacons/Cloud.svg';
  } else if (icon == 'partly-cloudy') {
    iconSrc = 'climacons/Cloud-Sun.svg';
  } else if (icon == 'partly-cloudy-night') {
    iconSrc = 'climacons/Cloud-Moon.svg';
  } else {
    iconSrc = 'climacons/Shades.svg';
  }
  document.getElementById('weather-icon').src = iconSrc;
  
  
  
  

}
