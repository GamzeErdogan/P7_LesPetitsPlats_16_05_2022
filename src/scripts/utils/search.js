
let filteredRecipes = [];
function debounce(func, timeout = 1000){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}


function saveInput(ingredientText =[], appareilText = [], ustensileText = []){
    console.log("ingredientText: ",ingredientText);
    console.log("appareilText: ",appareilText);
    console.log("ustensileText: ",ustensileText);
    //Is there any searched value?
    filteredRecipes = this.dataRecette.recipes;
    for (const iteratorIngredient of ingredientText) {
        console.log(iteratorIngredient);
        filteredRecipes = filteredRecipes.filter(i => i.ingredients.some(k => k.ingredient.includes(iteratorIngredient))); 
    };

    for (const iteratorAppareil of appareilText) {
        filteredRecipes = filteredRecipes.filter(t => t.appliance.includes(iteratorAppareil));
    }

    for (const iteratorUstensiles of ustensileText) {
        filteredRecipes = filteredRecipes.filter(p => p.ustensils.includes(iteratorUstensiles));
    }
   
    //Re-search after input text entered more than 3 character 
    if(searchValue.value.length > 2 ){
        //Create new recipes array by entering word
        filteredRecipes = filteredRecipes.filter(i => i.name.includes(searchValue.value) || i.description.includes(searchValue.value) || i.ingredients.some(k => k.ingredient.includes(searchValue.value)));
    }
    //Display new carts
    console.log("Total carts:",filteredRecipes);
    showRecipeContainer(filteredRecipes);
}

const processChanges = debounce(() => saveInput()); 

