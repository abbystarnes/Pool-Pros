document.addEventListener("DOMContentLoaded", function(event) {
  const btn_close_nav = document.getElementById('btn-close-nav');
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  // close mobile menu
  btn_close_nav.addEventListener('click', ()=>{
    event.preventDefault();
    nav.classList.toggle("hidden");
  });

  hamburger.addEventListener('click', ()=>{
    event.preventDefault();
    nav.classList.toggle("hidden");
  });

  $window.click(function() {
    nav.classList.toggle("hidden");
  });

});
