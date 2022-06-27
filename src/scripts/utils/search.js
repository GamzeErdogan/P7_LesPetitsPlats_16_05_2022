
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
        filteredRecipes = filteredRecipes.filter(i => i.ingredients.some(k => k.ingredient.includes(iteratorIngredient)));     
    }

    for (const iteratorAppareil of appareilText) {
        filteredRecipes = filteredRecipes.filter(t => t.appliance.includes(iteratorAppareil));
    }

    for (const iteratorUstensiles of ustensileText) {
        filteredRecipes = filteredRecipes.filter(p => p.ustensils.includes(iteratorUstensiles));
    }
    var newIngredient=[];
    //Re-search after input text entered more than 3 character 
    if(searchValue.value.length > 2 ){
        //Create new recipes array by entering word
        for(i=0; i<filteredRecipes.length; i++){
            if(filteredRecipes[i].name.includes(searchValue.value) || filteredRecipes[i].description.includes(searchValue.value)){
                newIngredient.push(filteredRecipes[i]);
                console.log(filteredRecipes[i]);
                continue;
            }
            for(k=0; k<filteredRecipes[i].ingredients.length; k++){
                if(filteredRecipes[i].ingredients[k].ingredient.includes(searchValue.value)){
                    newIngredient.push(filteredRecipes[i]);
                }
            }
        }
        filteredRecipes = newIngredient;
    }
    
    //Display new carts
    console.log("Total carts:",filteredRecipes);
    showRecipeContainer(filteredRecipes);
}

const processChanges = debounce(() => saveInput()); 

