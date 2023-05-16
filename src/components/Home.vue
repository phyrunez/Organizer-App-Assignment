<template>
    <div id="task_created">
        <div class="container">
            <div class="row m-5 row_content">
                <div class="col-3 bg-success content">
                    <p>Total Number of Completed Tasks</p>
                    <span @click.prevent="checkTask()">0</span>
                </div>
                <div class="col-3 bg-danger content">
                    <p>Total Number of Tasks in progress</p>
                    <span>0</span>
                </div>
                <div class="col-3 bg-warning content">
                    <p>Total Number of Pending Tasks</p>
                    <span>0</span>
                </div>
            </div>
        </div>
        <div id='created_task'>
            <h2>All Tasks Created</h2>
            <a href="/tasks"><button>Tasks</button></a>
        </div>
    </div>
</template>

<script>
    import AddTasks from './AddTasks.vue'
    export default {
        name: 'Home',
        props: ['task'],
        components: {
            'add-tasks': AddTasks
        },
        methods: {
            checkTask() {
                console.log(this.task)
            }
        },
        mounted() {
            let me = JSON.parse(localStorage.getItem('Tasks'))
            console.log(me)
            console.log(me.title)
        }
    }
</script>

<style scoped>
#task_created {
    margin: 100px auto 0;
}

#task_created h2 {
    text-align: center;
    padding: 20px 0;
}
#added-tasks {
    background: #dcdcdc;
    border: 1px solid #dcdcdc;
    width: 700px;
    margin: 20px auto 0;
    padding: 20px;
}
.row_content {
    border-radius: 10px 0;
    width: 100%;
}
.content {
    padding: 35px;
    float: left;
    width: 400px;
    margin: 0 10px;
    border-radius: 10px 0
}
.content p, span { 
    font-size: 17px;
    font-weight: bold 
}
.content span {
    background: #dcdcdc;
    width: 30px;
    text-align: center;
    border: transparent;
}
span { 
    float: right; 
    padding-right: 3px;
}

#created_task {
    text-align: center
}

#created_task button {
    background: green;
    border: green;
    width: 100px;
    border-radius: 10px 0 0 0;
    padding: 8px;
    cursor: pointer;
}
</style>

