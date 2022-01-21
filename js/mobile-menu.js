(() => {
    const menuBtnRef = document.querySelector("[data-burger-btn]");
    const mobileMenuRef = document.querySelector("[data-menu-container]");

    const body = document.getElementsByTagName("body")[0];

    menuBtnRef.addEventListener("click", () => {

        body.classList.toggle("modal-open");

        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || "false";
    
        menuBtnRef.classList.toggle("is-opened");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-opened");
    
    
    
     });
})();

//     (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");
//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);
//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();