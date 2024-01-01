function getIdea() {
  // Ophalen opgeslagen formulieren uit localStorage
  const storedForms = JSON.parse(localStorage.getItem("forms"));

  // Zoek de container waarin de resultaten moeten worden toegevoegd
  const resultatenContainer = document.getElementById("resultaten");

  // Controleren of er gegevens zijn opgeslagen
  if (storedForms && storedForms.length > 0) {
    // Itereren over alle formulieren
    storedForms.forEach((formData, index) => {
      // Voeg een dynamische link toe aan de gegenereerde gegevens
      const link = document.createElement("a");
      link.href = `idee.html?index=${index}`; // Voeg een query parameter toe met de index
      link.innerHTML = `<strong>Idee ${index + 1}</strong>`; // Maak de tekst klikbaar
      link.style.display = "block"; // Plaats het op een nieuwe regel

      // Voeg het formulier toe aan de container binnen de main-sectie
      resultatenContainer.appendChild(link);

      // Voeg de gegevens toe aan de container
      const detailsContainer = document.createElement("div");
      detailsContainer.innerHTML = `<p>Onderwerp: ${formData.onderwerp}</p>
                                              <p>Idee: ${formData.idee}</p>
                                              <p>Afdeling: ${formData.afdeling}</p>`;

      // Voeg het veld voor het bestand toe als het aanwezig is
      if (formData.bestand) {
        detailsContainer.innerHTML += `<p>Bestand: ${formData.bestand}</p>`;
      }

      // Voeg de details-container toe aan de resultaten-container
      resultatenContainer.appendChild(detailsContainer);
    });
  } else {
    // Toon een bericht als er geen opgeslagen gegevens zijn gevonden
    resultatenContainer.innerHTML = "<p>Geen opgeslagen gegevens gevonden.</p>";
  }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

document.querySelectorAll(".idee_box").forEach(function (box) {
  box.addEventListener("click", function () {
    // Navigeer naar de pagina "idee.html"
    window.location.href = "idee.html";
  });
});
