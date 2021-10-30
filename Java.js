window.onload = function() {
    var projectpic = document.createElement("img");
    projectpic.setAttribute("src", "http://img.zohostatic.com/discussions/v1/images/defaultPhoto.png");
    projectpic.setAttribute("height", "100px");
    projectpic.setAttribute("width", "100px");
    projectpic.setAttribute("alt", "Super Eats Project");
    document.getElementsByClassName("card1").innerHTML = projectpic
}