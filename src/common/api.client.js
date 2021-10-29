import Axios from 'axios'
import { ref } from 'vue'
import commonFunctions from '../common/functions'
import commonObjects from '../common/objects'

export default function apiClient() {
	const api = '/api/clients/' // API URL
		// Déclarations
	const client = ref({})
	console.clear()

	const getClient = async (uuid) => {

		let url = api + uuid
		let result = {}

			try {
				let response = await Axios.get(url, { params: { uuid: uuid } })
				result.uuid = response.data.uuid
				result.id = response.data
				result.addr = response.data.clients_addrs[0]
				result.care = response.data.clients_care
				result.physio = response.data.clients_physios[0]
				result.scans = response.data.clients_scans
				result.benef = response.data.clients_benef
			} catch (error) {
				console.error(error)
			}
			return result
	}

	const addClient = function(_client) {
		_client._rawValue.active = true
		// debugger
		console.log(_client)

		Axios.post(api, _client._rawValue )
			.then(res => {
				// debugger
				// client = ref({})
				getClient(_client.value.uuid)
			})
			.catch(err => {
				console.log(err)
				// debugger
			})
	}
	// const updateClient = () => {
	// 	// debugger
	// 	Axios.put(`/api/clients/${client.value.uuid}`, client.value)
	// 		.then(res => {
	// 			client.value = {}
	// 			client.value.isEdit = false
	// 			this.getClient(client.value.uuid)
	// 			console.log(res)
	// 		}).catch(err => {
	// 			console.log(err)
	// 			$('#alertError').alert()	// eslint-disable-line no-undef
	// 		})
	// }
	// const deleteClient = (_uuid) => {
	// 	Axios.delete(`/api/clients/${_uuid}`)
	// 		.then(res => {
	// 			client.value = {}
	// 			console.log(res)
	// 		}).catch(err => { console.log(err) })
	// }

	const searchClients = function(term) {
		// debugger
		Axios.get(api, { params: { search: term } })
			.then(res => {
				if ( res.status == 200 ) clients.value = res.data // Result.data avec contrôle sur le résultat de l'appel
			})
			.catch(err =>{
				console.log(error)
			})
	}
	
	return { client, addClient, getClient, searchClients }
}