const visitsDisplay = document.querySelector(".visits");
let timeStamp = window.localStorage.getItem("visit1");
let newStamp = Date.now(window.localStorage.getItem("visit2"));
let numVisits = Number(window.localStorage.getItem("visits-ls"));


if (numVisits !== 0) {
	localStorage.setItem("visit2", newStamp)
    daynum = parseInt(newStamp) - parseInt(timeStamp)
    days = Math.floor(daynum / (24*60*60*1000));
    visitsDisplay.textContent = days;
} else {
    visitsDisplay.textContent = "This is your first visit!";
    let timeStamp = Date.now(window.localStorage.getItem("visit1"));
    localStorage.setItem("visit1", timeStamp);
}


numVisits++;

localStorage.setItem("visits-ls", numVisits);

