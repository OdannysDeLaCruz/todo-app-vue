<template>
    <div class="todo">
        <h1 class="text-4xl font-bold mb-3">Reminder</h1>
        <FormTodo v-on:addTodo="addedTodo" v-bind:placeholder="'Agrega tu nueva tarea'" /> 
        <ItemTodo v-on:addTodo="addedTodo" v-for="todo of todos" v-bind:key="todo" :todo="todo" v-on:removeTodo="removeTodo(todo)"/>
        <div>
            <modal-detail></modal-detail>
        </div>
    </div>
</template>

<script>
import ItemTodo from '@/components/ItemTodo'
import FormTodo from '@/components/FormTodo'
import ModalDetail from '@/components/ModalDetail'
export default {
    name: 'Todo',
    data() {
        return {
            todos: [],
            message: '',
            showMessage: false
        }
    },
    mounted() {
        if(localStorage.getItem('todos') != null) {
            this.todos = JSON.parse(localStorage.getItem('todos'))
        }
    },
    components: {
        ItemTodo, 
        FormTodo,
        ModalDetail
    },
    methods: {
        addedTodo() {
            this.todos = JSON.parse(localStorage.getItem('todos'))
        }, 
        removeTodo(t) {
            let index = this.todos.indexOf(t)
            if(index > -1) {
                this.todos.splice(index, 1)
                localStorage.setItem('todos', JSON.stringify(this.todos))
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .todo {
        background: #fff;
        padding: 20px;
        width: 80%;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }
</style>
