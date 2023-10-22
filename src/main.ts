/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import createStore from './components/header/store.ts'

// Importa o CSS de assets
import './assets/styles/main.scss'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Define o publicPath com base no ambiente
const publicPath = process.env.NODE_ENV === 'production' ? '/vuejs-gh-pages-gh-actions/' : '/'

// Define a configuração de publicPath
const __webpack_public_path__ = publicPath

const app = createApp(App)

app.use(createStore)

registerPlugins(app)

app.mount('#app')
