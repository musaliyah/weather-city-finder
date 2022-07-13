var key ="544a9000f5fa302a2a222c09fef201ce";

searchedCities();
$("#display-forecast").addClass('hide');
$("#forecast-time").addClass('hide');


if(localStorage.getItem('last_searched') == null){

    $('#weather-forecast').addClass('hide align-middle');
    $('#searched-cities').addClass('hide');
}else{
    newForecast()
    var interval = setInterval(newForecast,600000);
}

function newForecast(){
    $('#forecast-time').addClass('hide');
    $('#display-forecast').removeClass('hide');
    
}