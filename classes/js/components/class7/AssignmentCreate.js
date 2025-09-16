export default {
    // ao enviar o formulário nao recarregar a pagina, e sim chamar o metodo add
    template:`
        <form @submit.prevent="add" > 
            <div class="border border-gray-600 text-black flex" >
                <input v-model="newAssignment" placeholder="New assignment" class="p-2 w-full" />
                <button type="submit" class="bg-white p-2 border-l "> Add </ button>
            </div>
        </form>
    `,

    props: {
        assignments: Array
    },

    data(){
        return {
            newAssignment:''
        }
    },
    methods: {
        add(){
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
            
        }
    }
}