const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
        const cards = document.querySelector('.cards');
     for (let i = 0;i < prophets.length;i++) {
         prophets.forEach(prophet => {
             let card = document.createElement('section');
             let h2 = document.createElement('h2');
             let image = document.createElement('img');
           h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', `${prophet.name} + '-' + ${prophet.order}`);

            card.append(h2);
            card.append(image);
      
            document.querySelector('div.cards').append(card);
        });
        };
        })

    //     const utah = document.querySelector('.utah');
    //     const utahfilter = prophets.filter(x => x.birthplace == "Utah");

    //     utahfilter.forEach(utahprophet => {
    //         let card = document.createElement('section');
    //         let h2 = document.createElement('h2');
    //         let pimg = document.createElement('img');

    //         h2.textContent = `${utahprophet.name} ${utahprophet.lastname}`;
    //         pimg.setAttribute('src', utahprophet.imageurl);
    //         pimg.setAttribute('alt', `Portrait of ${utahprophet.name} who was born in ${utahprophet.birthplace} in the year ${utahprophet.birthdate.
    //             substring(utahprophet.birthdate.length - 4)}!`)
                
    //         card.append(h2);
    //         card.append(pimg);
    //         utah.append(card);
    //     });
          
    // })
