const requestURL = 'scripts/data.json';
const cards = document.querySelector('.json-list');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const directory = jsonObject['directory'];
    directory.forEach(displayProphets);
  });


  



function displayProphets(biz) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    // let cardinal = "";
    let address = document.createElement('h3');
    let phone = document.createElement('h3');
    let tel = document.createElement('a')
    let website = document.createElement('h3');
    let link = document.createElement('a')
    let membership = document.createElement('h3');


    // if (prophet.order % 10 == 1 || prophet.order == 1) {
    //     cardinal = "st"
    // } else if (prophet.order == 2) {
    //     cardinal = "nd"
    // } else if (prophet.order == 3) {
    //     cardinal = "rd"
    // } else {
    //     cardinal = "th"
    // }
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = biz.name;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', `./${biz.image}`);
    logo.setAttribute('alt', `Logo of ${biz.name}`);
    logo.setAttribute('loading', 'lazy');

    link.href = biz.website;
    link.textContent = "Link";
    tel.href = `tel: ${biz.phone.replace(/\s/g, '')}`;
    tel.textContent = biz.phone;
    // website.appendChild(link);

    // Added content
    address.textContent = `Address: ${biz.address}`;
    phone.textContent = `Phone: `;
    phone.appendChild(tel);
    website.textContent = `Website: `;
    website.appendChild(link);
    membership.textContent = `Membership Level: ${biz.membership}`;

    
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.json-list').appendChild(card);
  }

let gridButton = document.querySelector("#grid");
let listButton = document.querySelector("#list");

function changeList() {
    
    let directoryList = document.querySelector("article")

    directoryList.classList.add("json-list");
	directoryList.classList.remove("json-grid");

}



function changeGrid() {
    
    let directoryList = document.querySelector("article")

    directoryList.classList.add("json-grid");
	directoryList.classList.remove("json-list");

}

gridButton.addEventListener("click", changeGrid)
listButton.addEventListener("click", changeList)