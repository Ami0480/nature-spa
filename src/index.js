const openBtn = document.getElementById("open-page");
const closeBtn = document.getElementById("close-page");
const newPage = document.getElementById("new-page");

openBtn.addEventListener("click", () => newPage.classList.add("active"));
closeBtn.addEventListener("click", () => newPage.classList.remove("active"));

function displayThankYou(event) {
  event.preventDefault();

  let inputEmail = document.querySelector("#email-input").value;

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!inputEmail) {
    alert("Please enter your email");
  } else if (!emailPattern.test(inputEmail)) {
    alert("Please enter a valid email address");
  } else {
    window.location.href = "thankyou-subscribe.html";
  }
}

let arrowButton = document.querySelector("#arrow");
arrowButton.addEventListener("click", displayThankYou);
