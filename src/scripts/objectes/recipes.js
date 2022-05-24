class recipesObj {
    
    constructor(recipesArray){
        this.recipesList = [];

        for (const recipeCard of recipesArray) {
            this.recipesList.push(new recipeObj(recipeCard));
        }
    }

    get ingredientDropDownDom(){
        const ingredientDiv = document.createElement('div');
        ingredientDiv.setAttribute('id','contentIngredientDiv');
        var myIngredientsFiltered = [];
        var myIngredientsFilteredItem = [];
        for (var i=0; i< this.recipesList.length; i++) {
            for(var k=0; k<this.recipesList[i].ingredients.length; k++){
                let ingredients = this.recipesList[i].ingredients[k];
                if (myIngredientsFilteredItem.indexOf(ingredients.ingredient) == -1) {
                    myIngredientsFilteredItem.push(ingredients.ingredient);
                    myIngredientsFiltered.push(ingredients);
                }
            }
        }
        for (const ingredient of myIngredientsFiltered) {
            const ingredientTagA= document.createElement('a');
            ingredientTagA.setAttribute('href','#');
            ingredientTagA.innerText = ingredient.ingredient;
            ingredientDiv.appendChild(ingredientTagA);
            ingredientTagA.addEventListener('click',()=>{
                document.getElementById('searchedText').innerText = ingredientTagA.innerText;
                document.getElementById("myDropdown--ingredient").classList.toggle("show--ingredient");
            })
        }
        return ingredientDiv;
    }

    get appareilsDropDownDom(){
        const appareilsDiv = document.createElement('div');
        appareilsDiv.setAttribute('id','contentAppareilsDiv');
        var myAppareilFiltered = [];
        var myAppareilFilteredItem = [];
            for (var i=0; i< this.recipesList.length; i++) {
                let appareil = this.recipesList[i].appliance;
                if(myAppareilFilteredItem.indexOf(appareil)==-1){
                    myAppareilFilteredItem.push(appareil);
                    myAppareilFiltered.push(appareil);
                    console.log(myAppareilFiltered);
                }
            }
            for (const appareilItem of myAppareilFiltered) {
                const appareilsTagA= document.createElement('a');
                appareilsTagA.setAttribute('href','#');
                appareilsTagA.innerText = appareilItem;
                appareilsDiv.appendChild(appareilsTagA);
            }
        return appareilsDiv;
    }

    get ustensilesDropDownDom(){
        const ustensilesDiv = document.createElement('div');
        ustensilesDiv.setAttribute('id','contentUstensilesDiv');
        var myUstensilesFiltered = [];
        var myUstensilesFilteredItem = [];
        for (var i=0; i< this.recipesList.length; i++) {
            for(var k=0; k<this.recipesList[i].ustensils.length; k++){
                let ustensiles = this.recipesList[i].ustensils[k];
                if (myUstensilesFilteredItem.indexOf(ustensiles) == -1) {
                    myUstensilesFilteredItem.push(ustensiles);
                    myUstensilesFiltered.push(ustensiles);
                }
            }
        }
        for (const ustensiles of myUstensilesFiltered) {
            const ustensilesTagA= document.createElement('a');
            ustensilesTagA.setAttribute('href','#');
            ustensilesTagA.innerText = ustensiles;
            ustensilesDiv.appendChild(ustensilesTagA);
        }
        return ustensilesDiv;
    }

   
}

class recipeObj {
    constructor(recipe){;
        this.id = recipe.id
        this.name = recipe.name
        this.servings = recipe.servings
        this.ingredients = []
        this.ingredients = recipe.ingredients
        this.time = recipe.time
        this.description = recipe.description
        this.appliance = recipe.appliance
        this.ustensils = recipe.ustensils
    }
    
    get recipeCardDom(){
        const recipeCard = document.createElement('div');
        recipeCard.setAttribute("class","cardDiv");
        recipeCard.innerHTML = `
        <div class="emptyArea"> </div>
        <div class="titleArea">
            <p>${this.name}</p>
            <div class="iconArea">
                <img src="/src/image/clock-icon.png"/>
                <p>${this.time}  min</p>
            </div>
        </div>
        <div class="descriptionArea">
            <div class="ingredientDiv">
                <p><span>${this.ingredients[0].ingredient}:</span> ${this.ingredients[0].quantity} ${this.ingredients[0].unit}</p>
                <p><span>${this.ingredients[1].ingredient}:</span> ${this.ingredients[1].quantity} ${this.ingredients[1].unit}</p>
                <p><span>${this.ingredients[2].ingredient}:</span> ${this.ingredients[2].quantity} ${this.ingredients[2].unit}</p>
                <p><span>${this.ingredients[3].ingredient}:</span> ${this.ingredients[3].quantity} ${this.ingredients[3].unit}</p>
                <p><span>${this.ingredients[4].ingredient}:</span> ${this.ingredients[4].quantity} ${this.ingredients[4].unit}</p>
            </div>
            <div class="descriptionDiv">
                <p>${this.description}</p>
            </div>
        </div>
        `;

        return recipeCard;
    }

}
