// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


$(document).ready(function(){


  var studente = {
    nome: "Alessandro",
    cognome: "Andreoli",
    eta: 26
  }

  for (var obj in studente){
    $("#oggetto-studenti").append(studente[obj] + " ")
  }

  var arrayStudenti = [
    {
      nome: "Andrea",
      cognome: "Galeoni",
      eta: 46
    },
    {
      nome: "Matteo",
      cognome: "Mirato",
      eta: 16
    },
    {
      nome: "Annalisa",
      cognome: "Marinara",
      eta: 21
    },
    {
      nome: "Alberto",
      cognome: "Buro",
      eta: 59
    },
    {
      nome: "Franco",
      cognome: "Ciccio",
      eta: 88
    }
  ]

  $("button").click(function(){

    var valoreInputNome = $("#nome").val();
    var valoreInputCognome = $("#cognome").val();

    if (valoreInputNome == "" || valoreInputCognome == "" ) {

      alert("Non lasciare campi vuoti")

    } else {
      arrayStudenti.push({
        nome: valoreInputNome,
        cognome: valoreInputCognome
      })

      $("#array-studenti").append("<li>" + arrayStudenti[i].nome + " " + arrayStudenti[i].cognome + "</li>")
      $("#nome").val("");
      $("#cognome").val("");
      i++;

      console.log(arrayStudenti.length);
    }


  })

  arrayStudenti.push({
    nome: prompt("MettiNomeStudente"),
    cognome: cognomePrompt = prompt("MettiCognomeStudente"),
    eta: etaPrompt = prompt("MettiEtaStudente")
  })


  for (var i = 0; i < arrayStudenti.length; i++) {

    $("#array-studenti").append("<li>" + arrayStudenti[i].nome + " " + arrayStudenti[i].cognome + "</li>")

  }



})
