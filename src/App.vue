<template>
<div id="app_body" class="app_body">
	<aside>
		<nav class="nav navbar-dark bg-dark">
			<ul class="nav navbar-nav flex-column">
				<a class="navbar-brand" v-on:click="navigateTo('')" style="font-family:'Ubuntu-Medium'">
					<img src="./assets/logo.png" style="margin-right: 8px; width:41px">
					<span>{{ t('global.openpharma') }}</span>
					<span class="version">{{ t('global.version') }}</span>
				</a>
				<li class="nav-item">
					<a class="nav-link" v-on:click="navigateTo('Clients')">
						<img src="./assets/images/pharmacy/009-Pharmacist.svg" style="margin-right: 8px; width: 41px">
						<label>{{ t('clients.menu') }}</label>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="navigateTo('Products')">
						<img src="./assets/images/pharmacy/003-drugs.svg" style="margin-right: 8px; width: 41px">
						<label>{{ t('products.menu') }}</label>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="navigateTo('Orders')">
						<img src="./assets/images/pharmacy/005-prescription.svg" style="margin-right: 8px; width: 41px">
						<label>{{ t('orders.menu') }}</label>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="navigateTo('Statistics')">
						<img src="./assets/images/pharmacy/045-container.svg" style="margin-right: 8px; width: 41px">
						<label>{{ t('statistics.menu') }}</label>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="navigateTo('Updates')">
						<img src="./assets/images/pharmacy/045-container.svg" style="margin-right: 8px; width: 41px">
						<label>{{ t('updates.menu') }}</label>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="navigateTo('Settings')">
						<img src="./assets/images/construction/005-plan.svg" style="margin-right: 8px; width: 41px">
						<label>{{ t('settings.menu') }}</label>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="navigateTo('Template')">
						<img src="./assets/images/construction/039-traffic barrier.svg" style="margin-right: 8px; width: 41px">
						<label>{{ t('template.menu') }}</label>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="navigateTo('About')">
						<img src="./assets/images/ecology/035-light bulb.svg" style="margin-right: 8px; width: 41px">
						<label>{{ t('about.menu') }}</label>
					</a>
				</li>
			</ul>
		</nav>
	</aside>
	<div class="main">
		<router-view/>
	</div>
</div>
</template>

<style>
	.app_body { display: flex; flex-direction: row; height: 100%; width: 100%; }
	.nav { height: 100%; }
	/* .nav > * { border-bottom: 1px solid #000; } */
	.navbar-brand {
		margin-bottom: 1em;
	}
	.nav-item {
		display: flex;
		flex-direction: row;
		margin: 0.3em 1em;
		cursor: pointer;
	}
	.main { height: 100%; width: 100%; }
</style>

<script>

// Utilities
import { useI18n } from 'vue-i18n' // I18n
import { useRouter, useRoute } from 'vue-router'

// Views
import Header from './components/header/Header.vue'

// API

// Common
import commonObjects from './common/objects.js'

export default {
	components: { Header, },
	setup() {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels

		const router = useRouter() // Import Router

		const navigateTo = (view) => {
			router.push({ path: '/'+view })  //params: { }
		}
		
		return { t, navigateTo }
	}
}
</script>