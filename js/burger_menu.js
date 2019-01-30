function Burger() {
    var x = document.getElementById("js_nav");
    if (x.className === "navbar1-nav") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar1-nav"
    }
}