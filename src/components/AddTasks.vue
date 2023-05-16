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
            <span v-if="task.status === 'Pending'">
                <p id="pending">{{ task.status }}</p>
            </span>
            <span v-else-if="task.status === 'In Progress'">
                <p id="in-progress">{{ task.status }}</p>
            </span>
            <span v-else="task.status === 'Completed'">
                <p id="completed">{{ task.status }}</p>
            </span>
        </div>
        <modal 
            v-show="showModal" 
            :task="task"
            @close="close(task)"
        >
            <!-- <h1 slot="header">Edit Task</h1> -->
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
            close(task, taskId) {
                this.showModal = false
                let taskArr = [task]
                let updated_task = taskArr.findIndex(obj => obj.taskId == taskId)
                this.task[updated_task].title = this.newTask
                this.task[updated_task].first = this.first
                this.task[updated_task].second = this.second
                this.task[updated_task].third = this.third
                this.task[updated_task].status = this.status
                console.log(this.task.title, this.task.first)
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
    background: #198754;
    margin-top: -20px;
    padding: 6px;
    color: white;
    border-radius: 10px 0 0 0
}
#in-progress {
    text-transform: uppercase;
    font-size: bold;
    background: #dc3545;
    margin-top: -20px;
    padding: 6px;
    color: white;
    border-radius: 10px 0 0 0
}
#completed {
    text-transform: uppercase;
    font-size: bold;
    background: #ffc107;
    margin-top: -20px;
    padding: 6px;
    color: white;
    border-radius: 10px 0 0 0
}
</style>
