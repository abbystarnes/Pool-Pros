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
});
