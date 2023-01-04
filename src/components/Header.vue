<template>
	<header id="header" class="nav bg-color header--height">
		<div class="header__nav">
			<div class="header__title">
				<h4>{{ title }}</h4>
			</div>
			<div class="header__search">
				<div class="input-group">
					<input v-model="searchText" :placeholder="t('search.placeholder-input')" type="text" class="form-control" aria-label="Text input with segmented dropdown button">
					<button type="button" class="btn btn-success btn-outline-secondary" @click="search(searchText)">
						<!-- <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
							<path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
						</svg> -->
						<span>{{ t('search.action') }}</span>
					</button>
					<button type="button" class="btn btn-success btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
						<span class="visually-hidden">Toggle Dropdown</span>
					</button>
					<ul class="dropdown dropdown-menu dropdown-menu-end">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
						<li>
							<hr class="dropdown-divider">
						</li>
						<li><a class="dropdown-item" href="#">Separated link</a></li>
					</ul>
				</div>
				<!-- <input class="form-control form-control-sm" type="search" v-bind:placeholder="t('search.placeholder-input')" aria-label="Search" aria-describedby="button-search"> -->
				<!-- <div class="input-group-append">
					<button class="btn btn-success my-2 my-sm-0 btn-outline-secondary" type="button" id="button-search" v-on:click="search()">
						<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
							<path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
						</svg>
					</button>
				</div> -->
			</div>
			<!-- <div class="header__actions">
				<div class="header__actions--buttons">
					<button class="btn btn-primary btn-outline-secondary" type="button" id="button-action0" v-if="action0 !== undefined" v-on:click="action0()">{{actions[0].label}}</button>
					<button class="btn btn-success btn-outline-secondary" type="button" id="button-action1" v-if="action1 !== undefined" v-on:click="action1()">{{actions[1].label}}</button>
				</div>
			</div> -->
			<div class="header__avatar">
				<img src="../assets/images/avatars/1.png" style="margin-right: 8px;">
			</div>
			<div class="header__status" @:click="updateStatus()">
				<div v-if="status">
					<svg width="1em" height="1em" class="bi bi-circle-fill text-success" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
						<circle cx="8" cy="8" r="8" />
					</svg>
				</div>
				<div v-else>
					<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-circle-fill text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
					</svg>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

// Utilities
import { ref, onMounted, computed, inject } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useHeaderStore } from '../stores/header'

// Views

// API
import useCommon from '../api/common.js'

export default {
	props: {},
	setup(props) {

		const { t } = useI18n({ useScope: 'global' }) // Labels
		const headerStore = useHeaderStore()

		const search = inject('search')

		const title = computed(() => headerStore.title)

		// onMounted( () => {
		const { updateStatus, status } = useCommon()
		updateStatus()
		// })

		let searchText = ref('')

		return { searchText, updateStatus, status, search, title, t }

	}
}
</script>

<style>
.header--height {
	height: 51px !important;
}

.header__nav {
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 5px 10px;
	justify-content: space-between;
}

.header__nav>div {
	display: flex;
	align-items: center;
	padding: 0 0.2rem;
}

.header__title {
	color: #fff;
	flex-grow: 1;
}

.header__search {
	flex-grow: .5;
}

.header__actions {
	color: #fff
}

.header__actions--buttons>button {
	margin-right: 0.4rem;
}

.header__avatar img {
	vertical-align: middle;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
}

/* .header__actions--buttons { } */
/* .header__status { } */
</style>