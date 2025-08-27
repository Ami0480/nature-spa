const openBtn = document.getElementById("open-page");
const closeBtn = document.getElementById("close-page");
const newPage = document.getElementById("new-page");

openBtn.addEventListener("click", () => newPage.classList.add("active"));
closeBtn.addEventListener("click", () => newPage.classList.remove("active"));
