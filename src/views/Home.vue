<template>
<div id="home">
	<main class="home__main view__container container-fluid">
		<div class="card__container">
			<div v-for="(view) in views" :key="view.id" class="card" style="width: 25rem;">
				<div class="card-body">
					<h5 class="card-title">{{ t(view.title) }}</h5>
					<p class="card-text">{{ t(view.text) }}</p>
					<a class="card-link" @click="navigateTo(view.path0)">{{ t(view.action0) }}</a>
					<a class="card-link" @click="navigateTo(view.path1)">{{ t(view.action1) }}</a>
				</div>
			</div>
		</div>
	</main>
</div>
</template>

<script>
// Utilities
import { ref, provide, onMounted } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter } from 'vue-router'
import { useHeaderStore } from '../stores/header'

// Views

// API


export default {
	components: { },
	// props: { title: String },
	setup() {

		const { t, d } = useI18n({ useScope: 'global' }) // Labels

		const views = ref([
			{ id: 'Clients', title: 'clients.title', text: 'clients.text', action0: 'clients.action0', path0: '/Clients', action1: 'clients.action1', path1: '/Client' },
			{ id: 'Products', title: 'products.title', text: 'products.text', action0: 'products.action0', path0: '/Products', action1: 'products.action1', path1: '/Products' },
			{ id: 'Orders', title: 'orders.title', text: 'orders.text', action0: 'orders.action0', path0: '/Orders', action1: 'orders.action1', path1: '/Orders' }
		])

		const router = useRouter() // Import Router

		const { setTitle } = useHeaderStore()

		const search = (term) => {
			// searchClients(term)
		}

		const navigateTo = (view) => {
			router.push({ path: view })  //params: { }
		}

		// Header
		onMounted( () => {
			setTitle(t('home.title'))
		})
		provide('search', search)
		
		return { views, search, navigateTo, t, d }
	}
}
</script>

<style>
	#home { height: 100%; }
	
	/* .card { margin: 1em } */
</style>