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
    showDropDownMenus(recipes);
    showRecipeContainer(recipes);
}

function showRecipeContainer(recipesContainer){
    recipeContainer.innerHTML = '';
    const recipesObj2 = new recipesObj(recipesContainer);
    //-----I created  the cardDOM of recipes -------
    for (const recipeCard of recipesObj2.recipesList) {
        recipeContainer.appendChild(recipeCard.recipeCardDom);
    }
    //-----When there is no correspond search
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
