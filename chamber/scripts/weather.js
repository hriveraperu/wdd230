let weather = {
    apiKey: 'YYFSSFGGBPPBEFWVYA6FKNF35',
    fetchWeather: function () {
        fetch(
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/15081%2C%20Lima%2C%20Peru/today?unitGroup=metric&key=YYFSSFGGBPPBEFWVYA6FKNF35&contentType=json"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { temp, conditions, humidity, icon, windspeed } = data.currentConditions;
        const { description } = data;
        console.log(temp, conditions, humidity, icon, description, windspeed)
        document.querySelector(".temperature").innerHTML = temp + '°';
        document.querySelector(".humidity").innerHTML = humidity + "%";
        document.querySelector(".temp-icon").src = 'https://www.visualcrossing.com/img/' + icon + ".svg";
        document.querySelector(".conditions").innerHTML = conditions;
        document.querySelector(".temp-description").innerHTML = description;
        document.querySelector(".wind-speed").innerHTML = windspeed;
        

    }
};

weather.fetchWeather();

