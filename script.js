let instaBody = document.getElementById("insta-body");
let boxTop = document.getElementById("top");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  instaBody.classList.add("open-box");
  boxTop.classList.add("open-box");

  setTimeout(() => {
    instaBody.classList.remove("open-box");
    boxTop.classList.remove("open-box");
    let thanks = document.createElement("p");
    thanks.classList.add("title", "fade-in");
    thanks.innerText =
      "Thank you very much for sharing what you love with us! and for creating such a kind community!";
    document.body.appendChild(thanks);
  }, 7000);
});
