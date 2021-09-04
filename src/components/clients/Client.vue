<template>
<div id="client">
	<Header v-bind="headerParams" :key="componentKey"/>
	<div class="toolbar">
		<button class="btn btn-secondary" v-on:click="$router.back()">
			<i class="bi bi-caret-left"></i>
			<span>{{t('buttons.back-button')}}</span>
		</button>
		<button class="btn btn-primary" v-on:click="add()">
			<i class="bi bi-save"></i>
			<span>{{t('buttons.save-button')}}</span>
		</button>
		<!-- <button class="btn btn-primary" v-on:click="updateClient()">
			<i class="bi bi-save"></i>
			<span>{{t('buttons.update-button')}}</span>
		</button> -->
	</div>
	<form v-on:submit.prevent="add">
		<div class="container__main container-fluid">
			<div class="card__container">
				<div class="card" style="width: 45%">
				<div class="card__title"><h3>{{ t('client.ident-title') }}</h3></div>
					<div class="card__wrapper">
						<div class="card__line">
							<span class="form-floating">
								<input type="text" v-model="clientRef.id.lastName" :id="lastNameInput" class="form-control form-control-sm" /> <!-- :placeholder=" t('client.name-input')" -->
								<label for="lastNameInput">{{ t('client.name-input') }}</label>
							</span>
							<span class="form-floating">
								<input type="text" v-model="clientRef.id.maidenName" :id="maidenNameInput" class="form-control form-control-sm" /> <!-- :placeholder=" t('client.maidenName-input')" -->
								<label for="lastNameInput">{{ t('client.maidenName-input') }}</label>
							</span>
							<span class="form-floating">
								<input type="text" v-model="clientRef.id.firstName" :placeholder=" t('client.firstname-input')" :id="firstNameInput" class="form-control form-control-sm"/>
								<label for="firstNameInput">{{ t('client.firstname-input') }}</label>
							</span>
						</div>
						<!-- <div class="card__line">
							<span>
								<label for="birthDateInput">{{ t('client.birthdate-input') }}</label>
								<input type="date" v-model="clientRef.id.birthDate" :placeholder=" t('client.birthdate-input')" :id="birthDateInput" class="form-control form-control-sm"/>
							</span>
						</div> -->
						<div class="card__line">
							<span class="form-floating">
								<select class="form-select form-select-sm" v-model="clientRef.id.sex" :id="sexInput">
									<!-- <option selected disabled>{{ t('client.sex-input-options. ') }}</option> -->
									<option value="1">{{ t('client.sex-input-options.1') }}</option>
									<option value="2">{{ t('client.sex-input-options.2') }}</option>
									<option value="3">{{ t('client.sex-input-options.3') }}</option>
								</select>
								<label for="sex">{{ t('client.sex-input') }}</label>
							</span>
							<span class="form-floating">
								<input type="date" v-model="clientRef.id.birthDate" :placeholder=" t('client.birthdate-input')" :id="birthDateInput" class="form-control form-control-sm"/>
								<label for="birthDateInput">{{ t('client.birthdate-input') }}</label>	
							</span>
							<!-- <span class="form-floating"> -->
								<!-- <input type="number" v-model="clientRef.id.birthRank" :placeholder="t('client.keyss-input')" id="cleSSInput" class="form-control form-control-sm input_key" min="1" max="99" size="2" /> -->
								<!-- <select class="form-select form-select-sm" v-model="clientRef.id.birthRank">
									<option v-bind:key="rank" v-for="rank in [1,2,3,4,5,6,7,8,9]">{{ rank }}</option>
								</select> -->
								<!-- <label for="birthorder">{{ t('client.birthorder-input') }}</label> -->
							<!-- </span> -->
							<!-- <span class="form-floating">
								<select class="form-select form-select-sm" v-model="clientRef.id.category" :id="categoryInput">
									<option value="1">{{ t('client.category-input-options.1') }}</option>
									<option value="2">{{ t('client.category-input-options.2') }}</option>	
									<option value="3">{{ t('client.category-input-options.3') }}</option>
								</select>
								<label for="category">{{ t('client.category-input') }}</label>
							</span> -->
						</div>
						<div class="card__line">
							<span class="form-floating">
								<select class="form-select form-select-sm" v-model="clientRef.id.birthRank">
									<option v-bind:key="rank" v-for="rank in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]">{{ rank }}</option>
								</select>
								<label for="birthorder">{{ t('client.birthorder-input') }}</label>
							</span>
							<span class="form-floating">
								<select class="form-select form-select-sm" v-model="clientRef.id.category" :id="categoryInput">
									<option value="1">{{ t('client.category-input-options.1') }}</option>
									<option value="2">{{ t('client.category-input-options.2') }}</option>
									<option value="3">{{ t('client.category-input-options.3') }}</option>
								</select>
								<label for="category">{{ t('client.category-input') }}</label>
							</span>
						</div>
						<div class="card__line">
							<span class="form-floating">
								<input readonly type="text" v-model="clientRef.id.viewAt" :placeholder=" t('client.viewAt-input')" :id="viewAtInput" class="form-control form-control-sm form-control-plaintext"/>
								<label for="birthDateInput">{{ t('client.viewAt-input') }}</label>
							</span>
						</div>
					</div>
				</div>
				<div class="card" style="width: 45%;">
				<div class="card__title"><h3>{{ t('client.address-title') }}</h3></div>
					<div class="card__wrapper">
						<div class="card__line">
							<span >
								<label for="addressInput">{{ t('client.streetnum-input') }}</label>
								<input type="text" v-model="clientRef.addr.streetNumber" :id="addressInput" class="form-control form-control-sm"/>
							</span>
							<span>
								<label for="addressInput">{{ t('client.address-input') }}</label>
								<input type="text" v-model="clientRef.addr.address" :id="addressInput" class="form-control form-control-sm"/>
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="address2Input">{{ t('client.address2-input') }}</label>
								<input type="text" v-model="clientRef.addr.address2" :id="address2Input" class="form-control form-control-sm"/>
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="zipcodeInput">{{ t('client.zipcode-input') }}</label>
								<input type="text" v-model="clientRef.addr.zipcode" :id="zipcodeInput" class="form-control form-control-sm"/>
							</span>
							<span>
								<label for="cityInput">{{ t('client.city-input') }}</label>
								<input type="text" v-model="clientRef.addr.city" class="form-control form-control-sm"/>
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="birthDateInput">{{ t('client.phone-input') }}</label>
								<input type="tel" v-model="clientRef.addr.cellphone" :id="cellphoneInput" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" class="form-control form-control-sm" />
							</span>
						</div>
						<div class="card_line">
							<!-- <div class="form-input">
								<label>
									<input required>
									<span class="placeholder">Text Input</span>
								</label>
							</div> -->
						</div>
					</div>
				</div>
				<div class="card" style="width: 45%;">
					<div class="card__title"><h3>{{ t('client.care-title') }}</h3></div>
					<div class="card__wrapper">
						<div class="card__line">
							<label for="numSSInput">{{ t('client.numss-input') }}</label>
							<span>
								<input type="number" v-model="clientRef.care.nir" :placeholder="t('client.numss-input')" id="numSSInput" class="form-control form-control-sm input_ss" size="13" />
							</span>
							<span>
								<button class="btn btn-primary btn-sm" v-on:click="checkNIR()">
									<span>{{t('client.nirKey-button')}}</span>
									<i class="bi bi-check"></i>
								</button>
							</span>
							<span>
								<input type="number" v-model="clientRef.care.nirKey" :placeholder="t('client.keyss-input')" id="cleSSInput" class="form-control form-control-sm input_key" min="0" max="99" size="2" disabled readonly/>
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="birthDateInput">{{ t('client.center-input') }}</label>
								<input type="text" v-model="clientRef.care.RO" :placeholder=" t('client.center-input')" :id="centerInput" class="form-control form-control-sm"/>
							</span>
							<!-- <span> -->
								<!-- <button v-if="client.isEdit == false" type="submit" class="btn btn-success btn-sm" >{{ t('buttons.save-button') }}</button> -->
								<!-- <button v-else v-on:click="updateClient()" type="button" class="btn btn-primary btn-sm mt-3" >{{ t('buttons.update-button') }}</button> -->
							<!-- </span> -->
						</div>
					</div>
				</div>
				<div class="card" style="width: 45%;">
					<div class="card__title"><h3>{{ t('client.patho-title') }}</h3></div>
					<div class="card__wrapper">
						<div class="card__line">
							<span>
								<label for="weightInput">{{ t('client.weight-input') }}</label>
								<input type="text" v-model="clientRef.physio.weight" :placeholder=" t('client.weight-input')" :id="weightInput" class="form-control form-control-sm" />
							</span>
							<span>
								<label for="sizeInput">{{ t('client.size-input') }}</label>
								<input type="text" v-model="clientRef.physio.size" :placeholder=" t('client.size-input')" :id="sizeInput" class="form-control form-control-sm"/>
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="measurementInput">{{ t('client.measurement-input') }}</label>
								<input type="text" v-model="clientRef.physio.measurement" :placeholder=" t('client.measurement-input')" :id="measurementInput" class="form-control form-control-sm" />
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="allergyInput">{{ t('client.allergy-input') }}</label>
								<input type="text" v-model="clientRef.physio.allergy" :placeholder=" t('client.allergy-input')" :id="allergytInput" class="form-control form-control-sm" />
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="commentInput">{{ t('client.comment-input') }}</label>
								<input type="table" v-model="clientRef.physio.comment" :placeholder=" t('client.comment-input')" :id="commentInput" class="form-control form-control-sm" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>
</template>

<style>
	.container__main { color: black; background-color: #f4f4f4; } */
	/* #client .container__main {  } */
	.card__container { display: flex; flex-direction: row; justify-items: left; flex-wrap: wrap; }
	.card__wrapper { margin: 1rem 1rem; }
	.card > h3 { margin-bottom: 0.5rem; }
	.card__line { display: flex; flex-direction: row; justify-content: space-between ; margin: 0.5rem 0.5rem; }
	.card__line > span { flex-grow: 1; margin-right: 1rem; }
	.input_ss { width: 9em; }
	.input_key { width: 3em; }
	.input_key input[type=number], input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
		-moz-appearance: textfield;
		-webkit-appearance: none;
		margin: 0;
		}
	.card__title {color: white; background-color: #3ab595ff; padding: 0.5rem 1rem;}
</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter, useRoute } from 'vue-router'
import Axios from 'axios'

// Views
import Header from '../header/Header.vue'

// API
import useClient from '../../common/api.client.js'

// Common
import commonObjects from './../../common/objects.js'

export default {
	components: { Header },
	props: { uuid: String, mode: String },
	setup(props, context) {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels
		let mode = { value: 'D', label: t('buttons.display-button') }

		const { client, getClient, addClient } = useClient()
		const { clientObj } = commonObjects()
		
		// Header
		let	headerParams = { view: 'client', title: t('client.title'), actions: [] } // Header

		const clientRef = ref(clientObj)

		onMounted( () => {
			if ( props.uuid !== undefined && props.uuid !== '' ) {
				clientRef.value.uuid = props.uuid
				get(props.uuid)
			}
			mode = props.mode
		})

		const get = (_uuid) => {
			getClient(_uuid)
			clientRef.value.id = client.value
		}

		const add = () => {
			clientRef._rawValue.active = true
			addClient(clientRef)
		}
		const update = () => {
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
			// debugger
			let modulo = nir % 97
			let key = 97 - modulo
			if (key < 10) key = "0"+ key

			clientRef.value.care.nirKey = key
		}

		// const display = () => {
		// 	// debugger
		// 	mode.value = ( mode.value == 'E' ) ? mode.value = 'D' : mode.value = 'E'
		// 	mode.label = ( mode.value == 'E' ) ? mode.label = t('buttons.edit-button') : mode.label = t('buttons.display-button')

		// 	actionsList = [{ label: t('buttons.save-button') }, { label: mode.label }]
		// 	headerParams = { view: 'client', title: t('client.title'), actions: actionsList } // Header
		// 	debugger
		// 	componentKey.value += 1
		// }

		// Header
		// provide('action0', updateClient)
		// provide('action1', display)

		return { clientRef, add, update, deactivate, checkNIR, headerParams, t, d }
	}
}
</script>