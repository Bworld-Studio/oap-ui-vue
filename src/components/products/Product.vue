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

			<!-- <span class="row">
				<label for="numSSInput">{{ t('client.numss-input') }}</label>
				<div class="col">
					<input type="text" v-model="client.numSS" :placeholder="t('client.numss-input')" id="numSSInput" class="form-control form-control-sm input_ss" size="13" />
				</div>
				<div class="col">
					<input type="number" v-model="client.cleSS" :placeholder="t('client.keyss-input')" id="cleSSInput" class="form-control form-control-sm input_key" min="0" max="99" size="2" />
				</div>
			</span> -->
			<!-- <span class="row">
				<label for="lastNameInput">{{ t('client.name-input') }}</label>
				<input type="text" v-model="client.lastName" :placeholder=" t('client.name-input')" :id="lastNameInput" class="form-control form-control-sm" />
			</span>
			<span class="row">
				<label for="firstNameInput">{{ t('client.firstname-input') }}</label>
				<input type="text" v-model="client.firstName" :placeholder=" t('client.firstname-input')" :id="firstNameInput" class="form-control form-control-sm"/>
			</span>
			<span class="row">
				<label for="birthDateInput">{{ t('client.birthdate-input') }}</label>
				<input type="date" v-model="client.birthDate" :placeholder=" t('client.birthdate-input')" :id="birthDateInput" class="form-control form-control-sm"/>
			</span>
			<span class="row">
				<label for="birthDateInput">{{ t('client.address-input') }}</label>
				<input type="text" v-model="client.address" :placeholder=" t('client.address-input')" :id="addressInput" class="form-control form-control-sm"/>
			</span>
			<span class="row">
				<label for="birthDateInput">{{ t('client.address2-input') }}</label>
				<input type="text" v-model="client.address2" :placeholder=" t('client.address2-input')" :id="address2Input" class="form-control form-control-sm"/>
			</span>
			<span class="row">
				<label for="birthDateInput">{{ t('client.zipcode-input') }}</label>
				<input type="text" v-model="client.zipcode" :placeholder=" t('client.zipcode-input')" :id="zipcodeInput" class="form-control form-control-sm"/>
			</span>
			<span class="row">
				<label for="birthDateInput">{{ t('client.city-input') }}</label>
				<input type="text" v-model="client.city" :placeholder=" t('client.city-input')" :id="cityInput" class="form-control form-control-sm"/>
			</span>
			<span class="row">
				<label for="birthDateInput">{{ t('client.cellphone-input') }}</label>
				<input type="tel" v-model="client.cellphone" :placeholder=" t('client.cellphone-input')" :id="cellphoneInput" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" class="form-control form-control-sm" />
			</span>
			<span class="row">
				<label for="birthDateInput">{{ t('client.center-input') }}</label>
				<input type="text" v-model="client.center" :placeholder=" t('client.center-input')" :id="centerInput" class="form-control form-control-sm"/>
			</span>
			<span class="row">
				<label for="birthDateInput">{{ t('client.viewAt-input') }}</label>
				<input readonly type="text" v-model="client.viewAt" :placeholder=" t('client.viewAt-input')" :id="viewAtInput" class="form-control form-control-sm form-control-plaintext"/>
			</span>
			<span>
				<button v-if="client.isEdit == false" type="submit" class="btn btn-success btn-sm" >{{ t('buttons.save-btn') }}</button>
				<button v-else v-on:click="updateClient()" type="button" class="btn btn-primary btn-sm mt-3" >{{ t('buttons.update-btn') }}</button>
			</span> -->
		<!-- </form> -->
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
		// const { clientObj } = objects()

		onMounted( () => {
			
			if ( props.cis !== undefined && props.cis !== '' ) {
				// client.value.uuid = props.uuid
				get(props.cis)
			}
		})

		const getNotice = (_cis) => {
			// getNotice()
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