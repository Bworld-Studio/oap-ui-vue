import { ref } from 'vue'

export default function commonObjects() {

	// Object client
	const client = {
		uuid: undefined,
		id: {
			numSS: '',
			cleSS: '',
			lastName: '',
			firstName: '',
			birthDate: '',
			address: '',
			address2: '',
			city: '',
			zipcode: '',
			cellphone: '',
			phone: '',
			center: '',
			viewAt: '',
			active: false,
			isEdit: false
		},
		address: {
			
		},
		care: {

		},
		pathologies: {

		}
	}

	return { client }
}