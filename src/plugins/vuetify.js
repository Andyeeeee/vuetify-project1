/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Comopsables
import { VDataTableServer } from 'vuetify/lib/labs/components.mjs'
// import { VDataTableServer } from 'vuetify/labs/VDataTable' 這個是老師的路近  上面的是快速連結的路徑
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

import { zhHant } from 'vuetify/locale'
export default createVuetify({
	components: {
		VDataTableServer
	},
	theme: {
		defaultTheme: 'dark',
		themes: {
			light: {
				colors: {
					primary: '#3F51Ba5',
					secondary: '#5CBBF6'
				}
			}
		}
	},
	locale: {
		locale: 'zhHant',
		messages: { zhHant }
	},
	display: {
		thresholds: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1280,
			xxl: 1400
		}
	}
})
