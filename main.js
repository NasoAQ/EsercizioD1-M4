/* 1) crea una funzione che controlli due numeri interi. ritorna true se uno dei due è 50 o se la somma dei due è 50*/

function numeriInteri(num1, num2) {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}

console.log("I numeri soddisfano le condizioni?", numeriInteri(50, 10));
console.log("I numeri soddisfano le condizioni?", numeriInteri(120, 50));
console.log("I numeri soddisfano le condizioni?", numeriInteri(27, 23));

/* 2) crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. passa la stringa e la posizione come parametri e ritorna la stringa modificata*/

function rimuoviCarattere(str, posizione) {
    if (posizione < 0 || posizione >= str.length) {
      // Posizione non valida, restituisci la stringa originale senza modifiche
      return str;
    }
  
    // Rimuovo il carattere alla posizione specificata con il metodo slice
    const stringaModificata = str.slice(0, posizione) + str.slice(posizione + 1);
  
    return stringaModificata;
  }
  
  console.log(rimuoviCarattere("Ciao, Naso!", 3));
  console.log(rimuoviCarattere("JavaScript", 0));
  console.log(rimuoviCarattere("Example", 7));
  

  /* 3) crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. ritorna true se rispecchiano queste condizioni, altrimenti ritorna false.*/

  function trovaRange(num1, num2) {
    const range1 = (num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100);
    const range2 = (num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100);
  
    return range1 && range2;
  }

  console.log("I numeri rispecchiano le condizioni? ",trovaRange(45, 55));
  console.log("I numeri rispecchiano le condizioni? ",trovaRange(80, 95));
  console.log("I numeri rispecchiano le condizioni? ",trovaRange(30, 50));
  console.log("I numeri rispecchiano le condizioni? ",trovaRange(65, 110));
  
  /* 4) crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorna "false" */

  function controlCity(nomeCity) {
    if ((nomeCity.length >= 3 && nomeCity.substring(0, 3) === "Los") || 
        (nomeCity.length >= 3 && nomeCity.substring(0, 3) === "New")) {
      return nomeCity;
    } else {
      return false;
    }
  }

  console.log(controlCity("Los Angeles"));
  console.log(controlCity("New York"));
  console.log(controlCity("Chicago"));
  console.log(controlCity("New Delhi"));

  /* 5) crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro*/

  function sommaArray(arr) {
    let sum = 0;
    for (const element of arr) {
      sum += element;
    }
    return sum;
  }
  
  const numeri = [1, 2, 3, 4, 10];
  console.log("La somma degli elementi dell'array è:", sommaArray(numeri));
  
  const altriNumeri = [120, 230, 340];
  console.log("La somma degli elementi dell'array è:", sommaArray(altriNumeri));
  
  /* 6) crea un funzione che controlli che un array NON contenga i numeri 1 o 3. Se non li contiene, ritorna true, altrimenti ritorna false */
  
  function arrayControl(arr) {
    for (const num of arr) {
      if (num === 1 || num === 3) {
        return false;
      }
    }
    return true;
  }

  console.log("NON sono presenti i numeri 1 o 3: ", arrayControl([2, 4, 5, 6]));
  console.log("NON sono presenti i numeri 1 o 3: ", arrayControl([1, 2, 3]));
  console.log("NON sono presenti i numeri 1 o 3: ", arrayControl([4, 1, 6]));
  console.log("NON sono presenti i numeri 1 o 3: ", arrayControl([7, 8, 9]));

  /* 7) crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° ritorna "acuto"
Angolo ottuso: tra i 90° e i 180° ritorna "ottuso"
Angolo retto: 90° ritorna "retto"
Angolo piatto: 180° ritorna "piatto" */

function trovaAngolo(gradi) {
    let tipoDiAngolo;

    if (gradi < 90) {
      tipoDiAngolo = "acuto";
    } else if (gradi === 90) {
      tipoDiAngolo = "retto";
    } else if (gradi > 90 && gradi < 180) {
      tipoDiAngolo = "ottuso";
    } else if (gradi === 180) {
      tipoDiAngolo = "piatto";
    } else {
      tipoDiAngolo = "non riconosciuto";
    } return gradi + " è " + tipoDiAngolo
  }

  console.log("Che tipo di angolo è?", trovaAngolo(45));
  console.log("Che tipo di angolo è?", trovaAngolo(90));
  console.log("Che tipo di angolo è?", trovaAngolo(120));
  console.log("Che tipo di angolo è?", trovaAngolo(180));
  console.log("Che tipo di angolo è?", trovaAngolo(200));

  /* 8) Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare FIAT */

  function craeAcronimo(frase) {
    const parole = frase.split(" ");
    let acronimo = "";
  
    for (const parola of parole) {
      acronimo += parola[0].toUpperCase();
    }
  
    return frase + " è " + acronimo;
  }

  const frase = "non abbiamo solo ostriche anche quadri";

  console.log("L'acronimo di", craeAcronimo(frase));

  //EXTRA

  
  
  
  