import Types from "../types";

const state = {
  monthlyInstallment: "",
  duration: 1,
  amount: 10000
};

const getters = {

};

const mutations = {
  [Types.mutations.UPDATE_MONTHLY_INSTALLMENT](state, value) {
    state.monthlyInstallment = value;
  },
  [Types.mutations.UPDATE_DURATION](state, value) {
    state.duration = value;
  },
  [Types.mutations.UPDATE_AMOUNT](state, value) {
    state.amount = value;
  },
};

const actions = {
  [Types.actions.UPDATE_DURATION]({ commit }, value) {
    commit(Types.mutations.UPDATE_DURATION, value);
  },
  [Types.actions.UPDATE_AMOUNT]({ commit }, value) {
    commit(Types.mutations.UPDATE_AMOUNT, value);
  },
  async [Types.actions.GET_MONTHLY_INSTALLMENT]({state, commit }) {
    try {
      const response = await this.$http.post("/monthly-installment", {
        amount: state.amount,
        duration: state.duration,
      });
      
      if (response.status === 200) {
        commit(
          Types.mutations.UPDATE_MONTHLY_INSTALLMENT,
          response.data.monthlyInstallment
        );
      }

    } catch(err) {
      console.log(err);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};