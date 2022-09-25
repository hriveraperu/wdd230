
const date1 = document.querySelector("#date1");
const year = document.querySelector("#date2");

try {
	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",

	};
	date1.innerHTML = `${new Date().toLocaleDateString("en-US", options)}`;
    year.innerHTML = `${new Date().getFullYear()}`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}