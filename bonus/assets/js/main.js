/*******************************
L'utente vuole poter modificare una task giá inserita
ma vuole anche poter indicare che la task é stata completata.
Inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate".
Ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino".
Si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino".
********************************/

let appTodo = new Vue({
  el: "#appTodo",
  data: {
    logoImg: "assets/img/logo.png",
    newTodo: "",
    toDoList: [],
    checkedList: [],
    deletedList: []
  },
  created() {
     document.addEventListener("keyup", event => {
      if (event.keycode === 13 ) {
      this.addNew();
      }
    });
  },
  methods: {

    // Funzione che aggiunge la task scritta nell'input
    addNew: function (){
      // Uso un if per impostare la condizione
      if (this.newTodo.length > 3) {
        this.toDoList.push(this.newTodo);
        this.newTodo="";
      } else {
        alert("Hai inserito un comando troppo corto! Devi inserire un minimo di 4 caratteri");
      }
    },

    // Funzione che aggiunge la task al cestino cancellandola dalla to do list
    removeTask: function(index) {
      this.deletedList.push(this.toDoList[index]);
      this.toDoList.splice(index, 1);
      console.log(this.deletedList);
    },

    // Funzione che ripristina una task dal cestino alla to do list
    redoTasks: function(index) {
      this.toDoList.push(this.deletedList[index]);
      this.deletedList.splice(index, 1);
    },

    // Funzione che aggiunge la task alla lista delle task completate
    taskDone: function(index){
      this.checkedList.push(this.toDoList[index]);
      this.toDoList.splice(index, 1);
    },

    // Funzione che svuota il Cestino
    removeAll: function(){
      this.deletedList.length = 0;
    }
  }

});
