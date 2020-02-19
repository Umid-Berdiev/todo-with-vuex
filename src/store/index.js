import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos';

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
	modules: {
		todos
	}
});
