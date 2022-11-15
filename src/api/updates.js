import Axios from 'axios'
import { ref } from 'vue'

export default function useUpdates() {

	// Déclaration
	const url = '/api/updates/'
	let lastUpdateDate = ref(new Date())

	const update = (file) => {
		let api = url + file
		Axios.get(api).then(
			result => { lastUpdateDate.value = result.data },
			error => { console.log(error) }
		)
	}

	const readUpdateDate = async (file) => {
		let api = url + file
		try {
			const result = await Axios.get(api)
			return result.data
		}
		catch (error) {
			console.log(error)
		}
		// Axios.get(api).then(
		// 	result => {
		// 		debugger
		// 		return result.data
		// 		// console.log(result.data)
		// 		// lastUpdateDate.value = result.data
		// 	},
		// 	error => { console.log(error) }
		// )

	}
	return { update, readUpdateDate }
}