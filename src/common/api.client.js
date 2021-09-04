import Axios from 'axios'
import { ref } from 'vue'
import commonFunctions from '../common/functions'
import commonObjects from '../common/objects'

export default function useClient() {
	const api = '/api/clients/' // API URL
		// Déclarations
	const client = ref({})

	const getClient = (uuid) => {

		let url = api + uuid

		Axios.get(url, { params: { uuid: uuid } })
			.then(res => {
				// debugger
				client.value.id = res.data
				console.log(res.data)
				// client.value.addr
				// client.value.addr
				// client.value.addr
			},
			error => {
				// debugger
				console.error(error)
			})
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