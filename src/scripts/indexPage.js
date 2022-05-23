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
    const dropdown1 = document.getElementById("myDropdown--ingredient");
    const ingredientElement = document.createElement('div');
    ingredientElement.setAttribute('id','contentIngredientDiv');
        for (var i=0; i<50; i++) {
            var getRecipesListe = recipesObj2.recipesList[i];
            var myIngredients = getRecipesListe.ingredients;
            for(var k=0; k<5;k++){
                var getIngredient = myIngredients[k];
                var ingredientName = getIngredient.ingredient;
                ingredientElement.innerHTML = `
                <a href="#">${ingredientName}</a>
            `;
    console.log(ingredientName);
                dropdown1.appendChild(ingredientElement);
            }
            
        }
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
