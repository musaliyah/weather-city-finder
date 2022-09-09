var apiKey ='7b0cb6b05833e4f392297ec0ca158aea';
var date = moment().format('MMMM Do YYYY, h:mm:ss a')
var city = "Kochi"
var pastSearches = [];

$('.search').on("click", function(event) {
    event.preventDefault();
    cityInput = $(this).parent('.srchBtn').siblings('.textVal').val().trim();
    if (cityInput === "") {
        return;
    };
    pastSearches.push(city);
    //localStorage
    localStorage.setItem('city'. JSON.stringify(cityHist));
    forecastDisplay.empty();
    pastCities();
    presentWeather();
});

var history = $('.history');
function historySect(){
    history.empty();

    for(let i = 0; i< history.length; i++){
        var row = $('<row>');
        row.addClass('row historyRow');
        history.preprend(row);

        var historyBtn = $('<button>').text(`${history[i]}`);
        historyBtn.addClass('btn historyButton');
        historyBtn.attr('type', 'button');
        row.append(hisotryBtn)


        
    }
}
// var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
// var weatherIconsUrl = 'http://openweathermap.org/img/wn/'
// var callUrl = 'https://api.openweathermap.org/data/2.5/onecall?at='



// function getWeather(city){
//     var weatherApiUrl = weatherUrl + city + '&appid=' + apiKey;

//     fetch(weatherApiUrl).then(function (geoLocation) {
//         if (geoLocation.ok){
//             geoLocation.json().then(function (data){
//                 var latitude = data.coord.lat;
//                 var longitude = data.coord.lon;

//                 var callApiUrl = callUrl + latitude + longitude + '&appid=' + apiKey + '&units=imperial';

//                 fetch(callApiUrl).then(function (weatherData){
//                     if(weatherData.ok) {
//                         weatherData.json().then(function(weatherData){
//                             var presentWeatherEl = $('<div>').attr({id: 'present-weather'})
//                         })
//                         var weatherSymbol = weatherData.curren.weather[0].icon;
//                         var presentWeatherIcon = weatherIconsUrl + weatherSymbol + '.png';

//                         var boxHeading = $('<h2>').text(city + '('+ currentDay + ')')

//                         var iconImage = $('<img>').attr({
//                             id: 'present-weather-icon',
//                             src: presentWeatherIcon,
//                             alt: 'Displays Weather Symbols'
//                         })

//                         var presentWeatherListEl = $('<ul>')
//                         var weatherFactors = ['Temp: ' + weatherData.current.temp + ' F', 'Wind ']
//                     }
//                 })
//             }
//         });
// }

// function searchHistory (city){

//     var displayPastSearch = $('<button>'),addClass('btn').text(city).on('click', function(){
//         $('#current-weather').remove();
//         $('#five-days-title').remove();
//         $("five-days").empty();
//         displayWeather(city);
//     })
//     .attr({
//         type: 'button'
//     });

//     userSearchEl.append(displayPastSearch);

// }

// function pastSearches() { 
//     var storedCities = JSON.parse(localStorage.getItem('search history'));
    
//     if (!storedCities) { 
//         storedCities = {
//             citySearch: []
        
//         };
// } else  {
//     for (var i=0; i< pastSearches.searchedCity.length; i++){
//         searchHistory(storedCities.citySearch[i]);
//     }
// }

// return storedCities;

// } console.log(storedCities);

