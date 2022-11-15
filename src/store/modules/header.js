
// Initial State
const state = {
	title: ''
	// client : {}
}

// Getters
const getters = { }

// Actions
const actions = {
	// getAllClients ({ commit }) {
	// 	shop.getProducts(products => {
	// 		commit('setProducts', products)
	// 	})
	// }
}

// Mutations
const mutations = {
	setTitle (state, title) {
		state.title = title
	},
}


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}