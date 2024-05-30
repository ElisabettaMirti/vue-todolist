const { createApp } = Vue;

createApp({
    data() {
        return {
            itemList: [
                {
                    content: "Fare la spesa",
                    done: false
                },
                {
                    content: "Portare a spasso il gatto",
                    done: false
                },
                {
                    content: "Comprare le zanzariere",
                    done: false
                },
                {
                    content: "Preparare il brodo per cena",
                    done: false
                },
                {
                    content: "Comprare un quaderno nuovo",
                    done: false
                }
            ]
        }
    },
    methods: {
        isDone : function(task){  //funzione per mettere e togliere la classe done al task
            if (task.done === false) {
                task.done = true;
            } else {
                task.done = false;
            }
        },

        removeTask: function(taskIndex){ //funzione per eliminare il task (grazie Giordano di avermi esplicato nuovamente lo splice)
            this.itemList.splice(taskIndex, 1);
        },

        addTask: function(newTaskContent){
            const newTask = {
                content: newTaskContent,
                done: false
            }
            this.itemList.push(newTask);
        }
    }
}).mount('#app');

