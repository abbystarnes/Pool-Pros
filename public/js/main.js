document.addEventListener("DOMContentLoaded", function(event) {

  // GLOBAL VARIABLES, DOM ELEMENTS ////////////////////////////////////////////
  const btn_close_nav = document.getElementById('btn-close-nav');
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const cards = document.getElementsByClassName("card");
  const checkboxes = document.getElementsByClassName('checkbox');
  const contact_form = document.getElementById('contact-form');
  const contact_form_inputs = contact_form.getElementsByTagName('input');
  const form_btns = document.getElementsByClassName('btn-contact-form');
  const contact_form_modal = document.getElementById('contact-form-modal');
  const contact_form_overlay = document.getElementById('contact-form-overlay');
  const company_name_1 = document.getElementById('company-name-1');
  const company_name_2 = document.getElementById('company-name-2');
  //////////////////////////////////////////////////////////////////////////////

  // HIDE/SHOW MOBILE NAV //////////////////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////////////

  // FILTER BUSINESS CARDS /////////////////////////////////////////////////////
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


  for (let x = 0; x < cards.length; x++){
    let card = cards[x];
    let card_services = card.getElementsByClassName('card-service')[0].dataset.certifications.split(',');
    for (let y = 0; y < card_services.length; y++){
      if (card_services[y] in services) {
        services[card_services[y]].cards.push(card);
      }
    }
  }


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
        none_checked = false;
        for (let z = 0; z < services[service].cards.length; z++){
          services[service].cards[z].classList.add('show-card');
        }
      }
    }
    if (none_checked){
      for (let i = 0; i < cards.length; i++){
        cards[i].classList.add('show-card');
      }
    }
  }
  //////////////////////////////////////////////////////////////////////////////

  // HIDE/SHOW CONTACT FORM MODAL AND OVERLAY //////////////////////////////////
  for (let x = 0; x < form_btns.length; x++){
    form_btns[x].addEventListener('click', function(){
      event.preventDefault();
      window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': 0
      });
      company_name_1.innerHTML = form_btns[x].dataset.dealerinfo;
      company_name_2.innerHTML = form_btns[x].dataset.dealerinfo;
      contact_form_modal.classList.remove("hidden");
      contact_form_overlay.classList.remove('hidden');
    })
  }

  contact_form_overlay.addEventListener('click', ()=>{
    event.preventDefault();
    contact_form_modal.classList.add("hidden");
    contact_form_overlay.classList.add('hidden');
  });
  //////////////////////////////////////////////////////////////////////////////

  // STYLE FRONT END FORM VALIDATION (GREEN CHECKMARK) /////////////////////////
  for (let y = 0; y < contact_form_inputs.length; y++){
    contact_form_inputs[y].addEventListener('change', function(){
      if (contact_form_inputs[y].validity.valid && contact_form_inputs[y].nextElementSibling) {
        contact_form_inputs[y].nextElementSibling.classList.add('checkmark-checked');
      } else if (contact_form_inputs[y].nextElementSibling){
        contact_form_inputs[y].nextElementSibling.classList.remove('checkmark-checked');
      }
    })
  }
  //////////////////////////////////////////////////////////////////////////////

});
