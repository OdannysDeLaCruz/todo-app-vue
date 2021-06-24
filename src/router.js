import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
// import Home from '@/components/Home'
// import User from '@/pages/User'
// import UserProfile from '@/pages/UserProfile'
// import UserPosts from '@/pages/UserPosts'
// import About from '@/pages/About'
import Error404 from '@/pages/404'

// const Example = {
//   template: `<div>componente de ejemplo</div>`
// }


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [ 
		{
			path: '/',
			component: Todo
		},
		{
			path: '*',
			component: Error404
		}
	]
})