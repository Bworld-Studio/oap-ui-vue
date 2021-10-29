<template>
<div id="home">
	<Header v-bind="headerParams"/>
	<main class="home__main view__container container-fluid">
		<div class="card__container">
			<div class="card" v-for="(view) in views" :key="view.id" style="width: 25rem;">
				<div class="card-body">
					<h5 class="card-title">{{ t(view.title) }}</h5>
					<p class="card-text">{{ t(view.text) }}</p>
					<a v-on:click="navigateTo(view.path0)" class="card-link">{{ t(view.action0) }}</a>
					<a v-on:click="navigateTo(view.path1)" class="card-link">{{ t(view.action1) }}</a>
				</div>
			</div>
		</div>
	</main>
</div>
</template>

<style>
	#home { height: 100%; }
	
	/* .card { margin: 1em } */
</style>

<script>
// Utilities
import { ref, provide } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter } from 'vue-router'

// Views
import Header from '../header/Header.vue'

// API


export default {
	components: { Header },
	props: { title: String },
	setup() {

		const { t, d } = useI18n({ useScope: 'global' }) // Labels

		const views = ref([
			{ id: 'Clients', title: 'clients.title', text: 'clients.text', action0: 'clients.action0', path0: '/Clients', action1: 'clients.action1', path1: '/Client' },
			{ id: 'Products', title: 'products.title', text: 'products.text', action0: 'products.action0', path0: '/Products', action1: 'products.action1', path1: '/Products' },
			{ id: 'Orders', title: 'orders.title', text: 'orders.text', action0: 'orders.action0', path0: '/Orders', action1: 'orders.action1', path1: '/Orders' }
		])

		const router = useRouter() // Import Router

		const search = (term) => {
			// searchClients(term)
		}

		const navigateTo = (view) => {
			router.push({ path: view })  //params: { }
		}

		// Header

		const headerParams = { view: 'home', title: t('home.title') } // Header
		provide('search', search)
		
		// return { clients, createClient, editClient, displayClient, search, getClients, headerParams, t, d }
		return { views, search, headerParams, navigateTo, t, d }
	}
}
</script>