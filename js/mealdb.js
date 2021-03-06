// Enter button cliked function added
/* const input = document.getElementById("search-field");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button-search").click();
    }
}); */

/* document.getElementById("search-field")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("button-search").click();
        }
    }); */

document.getElementById('search-field').addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('button-search').click();
    }
})

// enter button clicked function ended

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    // console.log('get btn')
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    // console.log(meals)
    const searchResult = document.getElementById('search-result');
    // searchResult.innerText = '';
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetails = mealDetail => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetail}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    // console.log(meal)
    const mealDetailss = document.getElementById('meal-details');
    mealDetailss.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.steMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mealDetailss.appendChild(div);
}
