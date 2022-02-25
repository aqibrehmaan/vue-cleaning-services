import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state () {
      return {
        quoteFormData: {},
        houseWashData: [],
        roofCleanData: [],
        drivewayData: []
      }
    },
    mutations: {
      setQuoteFormData(state, data) {
        state.quoteFormData = data;
      },
      setHouseWashData(state, data) {
          state.houseWashData = data;
      },
      setRoofCleanData(state, data) {
          state.roofCleanData = data;
      },
      setDrivewayData(state, data) {
          state.drivewayData = data;
      }
    },
    actions: {
        addQuoteFormData(context, payload) {

            context.commit('setQuoteFormData', payload);

            let houseWash = payload.price_sheets.filter(item => {
                return item.service_id == 7;
            });

            let roofClean = payload.price_sheets.filter(item => {
                return item.service_id == 8;
            });

            let driveway = payload.price_sheets.filter(item => {
                return item.service_id == 10;
            });

            context.commit('setHouseWashData', houseWash);
            context.commit('setRoofCleanData', roofClean);
            context.commit('setDrivewayData', driveway);
        }
    },
    getters: {
        getQuoteFormData(state) {
            return state.getQuoteFormData;
        },
        getHouseWashData(state) {
            return state.houseWashData;
        },
        getRoofCleanData(state) {
            return state.roofCleanData;
        },
        getDrivewayData(state) {
            return state.drivewayData;
        },
        getQuoteId(state) {
            return state.quoteFormData.quote_id;
        },
        getEmail(state) {
            return state.quoteFormData.email;
        }
    }
  });

export default store;