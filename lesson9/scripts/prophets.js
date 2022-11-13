const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });


  



function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let cardinal = "";
    let birthdate = document.createElement('h3')
    let birthplace = document.createElement('h3')


    if (prophet.order % 10 == 1 || prophet.order == 1) {
        cardinal = "st"
    } else if (prophet.order == 2) {
        cardinal = "nd"
    } else if (prophet.order == 3) {
        cardinal = "rd"
    } else {
        cardinal = "th"
    }
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${cardinal} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Added content
    birthdate.textContent = `Date of birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of birth: ${prophet.birthplace}`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }