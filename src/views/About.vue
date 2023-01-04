<template>
<div id="about">
	<div class="toolbar">
		<button class="btn btn-secondary" @click="$router.back()">
			<i class="bi bi-caret-left" />
			<span class="btn-label">{{ t('buttons.back-btn') }}</span>
		</button>
	</div>
	<main class="view__container" />
</div>
</template>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues
import Axios from 'axios'																	// Axios pour faire des appels au backend

// Store
import { useHeaderStore } from '../stores/header'

// Views

// API


export default {
	components: { }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	//props: { param: '' },		// Déclaration des paramètres d'entrée du composant
	setup(props, context) {
		const { t } = useI18n({ useScope: 'global' }) // Labels

		const { setTitle } = useHeaderStore()
		setTitle(t('about.title'))

		const search = (term) => {
			// searchClients(term)
		}

		onMounted( () => {
			setTitle(t('about.title'))
		})

		// const varLabel = ref('global.version')					// Binding de Label i18n
		// let varStr = ref('Variable Simple binding')		// Variable de type alphanumérique
		// let varNum = 0		// Variable de type nombre
		// let varObj = {}		// Variable de type objet
		// let varTab = []		// Variable de type Table
		// let varUnd = undefined	// Variable de type non défini

		// const getData = () => {
		// 	let varTemp = 'Test binding' // Accès aux variables dans le code JS
		// 	console.log('Template: Display stuff in the console')
		// 	console.log(varTemp)

		// 	varStr = varTemp
		// }

		onMounted( () => {
			

		} ) // Fonction qui permet d'executer une autre fonction à l'appel du composant Template

		provide('search', search)

		return { t }
	}
}
</script>

<style>
	/* CSS */

</style>