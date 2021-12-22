<template>
<div id="client">
	<Header v-bind="headerParams" :key="componentKey"/>
	<div class="toolbar">
		<button class="btn btn-secondary" v-on:click="$router.back()">
			<i class="bi bi-caret-left"></i>
			<span class="btn-label">{{t('buttons.back-button')}}</span>
		</button>
		<button v-show="!display" v-if="clientRef.uuid == undefined" class="btn btn-success" v-on:click="add()">
			<i class="bi bi-save"></i>
			<span class="btn-label">{{t('buttons.save-button')}}</span>
		</button>
		<button v-show="!display" v-else class="btn btn-primary" v-on:click="updateClient()">
			<i class="bi bi-save"></i>
			<span>{{t('buttons.update-button')}}</span>
		</button>
	</div>
	<main class="view__container">
		<form v-on:submit.prevent="add">
			<div class="container__main container-fluid">
				<div class="card__container">
					<div class="card" style="width: 45%">
					<div class="card__title"><h3>{{ t('client.ident-title') }}</h3></div>
						<div class="card__wrapper">
							<div class="card__line">
								<span class="form-floating">
									<input type="text" v-model="clientRef.id.lastName" :id="lastNameInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="lastNameInput">{{ t('client.name-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="text" v-model="clientRef.id.maidenName" :id="maidenNameInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="maidenNameInput">{{ t('client.maidenName-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="text" v-model="clientRef.id.firstName" :id="firstNameInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="firstNameInput">{{ t('client.firstname-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<select class="form-select form-select-sm" v-model="clientRef.id.sex" :id="sexInput" :disabled="display">
										<option value="1">{{ t('client.sex-input-options.1') }}</option>
										<option value="2">{{ t('client.sex-input-options.2') }}</option>
										<option value="3">{{ t('client.sex-input-options.3') }}</option>
									</select>
									<label for="sexInput">{{ t('client.sex-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="date" v-model="clientRef.id.birthDate" :id="birthDateInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="birthDateInput">{{ t('client.birthdate-input') }}</label>	
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<select class="form-select form-select-sm" v-model="clientRef.id.birthRank" :disabled="display">
										<option v-bind:key="rank" v-for="rank in [1,2,3,4,5,6,7,8,9,10]">{{ rank }}</option>
									</select>
									<label for="birthorder">{{ t('client.birthorder-input') }}</label>
								</span>
								<span class="form-floating">
									<select class="form-select form-select-sm" v-model="clientRef.id.category" :id="categoryInput" :disabled="display">
										<option value="1">{{ t('client.category-input-options.1') }}</option>
										<option value="2">{{ t('client.category-input-options.2') }}</option>
										<option value="3">{{ t('client.category-input-options.3') }}</option>
									</select>
									<label for="category">{{ t('client.category-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input type="number" v-model="clientRef.care.nir" id="nirInput" class="form-control form-control-sm input_ss" size="13" :disabled="display"/>
									<label for="nirInput">{{ t('client.numss-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="number" v-model="clientRef.care.nirKey" id="nirKey" class="form-control form-control-sm input_key" min="0" max="99" size="2" disabled readonly />
									<label for="nirKey">{{ t('client.keyss-input') }}</label>
								</span>
								<span>
									<button class="btn btn-primary btn-sm" v-on:click="checkNIR()">
										<span>{{t('client.nirKey-button')}}</span>
										<i class="bi bi-check"></i>
									</button>
								</span>
							</div>
						</div>
					</div>
					<div class="card" style="width: 45%;">
					<div class="card__title"><h3>{{ t('client.address-title') }}</h3></div>
						<div class="card__wrapper">
							<div class="card__line">
								<span class="form-floating">
									<input type="text" v-model="clientRef.addr.streetNumber" :id="strNumInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="strNumInput">{{ t('client.streetnum-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="text" v-model="clientRef.addr.address" :id="addressInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="addressInput">{{ t('client.address-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="text" v-model="clientRef.addr.address2" :id="address2Input" class="form-control form-control-sm" :disabled="display"/>
									<label for="address2Input">{{ t('client.address2-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input type="text" v-model="clientRef.addr.zipcode" :id="zipcodeInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="zipcodeInput">{{ t('client.zipcode-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="text" v-model="clientRef.addr.city" :id="cityInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="cityInput">{{ t('client.city-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input type="tel" v-model="clientRef.addr.cellphone" :id="cellphoneInput" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" class="form-control form-control-sm" :disabled="display"/>
									<label for="cellphoneInput">{{ t('client.phone-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input type="mail" v-model="clientRef.addr.mail" :id="mailInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="mailInput">{{ t('client.mail-input') }}</label>
								</span>
							</div>	
						</div>
					</div>
					<div class="card" style="width: 45%;">
						<div class="card__title"><h3>{{ t('client.care-title') }}</h3></div>
						<div class="card__wrapper">
							<div class="card__line">
								<span class="form-floating">
									<input type="number" v-model="clientRef.care.ROCODE" :id="roCodeInput" class="form-control form-control-sm" size="9" :disabled="display"/>
									<label for="roCodeInput">{{ t('client.roCode-input') }}</label>
								</span>	
								<span class="form-floating">
									<input type="text" v-model="clientRef.care.ROName" :id="roNameInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="roNameInput">{{ t('client.roName-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input type="text" v-model="clientRef.care.EXO" :id="exoInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="exoInput">{{ t('client.exo-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="date" v-model="clientRef.care.EXOBEGIN" :id="exoBeginInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="exoBeginInput">{{ t('client.exoBegin-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="date" v-model="clientRef.care.EXOEnd" :id="exoEndInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="exoEndInput">{{ t('client.exoEnd-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input type="number" v-model="clientRef.care.RCCODE" :id="rcCodeInput" class="form-control form-control-sm" size="8" :disabled="display"/>
									<label for="rcCodeInput">{{ t('client.rcCode-input') }}</label>
								</span>	
								<span class="form-floating">
									<input type="text" v-model="clientRef.care.RCNAME" :id="rcNameInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="rcNameInput">{{ t('client.rcName-input') }}</label>
								</span>
								</div>
								<div class="card__line">
								<span class="form-floating">
									<input type="date" v-model="clientRef.care.RCBEGIN" :id="rcBeginInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="rcBeginInput">{{ t('client.rcBegin-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="date" v-model="clientRef.care.RCEND" :id="rcEndInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="rcEndInput">{{ t('client.rcEnd-input') }}</label>
								</span>
								</div>
								<div class="card__line">
								<span class="form-floating">
									<select class="form-select form-select-sm" v-model="clientRef.id.support" :id="supportInput" :disabled="display">
										<option value="1">{{ t('client.support-input-options.1') }}</option>
										<option value="2">{{ t('client.support-input-options.2') }}</option>
										<option value="3">{{ t('client.support-input-options.3') }}</option>
										<option value="4">{{ t('client.support-input-options.4') }}</option>
										<option value="5">{{ t('client.support-input-options.5') }}</option>
										<option value="6">{{ t('client.support-input-options.6') }}</option>
									</select>
									<label for="support">{{ t('client.support-input') }}</label>
								</span>
								</div>
							</div>
					</div>
					<div class="card" style="width: 45%;">
						<div class="card__title"><h3>{{ t('client.patho-title') }}</h3></div>
						<div class="card__wrapper">
							<div class="card__line">
								<span class="form-floating">
									<input type="text" v-model="clientRef.physio.weight" :id="weightInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="weightInput">{{ t('client.weight-input') }}</label>
								</span>
								<span class="form-floating">
									<input type="text" v-model="clientRef.physio.size" :id="sizeInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="sizeInput">{{ t('client.size-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input type="text" v-model="clientRef.physio.measurement" :id="measurementInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="measurementInput">{{ t('client.measurement-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input type="text" v-model="clientRef.physio.allergy" :id="allergytInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="allergyInput">{{ t('client.allergy-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input type="table" v-model="clientRef.physio.comment" :id="commentInput" class="form-control form-control-sm" :disabled="display"/>
									<label for="commentInput">{{ t('client.comment-input') }}</label>
								</span>
							</div>
							<div class="card__line">
								<span class="form-floating">
									<input readonly type="text" v-model="clientRef.id.viewAt" :id="viewAtInput" class="form-control form-control-sm form-control-plaintext"/>
									<label for="birthDateInput">{{ t('client.viewAt-input') }}</label>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
			<div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="d-flex">
					<div class="toast-body">
						Hello, world! This is a toast message.
					</div>
					<button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
				</div>
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
import { ref, reactive, onMounted, computed, provide, inject } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter, useRoute } from 'vue-router'

// Views
import Header from '../header/Header.vue'

// API
import apiClient from '../../common/api.client.js'

// Objects
import objects from './../../common/objects.js'

export default {
	components: { Header },
	props: {
		uuid: String,
		name: String,
		mode: String
	},
	setup(props, context) {

		const { t, d } = useI18n({ useScope: 'global' }) // Labels
		const display = ref(true)
		const $notyf = inject('$notyf')
		const $modal = inject('$modal')

		const { client, getClient, addClient } = apiClient()
		const { clientObj } = objects()
	
		// Header
		let	headerParams = { view: 'client', title: props.name } // Header

		const clientRef = ref(clientObj)

		const get = (_uuid) => {
			getClient(_uuid).then( result => {
				clientRef.value = result
				$notyf.success('Test')
			})
		}

		onMounted( () => {
			if ( props.uuid !== undefined && props.uuid !== '' ) {
				clientRef.value.uuid = props.uuid
				get(props.uuid)
			}
			display.value = (props.p_mode == 'D') ? true : false
		})

		const add = () => {
			clientRef._rawValue.active = true
			addClient(clientRef)
		}
		const update = () => {
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
		}

		const deactivate = (_uuid) => {
			// Axios.delete(`/api/clients/${_uuid}`)
			// 	.then(res => {
			// 		client.value = {}
			// 		console.log(res)
			// 	}).catch(err => { console.log(err) })
		}

		const checkNIR = () => {
			let nir = clientRef.value.care.nir
			let modulo = nir % 97
			let key = 97 - modulo
			if (key < 10) key = "0"+ key

			clientRef.value.care.nirKey = key
		}

		return {
			clientRef,
			display,
			add,
			update,
			deactivate,
			checkNIR,
			headerParams,
			t,
			d
		}
	}
}
</script>