import apiUpdates from '../../api/updates'

const { update, readUpdateDate, lastUpdateDate } = apiUpdates()

// Initial State
const state = {
	// list: []
	list: [{ id: 'BDPM', label: 'updates.bdpm', action: 'updateBDPM()', lastUpdateDate: new Date() },
				 { id: 'BdMIT', label: 'updates.bdmit', action: 'updateBdMIT()', lastUpdateDate: new Date() }]
}

// Getters
const getters = { }

// Actions
const actions = {
	async getLastUpdateDates ({ commit }) {
		for ( let file of state.list ) {
			// debugger
			let updateDate = await readUpdateDate(file.id)
			file.lastUpdateDate = updateDate
			// file.lastUpdateDate = lastUpdateDate
		}
		console.log(state.list)
		// 	getProducts().then(results => commit('setProducts', results) )
		
	}
}

// Mutations
const mutations = {
	// setProducts (state, products) {
	// 	// debugger
	// 	state.list = products
	// }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}