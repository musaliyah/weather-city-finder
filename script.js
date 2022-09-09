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
    } if (!city) {
        return;
    }
    $('.historyButton').on("click", function (event) {
        event.preventDefault();
        city = $(this).text();
        forecastDisplay.empty();
        presentWeather();
    });
};

var weatherCards =  $('.weatherCards')
function presentWeather() {
    var fullURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    $(cardContent).empty();

    $.ajax({
        method: 'GET',
        url: fullURL
    }).then(function(input) {
        $('.cityName').text(input.name);
        $('.data').text(date);

        $('.icons').attr('src', `https://openweather.org/img/wn/${input.weather[0].icon}@2x.png`)

        var longitude = $('<p>').text(`Longtude: ${input.coord.lon}`);
        var latitude = $('<p>').text(`Latitude: ${input.coord.lat}`);
        var temp = $('<p>').text(`Temperature: ${input.main.temp} °F`);
        var wind = $('<p>').text(`Wind Speed: ${input.main.wind.speed} mph`)
        var whatItFeelsLike = $('<p>').text(`Feels like: ${input.main.feel_like} °F`);
        var humidity = $('<p>').text(`Humidity: ${input.main.humidity} %`);
        
        cardContent.append(longitude);
        cardContent.append(latitude);
        cardContent.append(temp);
        cardContent.append(wind);
        cardContent.append(whatItFeelsLike);
        cardContent.append(humidity);

        //todo dd url for lat and long (?)
        
    })
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

