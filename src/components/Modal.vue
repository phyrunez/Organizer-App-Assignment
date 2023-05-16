<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <h2 id="header-h2">Edit Task</h2>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <!-- default body -->
                            <input 
                                v-model="newTask" 
                                type="text" 
                                placeholder="change task..."
                            />
                           <div id="sub_tasks">
                                <h6>Edit SubTasks...</h6>
                                <input 
                                    v-model="first" 
                                    type="text" 
                                    placeholder="edit sub-task..."
                                />
                                <input 
                                    v-model="second" 
                                    type="text" 
                                    placeholder="edit sub-task..."
                                />
                                <input 
                                    v-model="third" 
                                    type="text" 
                                    placeholder="edit sub-task..."
                                />
                                <select v-model="status">
                                    <option disabled value="">Please select one</option>
                                    <option>Pending</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </select>
                           </div>
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            
                            <button class="modal-default-button" @click="$emit('close')">update task</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Modal',
        props: ['task'],
        data() {
            return {
                newTask: '',
                first: '',
                second: '',
                third: '',
                status: ''
            }
        },
        created() {
            this.newTask = this.task.title
            this.first = this.task.first
            this.second = this.task.second
            this.third = this.task.third
            this.status = this.task.status
        },
        methods: {
            
        }
    }
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  height: 500px;
  padding: 20px 35px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header #header-h2 {
    text-align: center;
}

/* .modal-header h3 {
  margin-top: 0;
  color: #42b983;
} */

.modal-body {
  margin: 20px 0;
}

.modal-body input {
    width: 100%;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    border: none;
    outline: none;
}

#sub_tasks {
    margin: 50px 0
}

#sub_tasks input {
    width: 60%;
    margin: 5px 5px;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    border: none;
    outline: none;
}

#sub_tasks select {
    width: 60%;
    margin: 5px 5px;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    border: none;
    outline: none;
}

.modal-default-button {
  float: right;
  background: green;
  border: green;
  margin: -20px 0 0 0;
  border-radius: 10px 0 0 0;
  padding: 8px;
  cursor: pointer;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>