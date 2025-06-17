export default function showMenu() {
  const dropdownItems = document.querySelector(".dropdownItems");

  /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
  dropdownItems.addEventListener("click", function changeVisible(event) {
    if (event.target.matches(".dropBtn")) {
      const dropMenu = event.target.nextElementSibling;

      // Close current dropdown menu
      if (dropMenu.classList.contains("visible")) {
        dropMenu.classList.remove("visible");
      } else {
        // Close other dropdown menus
        const dropMenus = document.querySelectorAll(".dropMenu");
        dropMenus.forEach((dropMenu) => {
          if (dropMenu.classList.contains("visible")) {
            dropMenu.classList.remove("visible");
          }
        });
        // Make current dropdown menu visible
        dropMenu.classList.add("visible");
      }
    }
  });

  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener("click", function closeMenu(event) {
    if (!event.target.matches(".dropBtn")) {
      const dropMenus = document.querySelectorAll(".dropMenu");
      dropMenus.forEach((dropMenu) => {
        if (dropMenu.classList.contains("visible")) {
          dropMenu.classList.remove("visible");
        }
      });
    }
  });
}
