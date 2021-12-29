import { createI18n } from 'vue-i18n'

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

export default i18n