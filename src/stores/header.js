import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
	state: () => ({ title: '' }),
	getters: {
		// doubleCount: (state) => state.count * 2,
	},
	actions: {
		setTitle(_title) {
			this.title = _title
		},
		clearHeader () {
			this.$reset()
		}
	},
})