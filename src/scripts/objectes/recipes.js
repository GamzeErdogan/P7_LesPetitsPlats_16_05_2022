
class recipesObj {
    
    constructor(recipesArray){
        this.recipesList = [];
        this.selectedIngredientsList = [];
        this.selectedAppareilList = [];
        this.selectedUstensilsList = [];

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
            ingredientTagA.addEventListener('click',() =>{
                var field = document.createElement('td');
                field.setAttribute('class','searchedText--td');
                field.innerHTML = `
                <p id="searchedText1">${ingredient.ingredient}</p>
                <img id="closeButton1" src="src/image/cross-circle.png"/>`;
                creatTagTr.appendChild(field);  
                field.addEventListener('click',() =>{
                    field.style.display = 'none';
                    this.selectedIngredientsList = this.selectedIngredientsList.filter(i=>i.ingredient != ingredientTagA.innerText);
                    saveInput(this.selectedIngredientsList);
                });
                ingredientTagA.remove();
                //close dropdown menu when you click
                document.getElementById("myDropdown--ingredient").classList.toggle("show--ingredient");
                dropDownAppareil.style.position='unset';
                dropDownUstensile.style.position='unset';
                inputIngredient.textContent =" ";

                //Do new search
                this.selectedIngredientsList.push(ingredient);
                saveInput(this.selectedIngredientsList);
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
                }
            }
            for (const appareilItem of myAppareilFiltered) {
                const appareilsTagA= document.createElement('a');
                appareilsTagA.setAttribute('href','#');
                appareilsTagA.innerText = appareilItem;
                appareilsDiv.appendChild(appareilsTagA);
                appareilsTagA.addEventListener('click',() =>{

                    var fieldAppareil = document.createElement('td');
                    fieldAppareil.setAttribute('class','searchedText--td');
                    fieldAppareil.innerHTML = `
                        <p id="searchedText1">${appareilItem}</p><img id="closeButton1" 
                        src="src/image/cross-circle.png" alt="cross-circle icon"/>`;
                    creatTagTr.appendChild(fieldAppareil);
                    fieldAppareil.addEventListener('click',() =>{
                        fieldAppareil.style.display = 'none';
                        this.selectedAppareilList = this.selectedAppareilList.filter(i=>i != appareilsTagA.innerText);
                        saveInput(this.selectedIngredientsList,this.selectedAppareilList);
                        console.log("appareil list: ",this.selectedAppareilList);
                    });
                    appareilsTagA.remove();
                    //close dropdown menu when you click
                    document.getElementById("myDropdown--appareils").classList.toggle("show--appareils");
                    dropDownUstensile.style.position='unset';
                    inputAppareil.textContent = " ";
                    //Do new search
                    this.selectedAppareilList.push(appareilItem);
                    saveInput(this.selectedIngredientsList,this.selectedAppareilList);
                })
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
            ustensilesTagA.addEventListener('click',() =>{
                var field = document.createElement('td');
                field.setAttribute('class','searchedText--td');
                field.innerHTML = `
                    <p id="searchedText1">${ustensiles}</p><img id="closeButton1" 
                    src="src/image/cross-circle.png" alt="cross-circle icon"/>`;
                creatTagTr.appendChild(field);
                field.addEventListener('click',() =>{
                    field.style.display = 'none';
                    this.selectedUstensilsList = this.selectedUstensilsList.filter(i=>i != ustensilesTagA.innerText);
                    saveInput(this.selectedIngredientsList,this.selectedAppareilList,this.selectedUstensilsList);
                });
                ustensilesTagA.remove();
                //close dropdown menu when you click
                document.getElementById("myDropdown--ustensiles").classList.toggle("show--ustensiles");
                inputUstensile.textContent = " ";
                //Do new search
                this.selectedUstensilsList.push(ustensiles);
                saveInput(this.selectedIngredientsList,this.selectedAppareilList,this.selectedUstensilsList);
                
            })
        }
        return ustensilesDiv;
    }
    
}

class recipeObj {
    constructor(recipe){
        this.id = recipe.id
        this.name = recipe.name
        this.servings = recipe.servings
        this.ingredients = recipe.ingredients
        this.time = recipe.time
        this.description = recipe.description
        this.appliance = recipe.appliance
        this.ustensils = recipe.ustensils
    }
    
    get recipeCardDom(){
        const recipeCard = document.createElement('div');
        recipeCard.setAttribute("class","cardDiv");
        var ingredientt = document.createElement('span');
        for (const ingredientItems of this.ingredients) {
            let contentText = '';
            Object.entries(ingredientItems).forEach(entry => {
                const [key, value] = entry;
                contentText += (key == 'quantity' || key == 'quantite') ? (': ' + value) : (value + '  ');
            });
            ingredientt.innerHTML += `
                <p class="contentP">${contentText}</p>
                `;
        }
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
            </div>
        <div class="descriptionDiv">
            <p>${this.description}</p>
        </div>
        `;
                    
        recipeCard.getElementsByClassName('ingredientDiv')[0].appendChild(ingredientt);

        return recipeCard;
    }

}


