let filterVisible = true;
let addVisible = false;

function showFilter() {
    filterVisible = !filterVisible;
    document.getElementById("filterContent").style.display = filterVisible ? "block" : "none";
}

function showAddNew() {
    addVisible = !addVisible;
    document.getElementById("newContent").style.display = addVisible ? "flex" : "none";
}

function filterArticles() {
    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    let articles = document.querySelectorAll("#articleList article");

    articles.forEach(a => {
        if (a.classList.contains("opinion")) a.style.display = showOpinion ? "block" : "none";
        if (a.classList.contains("recipe")) a.style.display = showRecipe ? "block" : "none";
        if (a.classList.contains("update")) a.style.display = showUpdate ? "block" : "none";
    });
}

function addNewArticle() {
    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;

    let type = "";
    if (document.getElementById("opinionRadio").checked) type = "opinion";
    if (document.getElementById("recipeRadio").checked) type = "recipe";
    if (document.getElementById("lifeRadio").checked) type = "update";
    if (!type) return;

    let article = document.createElement("article");
    article.className = type;

    let marker = document.createElement("span");
    marker.className = "marker";
    marker.textContent = type === "opinion" ? "Opinion" : type === "recipe" ? "Recipe" : "Update";

    let h2 = document.createElement("h2");
    h2.textContent = title;

    let pText = document.createElement("p");
    pText.textContent = text;

    let pLink = document.createElement("p");
    let link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    pLink.appendChild(link);

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(pText);
    article.appendChild(pLink);

    document.getElementById("articleList").appendChild(article);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;

    filterArticles();
}
