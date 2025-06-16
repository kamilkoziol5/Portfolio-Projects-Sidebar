import { renderTooltip } from "./renderTooltip.js";
import { cities } from "./cities.js";

export function renderMap() {
  const app = document.querySelector(".app");
  const map = document.createElement("div");
  map.classList.add("map");

  const paragraph = document.createElement("p");

  paragraph.innerHTML = `
    <p class="map-text">
        <span>Kliknij na marker</span> by przejść do strony danego miasta
      </p>
  
  `;
  app.append(map, paragraph);

  cities.forEach((city) => {
    const a = document.createElement("a");
    a.href = city.href;
    a.classList.add("map-marker");
    a.dataset.population = city.population;
    a.dataset.name = city.name;
    a.target = "blank";
    a.style.left = `${city.map_x_percent}%`;
    a.style.top = `${city.map_y_percent}%`;

    a.textContent = city.name;
    app.querySelector(".map").append(a);
  });

  renderTooltip(map);
}
