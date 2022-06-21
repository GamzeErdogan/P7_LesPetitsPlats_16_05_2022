class recipesObj {
    
    constructor(recipesArray){
        this.recipesList = [];
        this.selectedIngredientsList = [];
        this.selectedAppareilList = [];
        this.selectedUstensilsList = [];

        for (const recipeCard of recipesArray) {;
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
                if (myIngredientsFilteredItem.indexOf(ingredients.ingredient.toLowerCase()) == -1) {
                    myIngredientsFilteredItem.push(ingredients.ingredient.toLowerCase());
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
                    this.selectedIngredientsList = this.selectedIngredientsList.filter(i=>i != ingredientTagA.innerText);
                    saveInput(this.selectedIngredientsList, this.selectedAppareilList, this.selectedUstensilsList);
                    var ingredientTagAa = document.createElement('a');
                    ingredientTagAa.setAttribute('href','#');
                    ingredientTagAa.innerText = ingredient.ingredient;
                    ingredientDiv.appendChild(ingredientTagAa);
                });
                //remove item of the ingredients when you click
                ingredientTagA.remove();
                //close all dropdown menus when you click
                hideAllDropDownMenus();
                inputIngredient.textContent =" ";
                //Do new search
                this.selectedIngredientsList.push(ingredient.ingredient);
                saveInput(this.selectedIngredientsList,this.selectedAppareilList,this.selectedUstensilsList);
                
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
                if(myAppareilFilteredItem.indexOf(appareil.toLowerCase())==-1){
                    myAppareilFilteredItem.push(appareil.toLowerCase());
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
                    fieldAppareil.style.backgroundColor = "#68D9A4";
                    fieldAppareil.innerHTML = `
                        <p id="searchedText1">${appareilItem}</p><img id="closeButton1" 
                        src="src/image/cross-circle.png" alt="cross-circle icon"/>`;
                    creatTagTr.appendChild(fieldAppareil);
                    fieldAppareil.addEventListener('click',() =>{
                        fieldAppareil.style.display = 'none';
                        this.selectedAppareilList = this.selectedAppareilList.filter(i=>i != appareilsTagA.innerText);
                        saveInput(this.selectedIngredientsList,this.selectedAppareilList,this.selectedUstensilsList);
                        var appareilsTagAa = document.createElement('a');
                        appareilsTagAa.setAttribute('href','#');
                        appareilsTagAa.innerText = appareilItem;
                        appareilsDiv.appendChild(appareilsTagAa);
                    });
                    appareilsTagA.remove();
                    //close dropdown menu when you click
                    hideAllDropDownMenus();
                    inputAppareil.textContent = " ";
                    //Do new search
                    this.selectedAppareilList.push(appareilItem);
                    saveInput(this.selectedIngredientsList,this.selectedAppareilList,this.selectedUstensilsList);
                
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
                if (myUstensilesFilteredItem.indexOf(ustensiles.toLowerCase()) == -1) {
                    myUstensilesFilteredItem.push(ustensiles.toLowerCase());
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
                var fieldUstensiles = document.createElement('td');
                fieldUstensiles.setAttribute('class','searchedText--td');
                fieldUstensiles.style.backgroundColor = "#ED6454";
                fieldUstensiles.innerHTML = `
                    <p id="searchedText1">${ustensiles}</p><img id="closeButton1" 
                    src="src/image/cross-circle.png" alt="cross-circle icon"/>`;
                creatTagTr.appendChild(fieldUstensiles);
                fieldUstensiles.addEventListener('click',() =>{
                    fieldUstensiles.style.display = 'none';
                    this.selectedUstensilsList = this.selectedUstensilsList.filter(i=>i != ustensilesTagA.innerText);
                    saveInput(this.selectedIngredientsList,this.selectedAppareilList,this.selectedUstensilsList);
                    var ustensilesTagAa = document.createElement('a');
                    ustensilesTagAa.setAttribute('href','#');
                    ustensilesTagAa.innerText = ustensiles;
                    ustensilesDiv.appendChild(ustensilesTagAa);
                });
                ustensilesTagA.remove();
                //close dropdown menu when you click
                hideAllDropDownMenus();
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


function hideAllDropDownMenus(){
    //Hide all menu
    domMenuList = document.getElementsByClassName("dropdown-content--list");

    for (const menu of domMenuList) {
        menu.classList.remove("show--ingredient");
        menu.classList.remove("show--appareils");
        menu.classList.remove("show--ustensiles");
    }
    dropDownAppareil.style.left = "190px";
    dropDownUstensile.style.left = "360px";
}


