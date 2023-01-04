import apiProducts from '../../api/products'

const { getProducts } = apiProducts()		// Get products

// Initial State
const state = {
	list: []
}

// Getters
const getters = { }

// Actions
const actions = {
	getAllProducts ({ commit }) {
		// debugger
		getProducts().then(results => commit('setProducts', results) )
		
	}
}

// Mutations
const mutations = {
	setProducts (state, products) {
		// debugger
		state.list = products
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}