<template>
    <div class="flex flex-col w-full ">
        <div class="todo-item">
            <p class="todo-item-desc">{{ todo }}</p>
            <button v-on:click="removeTodo()" class="todo-item-delete">X</button>
        </div>
        <div class="w-full pl-5">
            <FormTodo class="mt-2 "/>
            
        </div>
    </div>
</template>

<script>
import FormTodo from '@/components/FormTodo.vue'
export default {
    name: 'ItemTodo',
    props: {
        todo: String
    },
    components: {
        FormTodo
    },
    methods: {
        removeTodo() {
            this.$emit('removeTodo')
        }
    }
}
</script>
<style scoped>
    .todo-item {
        display: flex;
        background: #f4f4f4;
        margin-top: 15px;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 3px;
        overflow: hidden;
    }
    .todo-item-desc {
        text-overflow: ellipsis;
        font-size: 15px;
        overflow: hidden;
        white-space: nowrap;
        width: 80%;
        text-align: left;
        padding-left: 15px;
    }
    .todo-item-delete {
        background: tomato;
        border: none;
        color: #fff;
        font-weight: bold;
        font-size: 10px;
        width: 40px;
        height: 100%;
        cursor: pointer;
    }
</style>