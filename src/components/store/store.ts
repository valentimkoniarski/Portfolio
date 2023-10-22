import { createStore } from 'vuex';
import headerModule from '../header/store';

export default createStore({
  modules: {
    header: {
      namespaced: true, // Defina o namespace para true
      ...headerModule, // Importe as configurações do módulo do arquivo 'header.js'
    },
    // Outros módulos, se houver
  },
});
