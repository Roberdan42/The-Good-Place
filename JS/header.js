
const menuItems = document.querySelectorAll(".nav-lista a");

menuItems.forEach(item => {
    item.addEventListener("click", scrollToClassOnClick);
})

function scrollToClassOnClick(event) {
    event.preventDefault();

    const elemento = event.target;
    const id = elemento.getAttribute("href");

    const divTo = document.querySelector(id).offsetTop;

    window.scroll({
        top: divTo,
        behavior: "smooth",
    });
}
