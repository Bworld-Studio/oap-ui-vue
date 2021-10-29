<template>
<div id="products">
	<Header v-bind="headerParams"/>
	<div class="toolbar">
		<button class="btn btn-primary" type="button" id="button-action0" v-on:click="getProducts()">{{t('products.action0')}}</button>
	</div>
	<div class="view__container">
		<div class="table-responsive table--100">
			<table class="table table-striped table-hover table__body">
				<thead>
					<tr>
						<th>{{ t('products.table-header.cis') }}</th>
						<th>{{ t('products.table-header.labelMed') }}</th>
						<th>{{ t('products.table-header.pharmaForm') }}</th>
					</tr>
				</thead>
				<tbody class="overflow-auto">
					<tr v-for="(product) in products" :key="product.cis" v-on:click="displayProduct(product)">
						<th class="text-left">{{product.cis}}</th>
						<td class="text-left">{{product.labelMed}}</td>
						<td class="text-left">{{product.pharmaForm}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
</template>

<style>
	.table__body {
		height: 750px;
		display: block;
	}
</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues
// import Axios from 'axios'																	// Axios pour faire des appels au backend

// Views
import Header from '../header/Header.vue'									// Import de la vue Header
import Product from './Product.vue'

// API
import useProducts from '../../common/api.products.js'

export default {
	components: { Header },
	setup() {
		const { t } = useI18n({ useScope: 'global' }) // Labels
		// const headerParams = { view: 'clients', title: t('products.title') } // Header

		const { products, getProducts, searchProducts } = useProducts()		// Get products

		onMounted( () => {
			if ( products.value.length == 0 ) getProducts()
		})

		const search = (term) => {
			searchProducts(term)
		}

		// Navigation to Client.vue
		const router = useRouter() // Import Router

		const displayProduct = (product) => {
			let params = { cis: product.cis, labelMed: product.labelMed, mode: 'D' }
			router.push({ name: 'Product', params: params })
		}

		// Header
		const headerParams = { view: 'products', title: t('products.title') } // Header
		provide('search', search)

		return {
			products, getProducts, displayProduct,
			headerParams, t
		}
	}
}
</script>
