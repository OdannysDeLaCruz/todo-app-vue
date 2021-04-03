<template>
	<div class="message" v-show="showMessage">
		<p class="message-text">{{ message }}</p>
	</div>
</template>
<script>
	export default {
		name: 'Message',
		props: {
			message: String,
			showMessage: Boolean
		},
		data() {
			return {
				type: 'error',
				show: false
			}
		}
	}
</script>
<style>
	.message {
		width: 100%;
		padding: 0px;
		margin-top: 10px;
		border: 1px solid tomato;
		border-radius: 3px;
		background: pink;
	}
	.message-text {
		color: tomato;
		font-size: 15px;
		text-align: left;
		padding: 5px 15px;
		margin: 0px;
	}
</style>