const toggle = document.querySelector(".menu-toggle");
    const pages = document.querySelector(".pages");

    toggle.addEventListener("click", () => {
        pages.classList.toggle("active");
    });