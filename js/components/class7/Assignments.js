import AssignmentList from "./AssignmentList.js"; 
import AssignmentCreate from "./AssignmentCreate.js";

export default{
    components:{AssignmentList, AssignmentCreate},
    // template posiciona os componentes na tela
    template:`
        <section class="flex gap-8">

            <assignment-list :assignments="filters.inProgress" title="In Progress" >
            
                <assignment-create @add="add" ></assignment-create> 
            
            </assignment-list>
            
            <div v-show="showCompleted" >
                <assignment-list 
                    :assignments="filters.completed" 
                    title="Completed" 
                    can-toggle 
                    @toggle="showCompleted = !showCompleted "    
                >
                </assignment-list>
            </div>
            
            

        </section>
        
    `,
    data() { // unico componente com a lista completa
        return {
            assignments: [  ],
            showCompleted: true
        };
    }, 

    // propriedade computada
    computed: {
        
        filters(){
            return {
                // componente filter cria e atualiza as duas listas filtradas
                inProgress: this.assignments.filter(assignment => !assignment.complete), // incompletas
                completed: this.assignments.filter(assignment => assignment.complete), // completas

            };
        }
    },

    created(){
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments =>{
                this.assignments = assignments
            });
            
    },

    methods: { 
        add(name){ // ação para adicionar uma nova tarefa ao array "assignments"
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
            
            
        }

        

        
    }
}
