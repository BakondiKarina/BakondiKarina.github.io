let divek = document.querySelectorAll("div");
console.log(divek);

divek.forEach(function(div) {
    div.addEventListener("click", function() {
      if (div.style.backgroundColor === "lightblue") {
        div.style.backgroundColor = "white";
      } else {
        div.style.backgroundColor = "lightblue";
      }
    });
  });

  