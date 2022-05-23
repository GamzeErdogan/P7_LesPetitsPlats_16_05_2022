class recipesObj {
    
    constructor(recipesArray){
        this.recipesList = [];

        for (const recipeCard of recipesArray) {
            this.recipesList.push(new recipeObj(recipeCard));
        }
    }

   
}

class recipeObj {
    constructor(recipe){
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

    get ingredientDropDownDom(){
        const ingredientElement = document.createElement('div');
        ingredientElement.setAttribute('id','contentIngredientDiv');
        ingredientElement.innerHTML = `
            <a href="#">${this.ingredients[0].ingredient}</a>
        `;

        return ingredientElement;
    }
}
