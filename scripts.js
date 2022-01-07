const arrows = document.querySelectorAll(".arrow");
arrows.forEach((arrow) => {
    arrow.addEventListener("click", (event) => {
        const arrowParent = event.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
        console.log(arrowParent);
    });
});

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", (evt) => {
    sidebar.classList.toggle("close");
    console.log(sidebar.classList)
});