import Axios from 'axios'
import { ref } from 'vue'

export default function useProduct() {
	const api = '/api/products/' // Déclaration

	let product = ref({}) // Changement en let au lieu de const => Expliquer

	const getProduct = (cip) => {
		let url = api + cip
		Axios.get(url)
			.then(result => {
				if ( result.status == 200 ) products.value = result.data // Result.data avec contrôle sur le résultat de l'appel
				// console.log(products.value.length)

			})
			.catch(error => {
				console.log(error)
			})
	}

	const getNotice = function (cis) {
		let url = 'https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=67210479&typedoc=N'
		Axios.get(url)
			.then(result => {
				console.log(result)
				debugger
			})
			.catch(error => {
				console.log(error)
			})

	}
	return { product, getProduct, getNotice }
}