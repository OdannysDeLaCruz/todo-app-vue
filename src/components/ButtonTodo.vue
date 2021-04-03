<template>
	<button v-on:click="handleFunction" class="button" :class="type"><slot></slot></button>
</template>
<script>
export default {
	name: 'ButtonTodo',
	props: {
		type: String,
		textButton: String,
		handleFunction: Function
	}
}
</script>
<style scoped>
    .button {
        border: none;
        font-weight: bold;
        margin: 5px;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .danger {
        background: tomato;
        color: #fff;
    }
    .simple {
        background: rgba(9, 30, 66, 0.04);
        color: #333;
        border-radius: 3px;
    }
    .simple:hover {
        background: rgba(9, 30, 66, 0.09);
    }
</style>