function login() {
    let user = document.getElementById("user").value; // errore: ID errato
    let pass = document.getElementById("pass").value;
    if (user == "admin" && pass == "password") { // errore: uso di un solo "="
        alert("Accesso riuscito");
    } else {
        alert("Accesso negato");
    }
}