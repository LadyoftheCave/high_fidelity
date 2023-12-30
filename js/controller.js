function saveIdeaForm() {
    // Verkrijg formuliergegevens
    const formData = {
        onderwerp: document.getElementById('tekstveld').value,
        idee: document.getElementById('tekstarea').value,
        afdeling: document.getElementById('selectie').value
    };

    // Ophalen opgeslagen formulieren
    const storedForms = JSON.parse(localStorage.getItem('forms')) || [];

    // Toevoegen van nieuwe formuliergegevens
    storedForms.push(formData);

    // Opnieuw opslaan van alle formulieren
    localStorage.setItem('forms', JSON.stringify(storedForms));

    // Doorsturen naar andere pagina
    window.location.href = 'idee_overzicht.html';
}