wS = document.querySelector(".wind-speed").innerHTML;
t = document.querySelector(".temperature").innerHTML;

if (t > 10 || wS < 4.8) {
    windChill = "N/A"
} else {
    windChill = 35.74 + 0.6215 * t - 35.75 * wS ^ 0.16 + 0.4275 * t * wS^0.16
}


document.querySelector(".wind-chill").innerHTML = windChill;