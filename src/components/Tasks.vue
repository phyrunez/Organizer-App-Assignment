<template>
    <div class="">
        <div class="row">
            <div class="col-6">
                <div id="tasks" class="">
                    <h1>Create Tasks</h1>
                    <div id="form_div">
                        <input 
                            v-model="newTask" 
                            type="text"  
                            placeholder="create task..."
                        />
                    </div>
                </div> 
                <div id="sub_tasks">
                    <h4>Sub Tasks...</h4>
                    <div>
                        <input 
                            v-model="first" 
                            type="text" 
                            placeholder="create task..."
                        />
                        <input 
                            v-model="second" 
                            type="text" 
                            placeholder="create task..."
                        />
                        <input 
                            v-model="third" 
                            type="text" 
                            placeholder="create task..."
                        />
                        <select v-model="status">
                            <option disabled value="">Please select one</option>
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                        <button @click.prevent="addTask()">Add Task</button>
                    </div>
                </div> 
            </div>

            <div class="col-6 ml-5 add-task">
                <add-tasks v-for="(task, index) in tasks"
                    :task="task" 
                    @remove="removeTask(index)"
                    @complete="completeTask(task)"
                    :key="index"
                >
                </add-tasks>
            </div>

            <div v-show="showHome">
                <home v-for="(task, index) in tasks"
                    :task="task"
                    :key="index"
                ></home>
            </div>

        </div>

    </div>
</template>

<script>
    import AddTasks from "./AddTasks.vue"
    import Home from "./Home.vue"

    export default {
        name: 'Tasks',
        components: {
            'add-tasks': AddTasks,
            'home': Home
        },
        data() {
            return {
                selectedData: {},
                newTask: '',
                first: '',
                second: '',
                third: '',
                status: '',
                showHome: false,
                tasks: [
                    {
                        title: 'Go Shopping',
                        taskId: 1,
                        completed: false,
                        status: 'pending',
                        first: 'Buy Beverages',
                        second: 'Get Chocolate',
                        third: 'buy Clothes',
                    }
                ],
            }
        },
        computed: {
            
        },
        methods: {
            addTask() {
                const subTasks = [this.selectedData]
                subTasks.push({ first: this.first, second: this.second, third: this.third })
                if (this.newTask) {
                    this.tasks.push({
                        title: this.newTask,
                        completed: this.completed,
                        status: this.status,
                        first: this.first,
                        second: this.second,
                        third: this.third,
                    });
                }
                localStorage.setItem('Tasks', JSON.stringify(this.tasks))
                console.log(subTasks, this.tasks)
                this.newTask = '',
                this.first = '',
                this.second = '',
                this.third = '',
                this.status = ''
            },
            completeTask(task) {
                task.completed = !task.completed;
            },
            removeTask(index) {
                this.tasks.splice(index, 1);
            },
        }
    }
</script>

<style scoped>
body { overflow-x: hidden; width: 100%; }
#tasks {
    background: rgb(106, 90, 205, .8);
    height: 170px;
    width: 700px;
    margin: 90px auto 0;
    border-radius: 0 10px;
}

#tasks h1 {
    padding-top: 10px;
    text-align: center;
    color: white;
}
#form_div {
    width: 600px;
    margin: 20px auto 0;
    text-align: center;
}

input {
    width: 600px;
    padding: 10px;
    border-radius: 10px 0;
    outline: none;
    border: white;
}

#sub_tasks {
    background: hsl(0, 40%, 50%);
    opacity: .8;
    height: 250px;
    width: 700px;
    margin: 5px auto 0;
    border-radius: 0 10px;
    text-align: center
}

#sub_tasks h4 {
    padding: 20px 0 0 10px;
    color: white
}
#sub_tasks input, select {
    width: 300px;
    padding: 10px;
    border-radius: 10px 0;
    outline: none;
    border: white;
    margin: 10px 10px;
}

button {
    width: 120px !important;
    margin: 30px auto 0 !important;
    background: green;
    color: white;
    border: green;
    border-radius: 10px 0 0 0;
    padding: 5px;
    float: right;
    cursor: pointer;
    font-weight: bold;
}
.add-task{
    margin-top: 70px;
}
</style>

