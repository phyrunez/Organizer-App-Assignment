<template>
    <div>
        <div id="added-tasks">
            <p @click.self="$emit('complete')">
                Task: {{ task.title }}
                <span @click="$emit('remove')" :style="{ color: 'red', fontSize: '20px'}">
                    <b-icon class="ml-2" icon="trash-fill"></b-icon>
                </span>
                <span @click="getDetails(task)" :style="{ color: 'green', fontSize: '20px' }">
                    <b-icon class="pen" icon="pen-fill"></b-icon>
                </span>
            </p>
            <ol>
                <li>{{ task.first }}</li>
                <li>{{ task.second }}</li>
                <li>{{ task.third }}</li>
            </ol>
            <span>
                <p v-if="task.status === 'In Progress'" id="in-progress">{{ task.status }}</p>
                <p v-else-if="task.status === 'Completed'" id="completed">{{ task.status }}</p>
                <p v-else="task.status === 'Pending'" id="pending">{{ task.status }}</p>
            </span>
        </div>
        <modal 
            v-show="showModal" 
            :task="task"
            @close="close(task)"
        >
        </modal>
    </div>
</template>

<script>
    import Modal from './Modal.vue'
    export default {
        name: 'AddTask',
        components: {
            'modal': Modal
        },
        props: ['task'],
        data() {
            return {
                success: true,
                showModal: false,
                newTask: '',
                first: '',
                second: '',
                third: '',
            }
        },
        methods: {
            close() {
                this.showModal = false
            }, 
            getDetails() {
                this.showModal = true
                console.log('I am Here')
            }
        }
    }
</script>

<style scoped>
#added-tasks  {
    background: #dcdcdc;
    border: 1px solid #dcdcdc;
    width: 700px;
    margin: 20px auto 0;
    padding: 20px;
}

#added-tasks p span {
    padding: 0 5px;
    cursor: pointer;
}
.success-bg {
    background: green;
    border: green
}
span { 
    float: right; 
    padding-right: 3px;
}
#pending {
    text-transform: uppercase;
    font-size: bold;
    background: #dc3545;
    margin-top: -20px;
    padding: 6px;
    color: white;
    border-radius: 10px 0 0 0
}
#in-progress {
    text-transform: uppercase;
    font-size: bold;
    background: #ffc107;
    margin-top: -20px;
    padding: 6px;
    color: white;
    border-radius: 10px 0 0 0
}
#completed {
    text-transform: uppercase;
    font-size: bold;
    background: #198754;
    margin-top: -20px;
    padding: 6px;
    color: white;
    border-radius: 10px 0 0 0
}
</style>
