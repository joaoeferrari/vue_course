// Arquivo: js/components/class7/Assignment.js

export default {
    template: `
        <li>
            <label class="p-2  flex justify-between items-center">
                
                <span>{{ assignment.name }}</span>
                <input type="checkbox" v-model="assignment.complete" class="ml-5">

            </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}