import { ref } from 'vue'

export default function commonObjects() {

	// Object client
	const clientObj = {
		uuid: undefined,
		id: {
			uuid: undefined,
			lastName: '',
			maidenName: '',
			firstName: '',
			birthDate: '',
			sex: '',
			birthRank: '',
			category: '',
			viewAt: '',
			active: true,
			isEdit: false
		},
		addr: {
			uuid: undefined,
			validity: '',
			streetNumber: '',
			address: '',
			address2: '',
			apptNumber: '',
			floor: '',
			city: '',
			zipcode: '',
			cellphone: '',
			phone: '',
			email: '',
		},
		care: {
			uuid: undefined,
			nir: '',
			nirKey: '',
			RO: '',
			exos: '',
			begExo: '',
			endExo: '',
			risk: '',
			insurance: '',
			garanties: '',
			contract: '',
			begRights: '',
			endRights: '',
		},
		physio: {
			uuid: undefined,
			weight: '',
			size: '',
			mesures: '',
			allergies: '',
			historical: '',
		},
		scans: {
			uuid: undefined,
			document: {},
		},
		benef: [{
			uuid: undefined,
			buuid: undefined,
		}]
	}

	return { clientObj }
}