const burger = document.querySelector(".burger-btn");
const menu = document.querySelector(".header-menu-list");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.onclick = () => {
  menu.classList.toggle("none");
};

const thumbs = document.querySelectorAll(".diploma-thumb");
const modal = document.getElementById("diploma-modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.querySelector(".modal-close");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const fullImgSrc = thumb.getAttribute("data-full");
    modal.style.display = "block";
    modalImg.src = fullImgSrc;
  });
});

modalClose.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
