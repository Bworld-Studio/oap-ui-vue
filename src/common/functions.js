import Axios from 'axios'
import { ref } from 'vue'

export default function commonFunctions() {
	let pageTitle = ref('')

	const setPageTitle = (_title) => {
		// debugger
		console.log('functions: update title')
		pageTitle.value = _title
	}
	// const getPageTitle = () => {

	// }
	return { setPageTitle, pageTitle }
}