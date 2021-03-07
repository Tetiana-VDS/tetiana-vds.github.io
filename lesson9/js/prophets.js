const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        const cards = document.querySelector('.cards');

         prophets.forEach(prophet => {
             let card = document.createElement('section');
             let h2 = document.createElement('h2');
           let p1 = document.createElement('p');
           let p2 = document.createElement('p');
             let image = document.createElement('img');
           h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
           p1.innerHTML =`Date of birth: ${prophet.birthdate}` 
            p2.innerHTML =`Place of birth: ${prophet.birthplace}` 
            image.setAttribute('src', prophet.imageurl);
            image.setAttribute('alt', `${prophet.name} - ${prophet.order}`);

             card.append(h2);
           card.append(p1);
              card.append(p2);
             cards.append(card)
             card.append(image);
           });
    });
        WebFont.load({google: {families: [ 'Vollkorn', "Bodoni Moda"] }
});
