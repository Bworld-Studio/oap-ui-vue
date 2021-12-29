import apiClients from '../../api/clients'

const { clients, getClients, searchClients } = apiClients()

// Initial State
const state = {
	list: []
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
	// setClients (state, products) {
	// 	state.all = products
	// },
}


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}	