wS = document.querySelector(".wind-speed").innerHTML;
t = document.querySelector(".temperature").innerHTML;

if (t <= 10 && wS > 4.8) {
    tf = (t * 9 / 5) + 32;
    wSm = wS / 1.609344;
    windChillf = 35.74 + 0.6215 * tf - 35.75 * wSm ^ 0.16 + 0.4275 * tf * wSm^0.16;
    windChill = (windChillf - 32) * 5 / 9;
} else {
    windChill = "N/A";
}


document.querySelector(".wind-chill").innerHTML = windChill;

// Wind Chill Specification Limits: "Wind Chill Temperature is officially defined for 
// temperatures at or below 10 °C/50 °F (t <= 10) and wind speeds above 4.8 Kmph/3.0 mph (Ws > 4.8))."