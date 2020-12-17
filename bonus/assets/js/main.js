/*******************************
Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
Da tenere a mente:
Ricordate di scrivere le istruzioni prima di iniziare a lavorare cercate di descrivere in modo sintetico gli step che pensate siano necessari.
Consultate la documentazione e se siete bloccati, aprite un ticket.
********************************/

let appTodo = new Vue({
  el: "#appTodo",
  data: {
    logoImg: "assets/img/logo.png",
    newTodo: "",
    toDoList: []
  },
  created() {
     document.addEventListener("keyup", event => {
      if (event.keycode === 13 ) {
      this.addNew();
      }
    });
  },
  methods: {

    addNew: function (){
      //Uso un operatore ternario per impostare la condizione
      (this.newTodo.length > 3) ? this.toDoList.push(this.newTodo) : alert("Hai inserito un comando troppo corto! Devi inserire un minimo di 4 caratteri") ;
    },

    removeTask: function(index) {
      this.toDoList.splice(index, 1);
    }
  }

});
