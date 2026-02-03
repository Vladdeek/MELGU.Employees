import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		allowedHosts: [
			'0uhvua-45-151-153-47.ru.tuna.am', // <- только хост без схемы
			'localhost',
		],
	},
})
