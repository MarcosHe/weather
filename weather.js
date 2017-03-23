window.onload = function() {

var zip;
var requestString;
var latitude;
var longitude;

var xhttp = new XMLHttpRequest();

var response;
  
/*    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            requestString = "https://api.darksky.net/forecast/2b8648eea6ad7f5f349ffe98a5164a20/{lat},{lon}?exclude=minutely,hourly,daily";
            requestString = requestString.replace(/{lat}/, latitude);
            requestString = requestString.replace(/{lon}/, longitude);

            getWeather();
        });
    } else {
        zip = parseInt(alert("Please enter your zip code"));
    }

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
        }
    };

    function getWeather() {
        xhttp.open("GET", requestString, true);
        xhttp.send();
    }*/

  response = JSON.parse('{"latitude":37.8267,"longitude":-122.4233,"timezone":"America/Los_Angeles","offset":-7,"currently":{"time":1490163456,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","nearestStormDistance":0,"precipIntensity":0.002,"precipIntensityError":0,"precipProbability":0.1,"precipType":"rain","temperature":58.27,"apparentTemperature":58.27,"dewPoint":54.09,"humidity":0.86,"windSpeed":8.16,"windBearing":221,"visibility":5.9,"cloudCover":0.68,"pressure":1015.09,"ozone":295.51},"flags":{"sources":["lamp","gfs","cmc","nam","rap","rtma","sref","fnmoc","isd","madis","nearest-precip","nwspa","darksky"],"lamp-stations":["KAPC","KCCR","KHWD","KLVK","KNUQ","KOAK","KPAO","KSFO","KSQL"],"isd-stations":["724943-99999","745039-99999","745045-99999","745060-23239","745065-99999","994016-99999","994033-99999","994036-99999","997734-99999","998163-99999","998197-99999","998476-99999","998477-99999","998479-99999","999999-23239","999999-23272"],"madis-stations":["AU915","C5988","C8158","C9629","CQ147","D5422","D8008","E0426","E6067","E9227","FTPC1","GGBC1","OKXC1","OMHC1","PPXC1","SFOC1"],"units":"us"}}');

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
