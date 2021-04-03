<template>
    <div class="flex flex-col w-full ">
        <div class="todo-item">
            <p class="todo-item-desc">{{ todo }}</p>
            <div class="h-full flex">
                <ButtonTodo :handleFunction="openFormSubTodo" :type="'simple'">
                    <IconSubItem :fill="'#999'"/>
                </ButtonTodo>
                <ButtonTodo :handleFunction="removeTodo" :type="'simple'">
                    <IconDelete  :fill="'#999'"/>
                </ButtonTodo>
            </div>
        </div>
        <div class="w-full pl-5">
            <FormTodo class="mt-2" v-on:addTodo="addSubTodo" v-show="newSubItem" :parent="todo" :placeholder="'Agrega una subtarea'"/>
        </div>
    </div>
</template>

<script>
import FormTodo from '@/components/FormTodo.vue'
import ButtonTodo from "@/components/ButtonTodo.vue"
import IconSubItem from "@/components/IconSubItem.vue"
import IconDelete from "@/components/IconDelete.vue"

export default {
    name: 'ItemTodo',
    props: {
        todo: String
    },
    data() {
        return  {
            newSubItem: false,
            subitems: []
        }
    },
    components: {
        FormTodo, ButtonTodo, IconSubItem, IconDelete
    },
    methods: {
        openFormSubTodo() {
            this.newSubItem = !this.newSubItem
        },
        removeTodo() {
            this.$emit('removeTodo')
        }, 
        addSubTodo() {
            this.$emit('addTodo')
        }
    }
}
</script>
<style scoped>
    .todo-item {
        display: flex;
        border: 1px solid #f4f4f4;
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
        text-align: left;
        padding-left: 15px;
    }
</style>