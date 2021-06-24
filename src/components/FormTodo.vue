<template>
    <div class="content-form-todo">
        <form class="todo-form">
            <input v-model="newTodo" class="todo-form-input" type="text" :placeholder="placeholder" autocomplete="off">
            <button v-on:click="addTodo" class="todo-form-add">+</button>
        </form>
        <Message :message="message" v-show="showMessage"/> 
    </div>
</template>
<script>
import Message from '@/components/Message'

export default {
	name: 'FormTodo',
    props: {
        placeholder: String,
        parent: {
            type: String,
            default: ''
        }
    },
	data() {
		return {
			newTodo: '',
            todos: [],
            subtodos: [],
            message: '',
            showMessage: false
		}
	},
    created() {
        if(localStorage.getItem('todos') == null || localStorage.getItem('todos') == '') {
            localStorage.setItem('todos', [])
        } else {
            if(localStorage.getItem('todos') != '') {
                this.todos = JSON.parse(localStorage.getItem('todos'))
            }
        }
    },
    components: {
        Message
    },
	methods: {
		addTodo(e) {
			e.preventDefault()
            this.todos = this.getItemLocalStorage('todos')
            if (this.parent != '') {
                // let indexParent = this.todos.indexOf(this.parent)
                this.subtodos.push(this.newTodo)
                this.newTodo = ''

                // console.log(this.todos, this.parent, indexParent, this.todos[indexParent])
                // console.log(this.subtodos)
            } else {
                if(this.newTodo != '') {
                    if(this.existTodo(this.newTodo)){
                        this.displayMessage('Ya existe una tarea con esa descripción', true, 5000)
                    } 
                    else {
                        this.todos.push(this.newTodo)
                        this.setItemLocalStorage('todos', this.todos)
                        this.$emit('addTodo')
                        this.newTodo = ''
                    }
                }                
            }
		},
        existTodo(todo) {
            let index = this.todos.indexOf(todo)
            if(index > -1) {
                return true
            }
            return false
        },
        displayMessage(msm, show, timeout) {
            this.message = msm
            this.showMessage = show
            setTimeout(() => {
                this.showMessage = false
            }, timeout)
        },
        setItemLocalStorage(item, data) {
            localStorage.setItem(item, JSON.stringify(data))
        },
        getItemLocalStorage(item) {
            if(localStorage.getItem(item) != '') {
                return JSON.parse(localStorage.getItem(item))
            }
            return []
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
        font-size: 15px;
        color: #333;
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
        color: #ADADAD;
        font-weight: 400px;
        font-size: 14px;
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