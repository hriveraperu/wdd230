// select HTML elements in the document
const temp1 = document.createElement("h3");
const icon1 = document.createElement('img');
const caption1 = document.createElement('p');
const humidity1 = document.createElement('p');

const temp2 = document.createElement("h3");
const icon2 = document.createElement('img');
const caption2 = document.createElement('p');
const humidity2 = document.createElement('p');

const temp3 = document.createElement("h3");
const icon3 = document.createElement('img');
const caption3 = document.createElement('p');
const humidity3 = document.createElement('p');

// API URL
const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.158092&lon=-117.350594&units=imperial&limit=3&appid=ab2701079d14f2054e74a081b52368fc';

// Function to fetch API
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

// Capitalize weather description
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// Function to display data
function displayResults(weatherData) {
    // Temp display
    temp1.innerHTML = `Temperature: ${weatherData.daily[0].temp.day.toFixed(0)}°F`;
    // Weather description and icon display
    const desc1 = capitalize(weatherData.daily[0].weather[0].description);
    caption1.textContent = desc1;
    icon1.src = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
    icon1.alt = desc1;
    // Humidity
    humidity1.innerHTML = `Humidity: ${weatherData.daily[0].humidity}%`;

    // Temp display
    temp2.innerHTML = `Temperature: ${weatherData.daily[1].temp.day.toFixed(0)}°F`;
    // Weather description and icon display
    const desc2 = capitalize(weatherData.daily[1].weather[0].description);
    caption2.textContent = desc2;
    icon2.src = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    icon2.alt = desc2;
    
    humidity2.innerHTML = `Humidity: ${weatherData.daily[1].humidity}%`;

    // Temp display
    temp3.innerHTML = `Temperature: ${weatherData.daily[2].temp.day.toFixed(0)}°F`;
    // Weather description and icon display
    const desc3 = capitalize(weatherData.daily[2].weather[0].description);
    caption3.textContent = desc3;
    icon3.src = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    icon3.alt = desc3;
    // Humidity
    humidity3.innerHTML = `Humidity: ${weatherData.daily[2].humidity}%`;

    document.querySelector('.first-day').appendChild(temp1)
    document.querySelector('.first-day').appendChild(icon1)
    document.querySelector('.first-day').appendChild(caption1)
    document.querySelector('.first-day').appendChild(humidity1)
    
    document.querySelector('.second-day').appendChild(temp2)
    document.querySelector('.second-day').appendChild(icon2)
    document.querySelector('.second-day').appendChild(caption2)
    document.querySelector('.second-day').appendChild(humidity2)

    document.querySelector('.third-day').appendChild(temp3)
    document.querySelector('.third-day').appendChild(icon3)
    document.querySelector('.third-day').appendChild(caption3)
    document.querySelector('.third-day').appendChild(humidity3)

}

apiFetch();