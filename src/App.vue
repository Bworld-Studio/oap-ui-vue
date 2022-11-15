<template>
<div id="app_body" class="app_body">
	<div id="sidemenu" class="navbar-dark bg-color">
		<div class="sidemenu__top">
			<span class="navbar-dark" style="color: white" @click="toggleMenu('')">
				<i class="sidemenu__toggler navbar-dark bi bi-list" />
			</span>
			<a class="navbar-brand" @click="navigateTo('')">
				<img src="./assets/logo.png" class="oph__logo" />
				<span style="font-family:'Organo'">{{ t('global.openpharma') }}</span>
				<span style="font-family:'OpenSans-Regular'," class="version">{{ t('global.version') }}</span>
			</a>
		</div>
		<aside v-if="menu.show" class="sidemenu__wrapper">
			<menu class="nav navbar-dark bg-color sidemenu__wrapper">
				<ul class="nav navbar-nav flex-column">
					<li class="nav-item">
						<a class="nav-link" @click="navigateTo('Clients')">
							<img src="./assets/images/pharmacy/017-pharmacist.svg" style="margin-right: 8px; width: 41px" />
							<label>{{ t('clients.menu') }}</label>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="navigateTo('Products')">
							<img src="./assets/images/pharmacy/023-drug-2.svg" style="margin-right: 8px; width: 41px" />
							<label>{{ t('products.menu') }}</label>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="navigateTo('Orders')">
							<img src="./assets/images/medicine/007-medical prescription.svg" style="margin-right: 8px; width: 41px" />
							<label>{{ t('orders.menu') }}</label>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="navigateTo('Statistics')">
							<img src="./assets/images/web-design/023-bar chart.svg" style="margin-right: 8px; width: 41px" />
							<label>{{ t('statistics.menu') }}</label>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="navigateTo('Updates')">
							<img src="./assets/images/electronic-devices/037-server.svg" style="margin-right: 8px; width: 41px" />
							<label>{{ t('updates.menu') }}</label>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="navigateTo('Settings')">
							<img src="./assets/images/construction/009-floor plan.svg" style="margin-right: 8px; width: 41px" />
							<label>{{ t('settings.menu') }}</label>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="navigateTo('Template')">
							<img src="./assets/images/construction/012-caution.svg" style="margin-right: 8px; width: 41px" />
							<label>{{ t('template.menu') }}</label>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="navigateTo('About')">
							<img src="./assets/images/marketing/046-idea.svg" style="margin-right: 8px; width: 41px" />
							<label>{{ t('about.menu') }}</label>
						</a>
					</li>
				</ul>
			</menu>
		</aside>
	</div>

	<!-- <div>
		<Header v-bind="headerParams" />
	</div> -->
	<div id="main">
		<Header v-bind="headerParams" />
		<router-view />
	</div>
	<div id="splash" />
</div>
</template>

<script>

// Utilities
import { ref, reactive, onMounted, computed, watch, provide } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

// Views
import Header from './components/header/Header.vue'

// API

// Common

// Stores

export default {
	components: { Header },
	setup() {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels
		const menu = ref({ show: true })

		const router = useRouter() // Import Router

		const store = useStore()
		
		store.dispatch('products/getAllProducts')
		store.dispatch('updates/getLastUpdateDates')

		// API Calls
		// const search = (term) => {
		// 	// searchClients(term)
		// }

		onMounted( () => {

		})

		const navigateTo = (view) => {
			router.push({ path: '/'+view })  //params: { }
		}

		const toggleMenu = () => {
			menu.value.show = !menu.value.show
		}

		const headerParams = { view: 'home', title: t('home.title') } // Header
		// provide('search', search)
		
		return { t, navigateTo, headerParams, toggleMenu, menu }
	}
}
</script>

<style>
	.app_body { display: flex; flex-direction: row; height: 100%; width: 100%; }
	.sidemenu__wrapper { width: 250px; }
	.sidemenu__top { display: flex; }
	.sidemenu__toggler {
		font-size: 2rem;
		width: 3rem;
	}
	.oph__logo { margin-right: 8px; width: 3rem }

</style>