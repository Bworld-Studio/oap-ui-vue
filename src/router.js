import { createWebHistory, createRouter } from 'vue-router'

let routes = []

// Import all of the components files
const loadRoutes = function () {
	let routes = []
	let files = import.meta.globEager('./**/**/**.vue')

	for ( const file in files ) {

		let matched = file.split('/')
		let name = matched[matched.length - 1].split('.')[0]

		let route = {
			path: '/'+name,
			name: name,
			component: {},
			props: true
		}

		// Specific routes
		if ( route.name === 'Home' ) route.path = '/'
		// if ( route.name === 'Client' ) route.path = '/Client/:uuid'
		if ( route.name === 'Product' ) route.path = '/Product/:cis'
		if ( route.name === 'Notfound' ) route.path = '/:pathMatch(.*)*'

		// Import Vue component
		const component = () => import(file /* @vite-ignore */)
		route.component = component /* @vite-ignore */

		routes.push(route)
	}
	return routes
}

routes = loadRoutes()

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router