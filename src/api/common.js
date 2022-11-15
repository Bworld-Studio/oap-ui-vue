import Axios from 'axios'
import { ref } from 'vue'

export default function useCommon() {
	let status = ref(false)

	const updateStatus = async () => {
		try {
			const result = await Axios.get('/api/status/')
			if (result.status === 200) status.value = true
		}
		catch (error) {
			console.log(error)
		}
	}

	return { updateStatus, status }
}