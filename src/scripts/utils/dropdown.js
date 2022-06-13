/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropDownAppareil = document.querySelector(".dropbtn--appareils");
const dropDownUstensile = document.querySelector(".dropbtn--ustensiles");
var inputIngredient = document.getElementById("myInput--ingredient");
var inputAppareil = document.getElementById("myInput--appareils");
var inputUstensile = document.getElementById("myInput--ustensiles");
function myFunctionIngredient() {
    document.getElementById("myDropdown--ingredient").classList.toggle("show--ingredient");
    dropDownAppareil.style.position='absolute';
    dropDownAppareil.style.left='430px';
    dropDownUstensile.style.position='absolute';
    dropDownUstensile.style.left='550px';
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
    const dropDownUstensile = document.querySelector(".dropbtn--ustensiles");
    dropDownUstensile.style.position='absolute';
    dropDownUstensile.style.left='150px';
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