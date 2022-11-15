<template>
<div id="clients">
	<!-- <Header v-bind="headerParams" /> -->
	<div class="toolbar">
		<button id="button-action1" type="button" class="btn btn-success btn-outline-secondary" @click="createClient()">
			{{ t('clients.action1') }}
		</button>
	</div>
	<main class="view__container container-fluid">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>{{ t('client.name-input') }}</th>
					<th>{{ t('client.firstname-input') }}</th>
					<th>{{ t('client.birthdate-input') }}</th>
				</tr>
			</thead>
			<tbody class="overflow-auto">
				<tr v-for="(line) in clients" :key="line.uuid" :title="line.numSS">
					<td scope="col" class="text-left">{{ line.lastName }}</td>
					<td scope="col" class="text-left">{{ line.firstName }}</td>
					<td scope="col" class="text-left">{{ d(line.birthDate) }}</td>
					<td scope="col" class="d-flex justify-content-around">
						<button type="button" class="btn btn-primary btn-sm" @click="displayClient(line)">
							<i class="bi bi-eye-fill btn-icon" />
							<span class="btn-label">{{ t('buttons.display-btn') }}</span>
						</button>
						<button type="button" class="btn btn-success btn-sm" @click="editClient(line)">
							<i class="bi bi-pencil-square btn-icon" />
							<span class="btn-label">{{ t('buttons.edit-btn') }}</span>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</main>
</div>
</template>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter, useRoute } from 'vue-router'

// Views
import Header from '../components/header/Header.vue'

// API
import apiClients from '../api/clients.js'

export default {
	components: { Header },
	setup(props, context) {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels
		
		const { clients, getClients, searchClients } = apiClients()

		// API Calls
		const search = (term) => {
			searchClients(term)
		}

		onMounted( () => {
			getClients()
		})

		// Navigation to Client.vue
		const router = useRouter() // Import Router

		const createClient = () => {
			let client = { uuid : '', p_mode: 'E'}
			// router.push({ path: `/Client/${''}`, params: { p_client: {} } })
			router.push({ name: 'Client', params: client})
		}

		const editClient = (client) => {
			let params = { uuid: client.uuid, name: client.lastName + ' ' + client.firstName, p_mode: 'E' }
			router.push({ name: 'Client', params: params })
		}

		const displayClient = (client) => {
			let params = { uuid: client.uuid, name: client.lastName + ' ' + client.firstName, p_mode: 'D' }
			router.push({ name: 'Client', params: params })
		}

		const headerParams = { view: 'clients', title: t('clients.title') } // Header
		provide('search', search)

		return { clients, createClient, editClient, displayClient, search, getClients, headerParams, t, d }
	}
}
</script>

<style>

</style>