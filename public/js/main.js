document.addEventListener("DOMContentLoaded", function(event) {
  const btn_close_nav = document.getElementById('btn-close-nav');
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');

  btn_close_nav.addEventListener('click', ()=>{
    event.preventDefault();
    nav.classList.add("hidden");
    overlay.classList.add('hidden');
  });

  hamburger.addEventListener('click', ()=>{
    event.preventDefault();
    nav.classList.remove("hidden");
    overlay.classList.remove('hidden');
  });

  overlay.addEventListener('click', ()=>{
    event.preventDefault();
    nav.classList.add("hidden");
    overlay.classList.add('hidden');
  });


// sorting functionality


//   let cards = document.getElementsByClassName("card");
//   let cards_services = {};
//   for (let x = 0; x < cards.length; x++){
//     let card = cards[x];
//     let services = card.getElementsByClassName('card-service')[0].dataset.certifications.split(',');
//     cards_services[x] = services;
//   }
//
//   let checkboxes = document.getElementsByClassName('checkbox');
//
//   for(let x = 0; x < checkboxes.length; x++){
//     checkboxes[x].addEventListener("mousedown", function() {
//       let service_type = checkboxes[x].dataset.certifications;
//
//       if (checkboxes[x].checked){
//         for (let x = 0; x < cards.length; x++){
//           toggleCard(service_type, x, 'add');
//         }
//       } else {
//         for (let x = 0; x < cards.length; x++){
//           toggleCard(service_type, x, 'remove');
//         }
//       }
//
//     });
//   }
//
//   let toggleCard = function(service, card_idx, direction){
//     if (direction === 'remove'){
//       if (cards_services[card_idx].includes(`${service} Pro`)){
//         cards[card_idx].classList.add(`show-${service}`);
//       }
//     } else {
//       if (cards_services[card_idx].includes(`${service} Pro`)){
//         cards[card_idx].classList.remove(`show-${service}`);
//       }
//     }
//
//   }
// });


// filtering logic

// if nothing checked
  // all show
// if categorie(s) checked
    // show card w/out category
    // hide cards w/out category

let services = {
  'Installation Pro' : {
    cards: [],
    show: false
  },
  'Residential Pro' : {
    cards: [],
    show: false
  },
  'Service Pro' : {
    cards: [],
    show: false
  },
  "Commercial Pro" : {
    cards: [],
    show: false
  }
}

let cards = document.getElementsByClassName("card");

for (let x = 0; x < cards.length; x++){
  let card = cards[x];
  let card_services = card.getElementsByClassName('card-service')[0].dataset.certifications.split(',');
  for (let y = 0; y < card_services.length; y++){
    if (card_services[y] in services) {
      services[card_services[y]].cards.push(card);
    }
  }
}

let checkboxes = document.getElementsByClassName('checkbox');

for(let x = 0; x < checkboxes.length; x++){
  checkboxes[x].addEventListener("mousedown", function() {

    if (!checkboxes[x].checked){
      services[`${checkboxes[x].dataset.certification} Pro`].show = true;
    } else {
      services[`${checkboxes[x].dataset.certification} Pro`].show = false;
    }

    change_showing();
  });
}

let change_showing = function(){

  for (let y = 0; y < cards.length; y++){
    cards[y].classList.remove('show-card');
  }
  
  let none_checked = true;
  for (service in services){
    if (services[service].show){
      console.log('category showing');
      none_checked = false;
      for (let z = 0; z < services[service].cards.length; z++){
        console.log(z);
        services[service].cards[z].classList.add('show-card');
      }
    }
  }
  if (none_checked){
    console.log('none checked');
    for (let i = 0; i < cards.length; i++){
      console.log(i);
      cards[i].classList.add('show-card');
    }
  }
}

// for checked services, add show class; remove from rest
// if no services are checked, add show class to all cards
});
