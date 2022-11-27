const requestURL = 'scripts/data.json';
const cards = document.querySelector('.json-list');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    shuffle(directory)
    for (let i = 0; i < 3; i++) {
        displayDirectory(directory[i]);
    }
    
  });


  
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


function displayDirectory(biz) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('h3');
    let phone = document.createElement('h3');
    let tel = document.createElement('a')
    let website = document.createElement('h3');
    let link = document.createElement('a')
    // let membership = document.createElement('h3');

  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = biz.name;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', `./${biz.image}`);
    logo.setAttribute('alt', `Logo of ${biz.name}`);
    logo.setAttribute('loading', 'lazy');

    link.href = biz.website;
    link.textContent = "Link";
    tel.href = `tel: ${biz.phone}`;
    tel.textContent = biz.phone;
    // website.appendChild(link);

    // Added content
    address.textContent = `Address: ${biz.address}`;
    phone.textContent = `Phone: `;
    phone.appendChild(tel);
    website.textContent = `Website: `;
    website.appendChild(link);
    // membership.textContent = `Membership Level: ${biz.membership}`;

    
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    // card.appendChild(membership);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.spotlight-list').appendChild(card);
  }
