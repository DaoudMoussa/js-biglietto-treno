// Il programma deve chiedere all'utente il numero di km da percorrere e la sua età.
// Con i dati inseriti deve quindi calcolare il corretto costo del biglietto in base a queste regole:
// il prezzo del biglietto dipende dalla distanza da percorrere e costa € 0.21 / km
// è previsto uno sconto del 20% per il minorenni
// gli over 65 hanno diritto ad uno sconto del 40%
const scontoMinorenni = 0.2;
const scontoAnziani = 0.4;
// Utente inserisce Km da percorrere
var distance = parseInt(prompt("inserisci la distanza in Km per dove vuoi andare"));
while (isNaN(distance) || distance <= 0) {
    distance = parseInt(prompt("Il dato inserito non é valido inserire di nuovo la distanza in Km"));
}

// Utente inserisce etá
var age = parseInt(prompt("Inserisci la tua etá"));
while (isNaN(age) || age <= 0) {
    age = parseInt(prompt("Il dato inserito non é valido inserire di nuovo la tua etá"));
}

// calcolo e comunicazione dei prezzi in funzione dell'etá dell'utente e della distanza
var cost = distance * 0.21;
document.getElementById('prezzo-no-sconto').innerHTML = cost

if (age < 18) {
    cost = cost - (cost * scontoMinorenni);
    cost = cost.toFixed(2);
    document.getElementById('prezzo-sconto').innerHTML = "Ma solo per te: " + cost + "€"
} else if (age > 65) {
    cost = cost - (cost * scontoAnziani);
    cost = cost.toFixed(2);
    document.getElementById('prezzo-sconto').innerHTML = "Ma solo per te: " + cost + "€";
}
