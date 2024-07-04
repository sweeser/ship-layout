// Смена темы

let lightThemeButton = document.querySelector(".theme-button-light");
let darkThemeButton = document.querySelector(".theme-button-dark");

lightThemeButton.onclick = function () {
    lightThemeButton.classList.add("active");
    darkThemeButton.classList.remove("active");
    document.body.classList.remove("dark");
}

darkThemeButton.onclick = function() {
    lightThemeButton.classList.remove("active");
    darkThemeButton.classList.add("active");
    document.body.classList.add("dark");
}

// Переключение шрифта

let sansSerifButton = document.querySelector(".font-button-sans-serif");
let serifButton = document.querySelector(".font-button-serif");

sansSerifButton.onclick = function () {
    sansSerifButton.classList.add("active");
    serifButton.classList.remove("active");
    document.body.classList.remove("serif");
}

serifButton.onclick = function () {
    serifButton.classList.add("active");
    sansSerifButton.classList.remove("active");
    document.body.classList.add("serif");
}

// сокращенная/полная информация ---

let blogArticles = document.querySelectorAll(".blog-article");
for (let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector(".more");
    moreButton.onclick = function (evt) {
        blogArticle.classList.remove("short");
    };
}

// Переключение раскладки карточек

let gridButton = document.querySelector(".card-view-button-grid");
let listButton = document.querySelector(".card-view-button-list");
let cardsList = document.querySelector(".cards");

gridButton.onclick = function () {
    cardsList.classList.remove("list");
    gridButton.classList.add("active");
    listButton.classList.remove("active");
}

listButton.onclick = function () {
    cardsList.classList.add("list");
    listButton.classList.add("active");
    gridButton.classList.remove("active");
}

// галерея 
let activePhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list a");

for (let preview of previews) {
preview.onclick = function (evt) {
    evt.preventDefault();

    let currentActive = document.querySelector(".preview-list .active-item");
    currentActive.classList.remove("active-item");
    preview.classList.add("active-item");

    activePhoto.src = preview.href;
    };
}