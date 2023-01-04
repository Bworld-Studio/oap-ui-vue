<template>
<!-- Commentaire HTML -->
	<div id="orders">
		<div class="container__main container-fluid">
			<div />
		</div>
	</div>
</template>

<script>
// Utilities
import { ref, reactive, onMounted, computed } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues

// Views

// API
// import apiOrders from '../../common/api.orders.js'

export default {
	components: { }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	setup() {
		const { t } = useI18n({ useScope: 'global' }) // 
		const headerParams = { view: 'orders', title: t('orders.title') } // Header

		const header = ref([ 'orders.id', 'orders.provider', 'orders.date' ])
		const orders = ref([])

		onMounted( () => {
			// getData()
		}) // Fonction qui permet d'executer une autre fonction à l'appel du composant Template

		return { orders, t }
	}
}
</script>

<style>

</style>