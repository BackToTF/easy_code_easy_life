function inviaBonifico() {
    let destinatario = document.getElementById("destinatario").value; // errore: "values" non esiste
    let importo = document.getElementById("importo").value;
    if (importo > 0) { // errore: logica errata
        alert("Bonifico inviato con successo!");
    } else {
        alert("Errore: Importo negativo");
    }
}