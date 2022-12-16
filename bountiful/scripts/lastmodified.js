const lastUpdate = document.querySelector(".lower2");
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
    lastUpdate.textContent = `Last Modified on: ${new Date().toLocaleDateString("en-US", options)}`;