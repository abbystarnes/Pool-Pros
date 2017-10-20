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
  let cards = document.getElementsByClassName("card");
  let cards_services = {};
  for (let x = 0; x < cards.length; x++){
    let card = cards[x];
    let services = card.getElementsByClassName('card-service')[0].dataset.certifications.split(',');
    cards_services[x] = services;
  }

  let checkboxes = document.getElementsByClassName('checkbox');

  for(let x = 0; x < checkboxes.length; x++){
    checkboxes[x].addEventListener("mousedown", function() {
      let service_type = checkboxes[x].dataset.certifications;
        for (let x = 0; x < cards.length; x++){
          toggleCard(service_type, x);
        }
    });
  }

  let toggleCard = function(service, card_idx){
    if (cards_services[card_idx].includes(`${service} Pro`)){
      console.log('yep');
      cards[card_idx].classList.toggle(`show-${service}`);
    } else {
      console.log('nope');
    }
  }
});
