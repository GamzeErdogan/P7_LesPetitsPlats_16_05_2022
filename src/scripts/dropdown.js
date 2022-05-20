/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionIngredient() {
    document.getElementById("myDropdown--ingredient").classList.toggle("show--ingredient");
    // document.getElementById("myInput--ingredient").style.width='535px';
    const dropDownAppareil = document.querySelector(".dropbtn--appareils");
    dropDownAppareil.style.position='absolute';
    dropDownAppareil.style.left='430px';
    const dropDownUstensile = document.querySelector(".dropbtn--ustensiles");
    dropDownUstensile.style.position='absolute';
    dropDownUstensile.style.left='550px';
  }
  
  function filterFunctionIngredient() {
    var input, filter, a, i;
    input = document.getElementById("myInput--ingredient");
    filter = input.value.toUpperCase();
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

  function myFunctionUstensiles (){
    document.getElementById("myDropdown--ustensiles").classList.toggle("show--ustensiles");
  }