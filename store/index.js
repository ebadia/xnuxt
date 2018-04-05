import Vuex from "vuex";

const createStore = () => {
	return new Vuex.Store({
		state: {},
		mutations: {},
		actions: {
			nuxtServerInit(nuxtContext, context) {}
		},
		getters: {}
	});
};

export default createStore;
