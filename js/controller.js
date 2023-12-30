function saveIdeaForm() {
  // Verkrijg formuliergegevens
  const formData = {
    onderwerp: document.getElementById("tekstveld").value,
    idee: document.getElementById("tekstarea").value,
    afdeling: document.getElementById("selectie").value,
  };

  // Ophalen opgeslagen formulieren
  const storedForms = JSON.parse(localStorage.getItem("forms")) || [];

  // Toevoegen van nieuwe formuliergegevens
  storedForms.push(formData);

  // Opnieuw opslaan van alle formulieren
  localStorage.setItem("forms", JSON.stringify(storedForms));

  // Doorsturen naar andere pagina
  window.location.href = "idee_overzicht.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // Haal de waarde van de 'index' query parameter op
  const urlParams = new URLSearchParams(window.location.search);
  const index = urlParams.get("index");

  // Ophalen opgeslagen formulieren uit localStorage
  const storedForms = JSON.parse(localStorage.getItem("forms")) || [];

  // Controleren of er gegevens zijn opgeslagen en of de index bestaat
  if (storedForms && storedForms.length > 0 && index !== null) {
    // Haal de specifieke gegevens op voor het formulier met de opgegeven index
    const formData = storedForms[index];

    // Selecteer de container voor resultaten
    const resultatenDiv = document.getElementById("resultaten");

    const width = 1008; // Pas de breedte aan naar het gewenste formaat
    const height = 400; // Pas de hoogte aan naar het gewenste formaat

    fetch(`https://picsum.photos/${width}/${height}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.url;
      })
      .then(imageUrl => {
        // Voeg het specifieke idee toe aan de container
        resultatenDiv.innerHTML = `
                    <div class="resultaat">

                        <h2>${formData.onderwerp}</h2><br>
                        <img src="${imageUrl}" alt="Random Image">
                        <p id="demo"></p>
                        
                        <p><br>${formData.idee}</p>

                    </div>
                `;
      })
      .catch(error => console.error("Fetch error:", error));
  }
});
