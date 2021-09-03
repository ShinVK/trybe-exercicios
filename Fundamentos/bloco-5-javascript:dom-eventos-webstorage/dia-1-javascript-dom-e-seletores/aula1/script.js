// const paragraph = document.getElementById("paragraph");
const paragraph = document.querySelectorAll("p")[0];
paragraph.style.color = "red";

// document.getElementById("page-title").innerText = "Clube da luta"
document.querySelector("h2").innerText = "Clube da luta";

// document.getElementById("second-paragraph").innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum neque inventore, itaque quo harum consequatur ipsam? Sunt porro quod nihil illo esse minus, eveniet, aspernatur, voluptatibus reprehenderit magnam alias eius?"
document.querySelector("#second-paragraph").innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum neque inventore, itaque quo harum consequatur ipsam? Sunt porro quod nihil illo esse minus, eveniet, aspernatur, voluptatibus reprehenderit magnam alias eius?";

// document.getElementById("subtitle").innerText = "lorem ipsum"
document.querySelectorAll("#subtitle")[0].innerText = "lorem ipsum";


// const altpar = document.getElementsByClassName("pEx");
const altpar = document.querySelectorAll(".pEx")[1];
altpar.style.color = "blue";

// document.getElementsByTagName("h4")[0].style.color = "green"
document.querySelectorAll("h4")[0].style.color = "green";