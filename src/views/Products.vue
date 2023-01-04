<template>
<div id="products">
	<div class="toolbar">
		<button id="button-action0" type="button" class="btn btn-primary" @click="refreshList()">{{ t('buttons.refresh-btn') }}</button>
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
					<tr v-for="(product) in products" :key="product.cis" @click="displayProduct(product)">
						<th class="text-left">{{ product.cis }}</th>
						<td class="text-left">{{ product.labelMed }}</td>
						<td class="text-left">{{ product.pharmaForm }}</td>
					</tr>
				</tbody>
			</table>
			<nav aria-label="...">
				<ul class="pagination justify-content-center">
					<li class="page-item disabled">
						<a class="page-link">{{ t('buttons.previous-btn') }}</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">1</a></li>
					<li class="page-item active" aria-current="page">
						<a class="page-link" href="#">2</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item">
						<a class="page-link" href="#">{{ t('buttons.next-btn') }}</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</div>
</template>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'	// Fonction Vue3-Composition API
import { useRouter, useRoute } from 'vue-router'									// Fonctions du Router de Vues
import { useStore } from 'vuex'																		// Gestion des états
import { useI18n } from 'vue-i18n' 																// I18n

// Views
// import Header from '../components/header/Header.vue'													// Import de la vue Header
import Product from '../components/Product.vue'

// API
import apiProducts from '../api/products.js'

export default {
	components: { },
	setup() {
		const { t } = useI18n({ useScope: 'global' }) // Labels
		const store = useStore()

		const products = ref([])
		// const productsList = ref([])

		// Pagination
		// let pages = 0
		// let itemPerPage = 16

		// debugger
		products.value = store.state.products.list

		const { getProducts, searchProducts } = apiProducts()

		onMounted( () => {
			// if ( products.value.length == 0 ) {
			// const products = computed(() => store.state.products.list)
			// debugger
			// products.value = store.list
			// }
		})

		const refreshList = async () => {
			products.value = await getProducts()
		}

		const search = (term) => {
			searchProducts(term)
		}

		// Navigation to Client.vue
		const router = useRouter() // Import Router

		const displayProduct = (product) => {
			let params = { cis: product.cis, labelMed: product.labelMed, mode: 'D' }
			router.push({ name: 'Product', params: params })
			// router.push({ path: `/Product/${product.cis}`, params: params }) // `/user/${username}`
		}

		// Header
		// const headerParams = { view: 'products', title: t('products.title') } // Header
		provide('search', search)

		return {
			products, refreshList, displayProduct,
			headerParams, t
		}
	}
}
</script>

<style>
	.table__body {
		height: 750px;
		display: block;
	}
</style>