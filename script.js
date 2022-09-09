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
        var whatItFeelsLike = $('<p>').text(`Feels like: ${input.main.feels_like} °F`);
        var humidity = $('<p>').text(`Humidity: ${input.main.humidity} %`);
        
        cardContent.append(longitude);
        cardContent.append(latitude);
        cardContent.append(temp);
        cardContent.append(wind);
        cardContent.append(whatItFeelsLike);
        cardContent.append(humidity);

        //todo dd url for lat and long (?)

        // $.ajax({
        //     method: 'GET',
        //     url: urlLocation
        // }).then(function(response) {
        //     var UV = $('<p>').text(`UV Index: ${input.current.uvi}`);
        //     var UVI = input.current.uvi;
            
        // })
        
        // var urlLocation = `https://api.openweathermap.org/data/2.5/onecall?late=${latitude}&lon=${longitude}&exclude=hourly,daily,minutely&appid=${apiKey}`;

    })
    forecastDisplay();
}

var forecast = $('.forecastDisplay');
function forecastDisplay() {
    var urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

    $.ajax({
        method: 'GET',
        url: urlForecast
    }).then(function (input) {
        var cardArray = input.list;
        var allWeather = [];
        $.each.cardArray, function (index, value) {
            testObj = {
                date: value.dt_txt.split(' ')[0],
                time: value.dt_txt.split(' ')[1],
                feel_like: value.main.feels_like,
                temp: value.main.temp,
                humidity: value.main.humidity,
                icon: value.weather[0].icon
            }
        }
            if (value.dt_txt.split(' ')[1] === "12:00:00") {
                allWeather.push(testObj);
            }
        
    })

    for (var i=0; i <allWeather.length; i++) {
        var cardDim = $('<div');
        var header = $('<div>');
        var body = $('<div>');
        var icons = $('<img>');
        var tempEl = $('<p>').text(`Temperature: ${input.main.temp} °F`);;
        var humidEl = $('<p>').text(`Humidity: ${input.main.humidity} %`);
        var feelsLikeEl = $('<p>').text(`Feels like: ${input.main.feels_like} °F`);


        cardDim.attr('class', 'card text-white bg-primary mb-3 first');
        cardDim.attr('style', 'max-width: 200px;');
        header.attr('class', 'card-head')
        // header.attr('style', )
        icons.attr('class', 'icon');
        icons.attr('src', `https://openweathermap.org/img/wn/${allWeather[i].icon}@2x.png`);
        body.append(icons);
        body.attr('class', 'card-body');
        body.append(body);
        body.append(tempEl);
        body.append(humidEl);
        body.append(feelsLikeEl);   
        
        forecast.append(cardDim);
        
    };
};

function start(){

    var storage = JSON.parse(localStorage.getItem('city'));
    if(storage !== null) {
        cityHist = storage
    }
    pastCities();
    presentWeather();

}

start();
