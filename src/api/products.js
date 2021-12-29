import Axios from 'axios'
import { ref } from 'vue'

export default function useProducts() {
	const api = '/api/products' // api url
	
	// Déclaration
	// let products = ref([])

	const getProducts = async () => {
		// try {
			// debugger
			let result = await Axios.get(api)
			return result.data
		// } catch (error) {
			// console.log(error)
		// }
	}

	const searchProducts = async (term) => {
		let result = await Axios.get(api, { params: { search: term } })
		
		// Axios.get(api, { params: { search: term } })
		// 	.then(result => {
		// 		if ( result.status == 200 ) products.value = result.data
		// 	})
		// 	.catch(error =>{
		// 		console.log(error)
		// 	})

			return result.data
	}

	const getProduct = function (cis) {
		let url = api + '/' + cis
		Axios.get(url)
			.then(result => {

			})
			.catch(error =>{
				console.log(error)
			})
	}
	return { getProducts, searchProducts, getProduct }
}