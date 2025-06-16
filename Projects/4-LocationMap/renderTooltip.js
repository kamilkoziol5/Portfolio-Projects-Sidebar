export function renderTooltip(map) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("map-tooltip");

  map.append(tooltip);

  const markers = document.querySelectorAll(".map-marker");

  markers.forEach((marker) => {
    marker.addEventListener("mouseover", (e) => {
      const name = marker.dataset.name;
      const population = marker.dataset.population;
      const formattedPopulation = population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      tooltip.innerHTML = `
          <h2>${name}</h2>
          <span>Populacja: <span class="strong">${formattedPopulation}</span></span>
        `;
      tooltip.classList.add("active");
      tooltip.style.left = `${e.clientX - 70}px`;
      tooltip.style.top = `${e.clientY + 30}px`;
      tooltip.style.display = "block";
    });

    marker.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.clientX - 70}px`;
      tooltip.style.top = `${e.clientY + 30}px`;
    });

    marker.addEventListener("mouseout", () => {
      tooltip.innerHTML = "";
      tooltip.classList.remove("active");
    });
  });
}
