import { createStore } from "vuex";

export default createStore({
  state: {
    modalData: {},
    rowData: [],
    isOpen: false,
    volumeChart: [],
  },
  getters: {
    getModalData(state) {
      return state.modalData;
    },
    getRowData(state) {
      return state.rowData;
    },
    setOpenModal(state) {
      return state.isOpen;
    },
    getVolumeChart(state) {
      return state.volumeChart;
    },
  },
  mutations: {
    SET_MODAL_DATA(state, modalInfo) {
      state.modalData = modalInfo;
    },
    SET_ROW_DATA(state, payload) {
      state.rowData = payload;
    },
    SET_OPEN_MODAL(state, payload) {
      state.isOpen = payload;
    },
    SET_VOLUME_CHART(state, payload) {
      state.volumeChart = payload;
    },
  },
  actions: {
    setModalData({ commit }, payload) {
      commit("SET_MODAL_DATA", payload);
    },
    setRowData({ commit }, payload) {
      commit("SET_ROW_DATA", payload);
    },
    setOpenModal({ commit }, payload) {
      commit("SET_OPEN_MODAL", payload);
    },
    setVolumeChart({ commit }, payload) {
      commit("SET_VOLUME_CHART", payload);
    },
  },
});
