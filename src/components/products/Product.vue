<template>
<div id="produit">
	<Header v-bind="headerParams"/>
	<div class="toolbar d-flex justify-content-between">
		<span>
			<button class="btn btn-secondary" v-on:click="$router.back()">
				<i class="bi bi-caret-left"></i>
				<span class="btn-label">{{t('buttons.back-btn')}}</span>
			</button>
		</span>
		<span>
			<button class="btn btn-primary" v-on:click="getNotice()">
				<i class="bi bi-journal-text"></i>
				<span class="btn-label">{{t('product.action1')}}</span>
			</button>
		</span>
		<!-- <button v-show="!display" v-if="clientRef.uuid == undefined" class="btn btn-success" v-on:click="add()">
			<i class="bi bi-save"></i>
			<span class="btn-label">{{t('buttons.save-btn')}}</span>
		</button>
		<button v-show="!display" v-else class="btn btn-primary" v-on:click="updateClient()">
			<i class="bi bi-save"></i>
			<span>{{t('buttons.update-btn')}}</span>
		</button> -->
	</div>
	<main class="view__container container-fluid">
		<!-- <form v-on:submit.prevent="addClient"> -->
		<div >
			<span class="cis__code">{{cis}}</span>
			<span class="cis__code">{{labelMed}}</span>
		</div>

	</main>
</div>
</template>

<style>
	.input_ss { width: 9em; }
	.input_key { width: 3em; }
	.input_key input[type=number], input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
		-moz-appearance: textfield;
		-webkit-appearance: none;
		margin: 0;
	}
</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'
import { useI18n } from 'vue-i18n' // I18n

// Views
import Header from '../header/Header.vue'

// API
import apiProduct from '../../api/product.js'

// Objects
import objects from './../../common/objects.js'

export default {
	components: { Header },
	props: { cis: String, labelMed: String, mode: String },
	setup(props, context) {
		const { t } = useI18n({ useScope: 'global' }) // Labels
		const product = ref({})

		const cis = ref(props.cis)
		const labelMed = ref(props.labelMed)
		const mode = props.mode

		const { products, getProducts, searchProducts, getProduct } = apiProduct()

		onMounted( () => {
			
			if ( props.cis !== undefined && props.cis !== '' ) {
				get(props.cis)
			}
		})

		const getNotice = (_cis) => {

		}

		const get = (_cis) => {

		}

		// const getClient = (_uuid) => {
		// 	let url = api + _uuid
		// 	console.log(url)
		// 	Axios.get(url)		// Call API GET
		// 		.then(result => {
		// 			debugger
		// 			mapClient(result.data)
		// 		}, error => { console.error(error) })
		// }

		// const mapClient = (_client) => {
		// 	client.value = _client
		// 	// client.value['viewAt'] = new Date()
		// }
		// const addClient = () => {
		// 	client.value.active = true
		// 	// client.value['viewAt'] = new Date()

		// 	Axios.post('api/clients', client.value)
		// 		.then(res => {
		// 			client.value = {}
		// 			client.value.isEdit = false
		// 			this.getClient(client.value.uuid)
		// 		}).catch(err => {
		// 			console.log(err)
		// 			$('#alertError').alert()	// eslint-disable-line no-undef
		// 		})
		// }
		// const updateClient = () => {
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

		const search = () => {

		}

		const headerParams = { view: 'product', title: labelMed } // Header
		provide('search', search)

		return {
			getNotice,
			cis, labelMed,
			search, headerParams, t
		}
	}
}
</script>