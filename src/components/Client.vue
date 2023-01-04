<template>
	<div id="client">
		<div class="toolbar">
			<button class="btn btn-secondary" @click="$router.back()">
				<i class="bi bi-caret-left" />
				<span class="btn-label">{{ t('buttons.back-btn') }}</span>
			</button>
			<button v-show="!display" v-if="clientRef.uuid == undefined" class="btn btn-success" @click="add()">
				<i class="bi bi-save" />
				<span class="btn-label">{{ t('buttons.save-btn') }}</span>
			</button>
			<button v-show="!display" v-else class="btn btn-primary" @click="updateClient()">
				<i class="bi bi-save" />
				<span>{{ t('buttons.update-btn') }}</span>
			</button>
		</div>
		<main class="view__container">
			<form @submit.prevent="add">
				<div class="container__main container-fluid">
					<div class="card__container">
						<div class="card" style="width: 45%">
							<div class="card__title">
								<h3>{{ t('client.ident-title') }}</h3>
							</div>
							<div class="card__wrapper">
								<div class="card__line">
									<span class="form-floating">
										<input id="lastNameInput" v-model="clientRef.id.lastName" type="text" class="form-control form-control-sm" disabled="display">
										<label for="lastNameInput">{{ t('client.name-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="maidenNameInput" v-model="clientRef.id.maidenName" class="form-control form-control-sm" :disabled="display" type="text">
										<label for="maidenNameInput">{{ t('client.maidenName-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="firstNameInput" v-model="clientRef.id.firstName" class="form-control form-control-sm" :disabled="display" type="text">
										<label for="firstNameInput">{{ t('client.firstname-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<select :id="sexInput" v-model="clientRef.id.sex" :disabled="display" class="form-select form-select-sm">
											<option value="1">{{ t('client.sex-input-options.1') }}</option>
											<option value="2">{{ t('client.sex-input-options.2') }}</option>
											<option value="3">{{ t('client.sex-input-options.3') }}</option>
										</select>
										<label for="sexInput">{{ t('client.sex-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="birthDateInput" v-model="clientRef.id.birthDate" type="date" class="form-control form-control-sm" :disabled="display">
										<label for="birthDateInput">{{ t('client.birthdate-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<select v-model="clientRef.id.birthRank" class="form-select form-select-sm" :disabled="display">
											<option v-for="rank in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="rank">{{ rank }}</option>
										</select>
										<label for="birthorder">{{ t('client.birthorder-input') }}</label>
									</span>
									<span class="form-floating">
										<select :id="categoryInput" v-model="clientRef.id.category" class="form-select form-select-sm" :disabled="display">
											<option value="1">{{ t('client.category-input-options.1') }}</option>
											<option value="2">{{ t('client.category-input-options.2') }}</option>
											<option value="3">{{ t('client.category-input-options.3') }}</option>
										</select>
										<label for="category">{{ t('client.category-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input id="nirInput" v-model="clientRef.care.nir" type="number" class="form-control form-control-sm input_ss" size="13" :disabled="display">
										<label for="nirInput">{{ t('client.numss-input') }}</label>
									</span>
									<span class="form-floating">
										<input id="nirKey" v-model="clientRef.care.nirKey" type="number" class="form-control form-control-sm input_key" min="0" max="99" size="2" disabled readonly>
										<label for="nirKey">{{ t('client.keyss-input') }}</label>
									</span>
									<span>
										<button class="btn btn-primary btn-sm" @click="checkNIR()">
											<span>{{ t('client.nirKey-btn') }}</span>
											<i class="bi bi-check" />
										</button>
									</span>
								</div>
							</div>
						</div>
						<div class="card" style="width: 45%;">
							<div class="card__title">
								<h3>{{ t('client.address-title') }}</h3>
							</div>
							<div class="card__wrapper">
								<div class="card__line">
									<span class="form-floating">
										<input :id="strNumInput" v-model="clientRef.addr.streetNumber" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="strNumInput">{{ t('client.streetnum-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="addressInput" v-model="clientRef.addr.address" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="addressInput">{{ t('client.address-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="address2Input" v-model="clientRef.addr.address2" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="address2Input">{{ t('client.address2-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="zipcodeInput" v-model="clientRef.addr.zipcode" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="zipcodeInput">{{ t('client.zipcode-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="cityInput" v-model="clientRef.addr.city" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="cityInput">{{ t('client.city-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="cellphoneInput" v-model="clientRef.addr.cellphone" type="tel" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" class="form-control form-control-sm" :disabled="display">
										<label for="cellphoneInput">{{ t('client.phone-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="mailInput" v-model="clientRef.addr.mail" type="mail" class="form-control form-control-sm" :disabled="display">
										<label for="mailInput">{{ t('client.mail-input') }}</label>
									</span>
								</div>
							</div>
						</div>
						<div class="card" style="width: 45%;">
							<div class="card__title">
								<h3>{{ t('client.care-title') }}</h3>
							</div>
							<div class="card__wrapper">
								<div class="card__line">
									<span class="form-floating">
										<input :id="roCodeInput" v-model="clientRef.care.ROCODE" type="number" class="form-control form-control-sm" size="9" :disabled="display">
										<label for="roCodeInput">{{ t('client.roCode-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="roNameInput" v-model="clientRef.care.ROName" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="roNameInput">{{ t('client.roName-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="exoInput" v-model="clientRef.care.EXO" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="exoInput">{{ t('client.exo-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="exoBeginInput" v-model="clientRef.care.EXOBEGIN" type="date" class="form-control form-control-sm" :disabled="display">
										<label for="exoBeginInput">{{ t('client.exoBegin-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="exoEndInput" v-model="clientRef.care.EXOEnd" type="date" class="form-control form-control-sm" :disabled="display">
										<label for="exoEndInput">{{ t('client.exoEnd-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="rcCodeInput" v-model="clientRef.care.RCCODE" type="number" class="form-control form-control-sm" size="8" :disabled="display">
										<label for="rcCodeInput">{{ t('client.rcCode-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="rcNameInput" v-model="clientRef.care.RCNAME" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="rcNameInput">{{ t('client.rcName-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="rcBeginInput" v-model="clientRef.care.RCBEGIN" type="date" class="form-control form-control-sm" :disabled="display">
										<label for="rcBeginInput">{{ t('client.rcBegin-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="rcEndInput" v-model="clientRef.care.RCEND" type="date" class="form-control form-control-sm" :disabled="display">
										<label for="rcEndInput">{{ t('client.rcEnd-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<select :id="supportInput" v-model="clientRef.id.support" class="form-select form-select-sm" :disabled="display">
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
							<div class="card__title">
								<h3>{{ t('client.patho-title') }}</h3>
							</div>
							<div class="card__wrapper">
								<div class="card__line">
									<span class="form-floating">
										<input :id="weightInput" v-model="clientRef.physio.weight" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="weightInput">{{ t('client.weight-input') }}</label>
									</span>
									<span class="form-floating">
										<input :id="sizeInput" v-model="clientRef.physio.size" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="sizeInput">{{ t('client.size-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="measurementInput" v-model="clientRef.physio.measurement" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="measurementInput">{{ t('client.measurement-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="allergytInput" v-model="clientRef.physio.allergy" type="text" class="form-control form-control-sm" :disabled="display">
										<label for="allergyInput">{{ t('client.allergy-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="commentInput" v-model="clientRef.physio.comment" type="table" class="form-control form-control-sm" :disabled="display">
										<label for="commentInput">{{ t('client.comment-input') }}</label>
									</span>
								</div>
								<div class="card__line">
									<span class="form-floating">
										<input :id="viewAtInput" v-model="clientRef.id.viewAt" readonly type="text" class="form-control form-control-sm form-control-plaintext">
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
					<button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide, inject } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter, useRoute } from 'vue-router'
// Views
// API
import apiClient from '../api/client.js'
// Objects
import objects from './../common/objects.js'

export default {
	components: {},
	props: {
		uuid: {
			type: String,
			required: true
		},
		name: {
			type: String,
			default: ''
		},
		mode: {
			type: String,
			default: ''
		}
	},
	setup(props, context) {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels
		const display = ref(true)
		const $notyf = inject('$notyf')
		const $modal = inject('$modal')
		const { client, getClient, addClient } = apiClient()
		const { clientObj } = objects()

		const clientRef = ref(clientObj)
		const get = (_uuid) => {
			getClient(_uuid).then(result => {
				clientRef.value = result
				$notyf.success('Test')
			})
		}
		onMounted(() => {
			if (props.uuid !== undefined && props.uuid !== '') {
				clientRef.value.uuid = props.uuid
				get(props.uuid)
			}
			display.value = (props.p_mode == 'D') ? true : false
		})
		const add = () => {
			clientRef.value.active = true
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
			if (key < 10) key = '0' + key
			clientRef.value.care.nirKey = key
		}
		return {
			clientRef,
			display,
			add,
			update,
			deactivate,
			checkNIR,
			t,
			d
		}
	}
}
</script>

<style>
.input_ss {
	width: 9em;
}

.input_key {
	width: 3em;
}

.input_key input[type=number],
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
	appearance: initial;
	-moz-appearance: textfield;
	-webkit-appearance: none;
	margin: 0;
}
</style>