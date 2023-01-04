<template>
	<div id="updates">
		<div class="container__main container-fluid">
			<!-- <h2>{{ t('updates.title') }}</h2> -->
			<div v-for="(line) in updatesTable" :key="line.id" :title="line.numSS">
				<button class="btn btn-info btn-sm update-btn" @click="(line.action)">{{ t(line.label) }}</button>
				<span>{{ t('updates.messages.last-update') }}</span><span>{{ d(line.lastUpdateDate) }}</span>
			</div>
			<!-- <div>
				<button class="btn btn-info btn-sm update-btn" v-on:click="updateBDPM()">{{ t('updates.bdpm-btn')}}</button>
				<span>{{ t('updates.messages.last-update') }}</span><span>{{ d(lastUpdateDate) }}</span>
			</div> -->
			<!-- <div>
				<button class="btn btn-info btn-sm update-btn" v-on:click="updateBdMIT()">{{ t('updates.bdmit-btn')}}</button>
				<span>{{ t('updates.messages.last-update') }}</span><span>{{ d(lastUpdateDate) }}</span>
			</div> -->
		</div>
	</div>
</template>

<script>
// Utilities
import { ref, reactive, onBeforeMount, onMounted, computed } from 'vue'	// Fonction Vue3-Composition API
import { useRouter, useRoute } from 'vue-router'												// Fonctions du Router de Vues
import { useStore } from 'vuex'																					// Gestion des états
import { useI18n } from 'vue-i18n' 																			// I18n

// Views

// API
// import apiUpdates from '../api/updates.js'

export default {
	components: { }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	setup() {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels

		const store = useStore()

		// const { update, readUpdateDate, lastUpdateDate } = useUpdates()
		let updatesTable = ref([])

		updatesTable.value = store.state.updates.list
		
		// onBeforeMount( () => readUpdateDate('BDPM') ) // Fonction qui permet d'executer une autre fonction à l'appel du composant

		const updateBDPM = () => {
			// update('BDPM')
		}

		const updateBdMIT = () => {
			// update('BdMIT')
		}

		console.log(updatesTable.value)

		return {
			updatesTable, updateBDPM, updateBdMIT,
			t, d
		}
	}
}
</script>

<style>
	.update-button { margin: 5px 10px }
</style>