//backgrounds
document.body.style.backgroundColor="red";
document.querySelector("h1").style.backgroundColor = "blue";

//font
document.querySelector("html").style.fontFamily = "sans-serif";

//add text
document.querySelector("#nickname").innerHTML = "Bird";
document.getElementById("favorites").innerHTML = "Coding";
document.querySelector("#hometown").innerHTML = "Flint";

//for loop
var list = document.getElementsByTagName("li");
  for (i = 0; i < list.length; i++) {
    list[i].className = "listItem";
  };

//change text color
var textColor = document.getElementsByClassName("listItem");
  for (i = 0; i < textColor.length; i++) {
    textColor[i].style.color = "maroon";
  };

  //image
  document.createElement("img");
  pic.setAttribute("src", "menbuddy")
