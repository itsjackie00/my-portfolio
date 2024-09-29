import { createApp } from 'vue';
import App from './App.vue';
import router from './route';  // Assicurati di importare il router correttamente

const app = createApp(App);

app.use(router);  // Usa il router nell'app Vue
app.mount('#app');
