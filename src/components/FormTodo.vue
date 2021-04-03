<template>
    <div class="content-form-todo">
        <form class="todo-form">
            <input v-model="newTodo" class="todo-form-input" type="text" placeholder="Add your new todo" autocomplete="off">
            <button v-on:click="addTodo" class="todo-form-add">+</button>
        </form>
        <Message :message="message" v-show="showMessage"/> 
        
    </div>
</template>
<script>
import Message from '@/components/Message'

	export default {
		name: 'FormTodo',
		data() {
			return {
				newTodo: '',
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
            Message
        },
		methods: {
			addTodo(e) {
				e.preventDefault()
                this.todos = JSON.parse(localStorage.getItem('todos'))

                if(this.newTodo != '') {
                    if(this.existTodo(this.newTodo)){
                        this.message = 'Ya existe una tarea con esa descripción'
                        this.showMessage = true
                        setTimeout(() => {
                            this.showMessage = false
                        }, 5000)
                    } 
                    else {
                        this.todos.push(this.newTodo)
                        localStorage.setItem('todos', JSON.stringify(this.todos))
                        this.newTodo = ''
                        this.$emit('addTodo')
                    }
                }
			},
            existTodo(todo) {
                let index = this.todos.indexOf(todo)
                if(index > -1) {
                    return true
                }
                return false
            }

		}
	}
</script>
<style scoped>
    .content-form-todo {
        width: 100%;
    }
	.todo-form {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0;
        box-sizing: content-box;
    }
    .todo-form-input {
        font-size: 16px;
        color: #999;
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 0px;
        padding-left: 15px;
        margin-right: 10px;
        outline-color: purple;
    }
    .todo-form-input::placeholder {
        color: #ccc;
    }
    .todo-form-add {
        box-sizing: content-box;
        width: 40px;
        height: 100%;
        border: none;
        background: purple;
        color: #fff;
        font-size: 22px;
        font-weight: bold;
        border-radius: 3px;
        cursor: pointer;
    }
</style>