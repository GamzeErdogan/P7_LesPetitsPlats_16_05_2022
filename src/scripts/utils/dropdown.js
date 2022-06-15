//VARIABLES
const dropDownAppareil = document.querySelector(".dropdown--appareils");
const dropDownUstensile = document.querySelector(".dropdown--ustensiles");
var inputIngredient = document.getElementById("myInput--ingredient");
var inputAppareil = document.getElementById("myInput--appareils");
var inputUstensile = document.getElementById("myInput--ustensiles");

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionIngredient() {
    document.getElementById("myDropdown--ingredient").classList.toggle("show--ingredient");
    dropDownAppareil.style.position='absolute';
    dropDownAppareil.style.left='630px';
    dropDownUstensile.style.position='absolute';
    dropDownUstensile.style.left='800px';
    document.getElementById("myDropdown--appareils").classList.remove("show--appareils");
    document.getElementById("myDropdown--ustensiles").classList.remove("show--ustensiles");
  }
  
  function filterFunctionIngredient() {
    var  filter, a, i;
    filter = inputIngredient.value.toUpperCase();
    div = document.getElementById("myDropdown--ingredient");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
     var txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1){
          a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  
  function myFunctionAppareils (){
    document.getElementById("myDropdown--appareils").classList.toggle("show--appareils");
    document.getElementById("myDropdown--ingredient").classList.remove("show--ingredient");
    document.getElementById("myDropdown--ustensiles").classList.remove("show--ustensiles");
    dropDownUstensile.style.left='550px';
    dropDownAppareil.style.left='200px';
  }

  function filterFunctionAppareils() {
    var filter, a, i;
    filter = inputAppareil.value.toUpperCase();
    div = document.getElementById("myDropdown--appareils");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
     var txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1){
          a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function myFunctionUstensiles (){
    document.getElementById("myDropdown--ustensiles").classList.toggle("show--ustensiles");
    document.getElementById("myDropdown--ingredient").classList.remove("show--ingredient");
    document.getElementById("myDropdown--appareils").classList.remove("show--appareils");
    dropDownUstensile.style.left='380px';
    dropDownAppareil.style.left='200px';
  }

  function filterFunctionUstensiles() {
    var filter, a, i;
    filter = inputUstensile.value.toUpperCase();
    div = document.getElementById("myDropdown--ustensiles");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
     var txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1){
          a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }