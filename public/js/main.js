document.addEventListener('DOMContentLoaded', (event) => {
  // GLOBAL VARIABLES, DOM ELEMENTS ////////////////////////////////////////////
  const btnCloseNav = document.getElementById('btn-close-nav');
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const cards = document.getElementsByClassName('card');
  const checkboxes = document.getElementsByClassName('checkbox');
  const contactForm = document.getElementById('contact-form');
  const contactFormInputs = contactForm.getElementsByTagName('input');
  const formBtns = document.getElementsByClassName('btn-contact-form');
  const contactFormModal = document.getElementById('contact-form-modal');
  const contactFormOverlay = document.getElementById('contact-form-overlay');
  const companyName1 = document.getElementById('company-name-1');
  const companyName2 = document.getElementById('company-name-2');
  const contactTel = document.getElementById('contact-tel');
  const btnContactFormSubmit = document.getElementById('btn-contact-form-submit');
  const modalBody = document.getElementById('modal-body');
  ///////////////////////////////////////////////////////////////////////////////

  // HIDE/SHOW MOBILE NAV //////////////////////////////////////////////////////
  btnCloseNav.addEventListener('click', () => {
    event.preventDefault();
    nav.classList.add('hidden');
    overlay.classList.add('hidden');
  });

  hamburger.addEventListener('click', () => {
    event.preventDefault();
    nav.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  overlay.addEventListener('click', () => {
    event.preventDefault();
    nav.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  ///////////////////////////////////////////////////////////////////////////////

  // FILTER BUSINESS CARDS /////////////////////////////////////////////////////
  const services = {
    'Installation Pro': {
      cards: [],
      show: false,
    },
    'Residential Pro': {
      cards: [],
      show: false,
    },
    'Service Pro': {
      cards: [],
      show: false,
    },
    'Commercial Pro': {
      cards: [],
      show: false,
    },
  };

  // populate object literal with the business cards that belong to each category
  for (let x = 0; x < cards.length; x += 1) {
    const card = cards[x];
    const cardServices = card.getElementsByClassName('card-service')[0].dataset.certifications.split(',');
    for (let y = 0; y < cardServices.length; y += 1) {
      if (cardServices[y] in services) {
        services[cardServices[y]].cards.push(card);
      }
    }
  }

  // function to hide/show selected categories, and show all cards if no categories selected
  const changeShowing = function () {
    for (let y = 0; y < cards.length; y += 1) {
      cards[y].classList.remove('show-card');
    }
    let noneChecked = true;
    Object.values(services).forEach((service) => {
      if (service.show) {
        noneChecked = false;
        for (let z = 0; z < service.cards.length; z += 1) {
          service.cards[z].classList.add('show-card');
        }
      }
    });
    if (noneChecked) {
      for (let i = 0; i < cards.length; i += 1) {
        cards[i].classList.add('show-card');
      }
    }
  };

  // attaches click event to each checkbox, toggles selected category & runs changeShowing() function to update view
  for (let x = 0; x < checkboxes.length; x += 1) {
    checkboxes[x].addEventListener('mousedown', () => {
      if (!checkboxes[x].checked) {
        services[`${checkboxes[x].dataset.certification} Pro`].show = true;
      } else {
        services[`${checkboxes[x].dataset.certification} Pro`].show = false;
      }
      changeShowing();
    });
  }
  ///////////////////////////////////////////////////////////////////////////////

  // HIDE/SHOW CONTACT FORM MODAL AND OVERLAY //////////////////////////////////

  // add click event to business card buttons to show contact form modal & overlay, populate with business information
  for (let x = 0; x < formBtns.length; x += 1) {
    formBtns[x].addEventListener('click', () => {
      event.preventDefault();
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: 0,
      });
      companyName1.innerHTML = formBtns[x].dataset.dealerinfo;
      companyName2.innerHTML = formBtns[x].dataset.dealerinfo;
      contactFormModal.classList.remove('hidden');
      contactFormOverlay.classList.remove('hidden');
    });
  }

  // closes contact form modal when user clicks anywhere on overlay
  contactFormOverlay.addEventListener('click', () => {
    event.preventDefault();
    contactFormModal.classList.add('hidden');
    contactFormOverlay.classList.add('hidden');
  });
  ///////////////////////////////////////////////////////////////////////////////

  // STYLE FRONT END FORM VALIDATION (GREEN CHECKMARK) /////////////////////////
  for (let y = 0; y < contactFormInputs.length; y += 1) {
    contactFormInputs[y].addEventListener('change', () => {
      if (contactFormInputs[y] === contactTel){
        contactTel.value = contactTel.value.replace(/[^\d]/g,'');
      }
      if (contactFormInputs[y].validity.valid && contactFormInputs[y].nextElementSibling) {
        contactFormInputs[y].nextElementSibling.classList.add('checkmark-checked');
      } else if (contactFormInputs[y].nextElementSibling) {
        contactFormInputs[y].nextElementSibling.classList.remove('checkmark-checked');
      }
    });
  }
  ///////////////////////////////////////////////////////////////////////////////

});
