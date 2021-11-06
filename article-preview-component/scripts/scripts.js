const dropdown = document.querySelector(".dropdown-menu");
const dropdownBtn = document.querySelector(".dropdown-button");
const card = document.querySelector(".card");

dropdownBtn.addEventListener("click", function () {
    console.log(dropdown.style.visibility)
    if (dropdown.classList.contains('show-dropdown')) {
        dropdown.classList.remove("show-dropdown");
        card.classList.remove("small-width")
        dropdownBtn.classList.remove("active");
    } else {
        dropdown.classList.add("show-dropdown")
        card.classList.add("small-width")
        dropdownBtn.classList.add("active");

    }
});

