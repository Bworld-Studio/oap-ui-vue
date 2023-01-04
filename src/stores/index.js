import { createStore, createLogger } from 'vuex'

const debug = true

let modules = {}

// Import all of the components files
const loadModules = function () {
	let modules = []
	let files = import.meta.globEager('./modules/**.js')

	for ( const file in files ) {

		let matched = file.split('/')
		let name = matched[2].split('.')[0]

		modules[name] = files[file].default
		modules[name].namespaced = true // override namespaced option

	}
	return modules
}

modules = loadModules()

// Create a new store instance
const store = createStore({
	modules,
	strict: debug,
	plugins: debug ? [createLogger()] : []
})

export default store