let elSiteHeader = document.querySelector(".head__nav");
let elHeadButton = document.querySelector(".head__button");

elHeadButton.addEventListener('click', function(){
  elSiteHeader.classList.toggle("head__nav--open");
});
