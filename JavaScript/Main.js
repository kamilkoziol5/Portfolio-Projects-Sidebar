function renderSidebar() {
  const basePath = "/PORTFOLIO-SIDEBAR-PROJECT";

  const nav = document.createElement("nav");
  nav.classList.add("sidebar");
  nav.innerHTML = `
    <div class="logo-container">
      <a href="${basePath}/index.html" class="logo">
        <img src="${basePath}/images/logo.png" alt="Logo" />
      </a>

      <button class="toogler" id="toogler-btn" title="Open Sidebar">
        <i class="bx bxs-chevrons-right"></i>
      </button>
      <div class="hamburger">
        <i class="bx bx-menu" id="menuIcon"></i>
      </div>
    </div>

    <div class="menu-items-container">
      <div class="title">
        <h4>Menu</h4>
        <span class="line"></span>
      </div>
      <ul class="menu-items">
        <li>
          <a href="${basePath}/Projects/3-Lightbox/Lightbox.html" class="flex">
            <i class="bx bx-images"></i>
            <span class="menu-item-title">Lightbox</span>
            <span class="tooltip">Lightbox</span>
          </a>
        </li>
        <li>
          <a href="${basePath}/Projects/2-TimeApp/TimeApp.html" class="flex">
            <i class="bx bx-timer"></i>
            <span class="menu-item-title">Time App</span>
            <span class="tooltip">Time App</span>
          </a>
        </li>
        <li>
          <a href="${basePath}/Projects/1-Calculator/Calculator.html" class="flex">
            <i class="bx bx-calculator"></i>
            <span class="menu-item-title">Calculator</span>
            <span class="tooltip">Calculator</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex">
            <i class="bx bx-map"></i>
            <span class="menu-item-title">More Projects...</span>
            <span class="tooltip">Polish Map</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="menu-items-container">
      <div class="title">
        <h4>Contact</h4>
        <span class="line"></span>
      </div>
      <ul class="menu-items">
        <li>
          <a href="https://dribbble.com/KamilKoziol" target="_blank" class="flex">
            <i class="bx bxl-dribbble"></i>
            <span class="menu-item-title">Dribbble</span>
            <span class="tooltip">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/kamilkoziol5" target="_blank" class="flex">
            <i class="bx bxl-github"></i>
            <span class="menu-item-title">Github</span>
            <span class="tooltip">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/kamilkozio2" target="_blank" class="flex">
            <i class="bx bxl-behance"></i>
            <span class="menu-item-title">Behance</span>
            <span class="tooltip">Behance</span>
          </a>
        </li>
        <li>
          <a href="mailto:kamilkoziol529@gmail.com" class="flex">
            <i class="bx bxl-gmail"></i>
            <span class="menu-item-title">Gmail</span>
            <span class="tooltip">Gmail</span>
          </a>
        </li>
      </ul>
    </div>
  `;

  const sidebarCtn = document.querySelector(".sidebar-app");
  if (sidebarCtn) {
    sidebarCtn.appendChild(nav);
  } else {
    console.error("Nie znaleziono elementu .sidebar-app");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();

  const sidebar = document.querySelector(".sidebar");
  const toogleBtn = document.getElementById("toogler-btn");
  const hamburgerBtn = document.querySelector(".hamburger");
  const menuIcon = document.getElementById("menuIcon");

  if (toogleBtn && sidebar) {
    toogleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      toogleBtn.classList.toggle("rotate");
    });
  }

  if (hamburgerBtn && sidebar && menuIcon) {
    hamburgerBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");

      if (menuIcon.classList.contains("bx-menu")) {
        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bx-x");
      } else {
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
      }
    });
  }
});
