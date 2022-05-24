    const dataOfRecette = async () => {
        let url = 'src/data/recette.json';
        try {
            let res = await fetch (url);
            return  res.json();
        } catch (error){
            console.log(error);
        }
    };


//----------This function displays the entire page of the index-------------------------
async function displayIndex(recipes) {
    const recipeContainer = document.getElementsByTagName('main')[0];
    const recipesObj2 = new recipesObj(recipes);
    console.log('recipe obj', recipesObj2);
    
  
//---- I created  elements of Ingredients DropDown  
    const dropdownDivIngredient = document.getElementById("myDropdown--ingredient");
    dropdownDivIngredient.appendChild(recipesObj2.ingredientDropDownDom);

//---- I created  elements of Appareils DropDown  
    const dropdownDivAppareils = document.getElementById("myDropdown--appareils");
    dropdownDivAppareils.appendChild(recipesObj2.appareilsDropDownDom);

//---- I created  elements of Appareils DropDown  
    const dropdownDivUstensiles = document.getElementById("myDropdown--ustensiles");
    dropdownDivUstensiles.appendChild(recipesObj2.ustensilesDropDownDom);
    
//-----I created  the cardDOM of recipes -------
    for (const recipeCard of recipesObj2.recipesList) {
        recipeContainer.appendChild(recipeCard.recipeCardDom);
    }
}

async function init() {
    const dataRecette = await dataOfRecette();
    console.log("result: ",dataRecette.recipes);
    displayIndex(dataRecette.recipes);
}

init();
