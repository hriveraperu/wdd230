// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const website = "https://api.openweathermap.org/"
const city = "data/2.5/weather?q="
const units = "&units="
const appid = "&appid="

const url = `${website}${city}Fairbanks${units}imperial${appid}558baa80b48666420e82d85bd521673d`


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
        function displayResults(weatherData) {
            currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

            const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
            const desc = weatherData.weather[0].description;
          
            const arr = desc.split(" ");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            let desc2 = arr.join(" ");

            weatherIcon.setAttribute('src', iconsrc);
            weatherIcon.setAttribute('alt', desc);
            captionDesc.textContent = desc2;
            
            
            
            
          };
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();