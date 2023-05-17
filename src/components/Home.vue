<template>
    <div id="task_created">
        <div class="container">
            <div class="row m-5 row_content">
                <div class="col-3 bg-success content">
                    <p>Total Number of Completed Tasks</p>
                    <span v-show="state = true" :completed="completed">{{ completed }}</span>
                </div>
                <div class="col-3 bg-warning content">
                    <p>Total Number of Tasks in progress</p>
                    <span v-show="state = true" :inProgress="inProgress">{{ inProgress }}</span>
                </div>
                <div class="col-3 bg-danger content">
                    <p>Total Number of Pending Tasks</p>
                    <span :pending="pending">{{ pending }}</span>
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
    export default {
        name: 'Home',
        data() {
            return {
                length: '',
                pending: '',
                inProgress: '',
                completed: '',
                state: true
            }
        },
        methods: {
            
        },
        created() {
            let allTask = JSON.parse(localStorage.getItem('Tasks'))
            let inProgress = allTask.map(m => m.status).filter(s => s == 'In Progress')
            let pending = allTask.map(m => m.status).filter(s => s == 'Pending')
            let completed = allTask.map(m => m.status).filter(s => s == 'Completed')
            this.inProgress = inProgress.length
            this.pending = pending.length
            this.completed = completed.length
        },
        mounted() {
            let allTask = JSON.parse(localStorage.getItem('Tasks'))
            let inProgress = allTask.map(m => m.status).filter(s => s == 'In Progress')
            let pending = allTask.map(m => m.status).filter(s => s == 'Pending')
            let completed = allTask.map(m => m.status).filter(s => s == 'Completed')
            this.inProgress = inProgress.length
            this.pending = pending.length
            this.completed = completed.length
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
.content p { 
    font-size: 18px;
    font-weight: bold 
}
.content span {
    background: #dcdcdc;
    width: 30px;
    text-align: center;
    border: transparent;
    font-size: 20px;
    font-weight: bold 
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

