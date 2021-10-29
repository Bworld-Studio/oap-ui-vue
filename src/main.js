import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// CSS
import { Notyf } from 'notyf'
import { Modal, Dropdown, Tooltip, Toast, Popover } from 'bootstrap'
import './assets/styles/op.css'
import './assets/styles/opwebui.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import 'notyf/notyf.min.css'

// Internationalisation -- i18n
const loadLocaleMessages = () => {
	let locales = import.meta.globEager('./locales/*-*.json')
	let messages = {}

	for (const path in locales) {
		const matched = path.match(/([A-Za-z0-9-_]+)\./i)
		if (matched && matched.length > 1 ) {
			const locale = matched[1]
			messages[locale] = locales[path]
		}
	}
	return messages
}

const loadDateTimeFormats = () => {
	let datetimeFormats = import.meta.globEager('./locales/datetimeFormats.json')
	return datetimeFormats
}

const i18n = createI18n({
	legacy: false,
	locale: 'fr-FR',
	fallbackLocale: 'en-GB',
	globalInjection: true,
	datetimeFormats: loadDateTimeFormats(),
	messages: loadLocaleMessages(),
})

const notyf = new Notyf({
	duration: 2500,
	position: {
		x: 'right',
		y: 'top',
	},
	types: [
		{
			type: 'warning',
			background: 'orange',
			icon: {
				className: 'material-icons',
				tagName: 'i',
				text: 'warning'
			}
		},
		{
			type: 'error',
			// background: 'indianred',
			duration: 5000,
			dismissible: true
		}
	]
})

// App Creation
const app = createApp(App)

app.use(router)
app.use(i18n)

app.provide('$notyf', notyf)
app.provide('$modal', Modal)
app.provide('$dropdown', Dropdown)
app.provide('$tooltip', Tooltip)
app.provide('$toast', Toast)
app.provide('$popover', Popover)

app.mount('#app')