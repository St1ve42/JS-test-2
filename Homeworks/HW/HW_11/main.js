fetch('https://dummyjson.com/recipes').then(res => res.json()).then(value => {
    for (let recipe of value.recipes) {
        let div = document.createElement('div');
        let ulRecipe = document.createElement('ul');
        let img = document.createElement("img");
        img.setAttribute('src', recipe.image);
        img.setAttribute('alt', `${recipe.image.split('/').at(-2)}`);
        ulRecipe.appendChild(img);
        ulRecipe.classList.add('ulRecipe');
        for (let recipeKey in recipe) {
            if (recipeKey !== 'image') {
                let li = document.createElement("li");
                if (recipeKey !== 'ingredients' && recipeKey !== 'instructions' && recipeKey !== 'tags'){
                    li.innerHTML = `${recipeKey}: ${recipe[recipeKey]}`;
                    ulRecipe.appendChild(li);
                }
                else{
                    li.innerHTML = `${recipeKey}:`;
                    ulRecipe.appendChild(li);
                    let ulInner = document.createElement("ul");
                    ulInner.classList.add('ulInner');
                    for (const element of recipe[recipeKey]) {
                        let liInner = document.createElement("li");
                        liInner.innerHTML = element;
                        ulInner.appendChild(liInner);
                    }
                    ulRecipe.appendChild(ulInner);
                }
            }
        }
        document.body.appendChild(div);
        div.appendChild(ulRecipe);
    }
})