function renderSidebar() {
  const nav = document.createElement("nav");
  nav.classList.add("sidebar");
  nav.innerHTML = `
  <div class="logo-container">
    <a href="/index.html" class="logo">
      <img src="/images/logo.png" />
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
        <a href="/Projects/Lightbox-3/Lightbox.html" class="flex">
          <i class="bx bx-images"></i>
          <span class="menu-item-title">Lightbox</span>
          <span class="tooltip">Lightbox</span>
        </a>
      </li>
      <li>
        <a href="/Projects/TimeApp-2/TimeApp.html" class="flex">
          <i class="bx bx-timer"></i>
          <span class="menu-item-title">Time App</span>
          <span class="tooltip">Time App</span>
        </a>
      </li>
      <li>
        <a href="/Projects/Calculator-1/Calculator.html" class="flex">
          <i class="bx bx-calculator"></i>
          <span class="menu-item-title">Calculator</span>
          <span class="tooltip">Calculator</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex">
          <i class="bx bx-grid-alt"></i>
          <span class="menu-item-title">More Projects...</span>
          <span class="tooltip">More Projects</span>
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
  sidebarCtn.append(nav);
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  const sidebar = document.querySelector(".sidebar");
  const toogleBtn = document.getElementById("toogler-btn");
  const hamburgerBtn = document.querySelector(".hamburger");
  const menuIcon = document.getElementById("menuIcon");

  toogleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    toogleBtn.classList.toggle("rotate");
  });

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
});
