//VARIABLES
    var searchValue =document.getElementById('searchArea_Input');
    var closeButton1 = document.getElementById('closeButton1');
    var searchedText =document.getElementById('searchedText1');
    var searchedTextDiv = document.getElementById('searchedText-div');
    var searchedIcon = document.getElementById('searchedIcon');
    var creatTagTr = document.createElement('tr');
    var creatTagTable = document.getElementById('tableTag');
    const dataRecette = {};
    const recipeContainer = document.getElementsByTagName('main')[0];

//FETCH DATA    
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
    //first clean the inner carts
    recipeContainer.innerHTML = '';
    const recipesObj2 = new recipesObj(recipes);
    // console.log('recipe obj', recipesObj2);
    
    creatTagTable.appendChild(creatTagTr);
//------search an ingredient of the recipe then write this item into the label------

    
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
//-----When there is no correspond seaech
    if(filteredRecipes.length == 0){
        var creatP = document.createElement("p");
        creatP.textContent = "Aucune recette ne correspond à votre critère… Vous pouvez chercher  ' tarte aux pommes ' , 'poisson' etc... ";
        recipeContainer.appendChild(creatP);
    }
}

async function init() {
    this.dataRecette = await dataOfRecette();
    displayIndex(this.dataRecette.recipes);
}

init();
