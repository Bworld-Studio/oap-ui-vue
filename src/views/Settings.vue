<template>
<div id="settings">
	<div class="toolbar d-flex justify-content-between">
		<span />
		<span>
			<!-- <button id="button-action0" type="button" class="btn btn-danger" @click="getProducts()">{{ t('settings.reset-to-default') }}</button> -->
		</span>
	</div>
	<div class="view__container container-fluid">
		<div id="settings__display">
			<h4>{{ t('settings.display') }}</h4>
			<div class="card__line">
				<span class="form-floating">
					<select :id="localeChanger" v-model="$i18n.locale" class="form-select form-select-sm">
						<option v-for="lang in availableLocales" :key="`locale-${lang}`" :value="lang">{{ lang }}</option>
					</select>
					<label for="localeChanger">{{ t('settings.locale-input') }}</label>
				</span>
			</div>
		</div>
	</div>
</div>
</template>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues
// import Axios from 'axios'																	// Axios pour faire des appels au backend

// ChartJS
// import { Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip } from 'chart.js'

// Views

// API

export default {
	components: { }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	//props: { param: '' },		// Déclaration des paramètres d'entrée du composant
	setup(props, context) {
		const { t, d, availableLocales } = useI18n({ useScope: 'global' }) // Labels and Date

		// Import Router for navigation
		const router = useRouter() // Import Router

		// const langs = []

		// onMounted( () => )

		const search = (term) => {
			// searchProducts(term)
		}

		provide('search', search)
		return { search, t, d, availableLocales }
	}
}
</script>

<style>

</style>