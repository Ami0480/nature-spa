const openBtn = document.getElementById("open-page");
const closeBtn = document.getElementById("close-page");
const newPage = document.getElementById("new-page");

openBtn.addEventListener("click", () => newPage.classList.add("active"));
closeBtn.addEventListener("click", () => newPage.classList.remove("active"));

function displayThankYou(event) {
  event.preventDefault();

  let inputEmail = document.querySelector("#email-input").value;

  if (inputEmail) {
    window.location.href = "thankyou.html";
  } else {
    alert("Please enter your email");
  }
}

let arrowButton = document.querySelector("#arrow");
arrowButton.addEventListener("click", displayThankYou);
