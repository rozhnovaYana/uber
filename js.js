"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const humburger = document.querySelector(".humburger"),
        menu = document.querySelector(".menu"),
        menuItem = document.querySelectorAll(".menu_link"),
        menuWrapper = document.querySelector(".menu_wrapper");

    function openMenu() {
        humburger.classList.add("humburger_active");
        menu.classList.add("menu_active");
        document.body.style.overflow = "hidden";
        menuWrapper.classList.add("menu_wrapper_active");
    }

    function closeMenu() {
        humburger.classList.remove("humburger_active");
        menu.classList.remove("menu_active");
        document.body.style.overflow = "";
        menuWrapper.classList.remove("menu_wrapper_active");
    }
    humburger.addEventListener('click', () => {
        if (humburger.classList.contains("humburger_active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuItem.forEach(item => {
        item.addEventListener("click", () => {
            closeMenu();
        });
    });
    menuWrapper.addEventListener('click', (e) => {
        if (e.target === menuWrapper) {
            closeMenu();
        }
    });

});