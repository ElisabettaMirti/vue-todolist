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
        isDone : function(task){
            if (task.done === false) {
                task.done = true;
            } else {
                task.done = false;
            };
        }
    }
}).mount('#app');

