import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
// import fs from 'fs'

// const options = {
// 	key: fs.readFileSync('./openpharma.dev-key.pem'),
// 	cert: fs.readFileSync('./openpharma.dev.pem')
// }

export default {
	clearScreen: false,
	server: {
		// https: options,
		host: 'localhost',
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				// target: 'https://127.0.0.1:3443',
				changeOrigin: false
			}
		}
	},
	plugins: [
		vue(),
		vueI18n(
			{ include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n'), }
		),
	]
}