<template>
  <div
    class="searchVolume__container row__container--icon"
    @click="openModal(params)"
  >
    <img class="searchVolume-icon" src="../assets/searchVolume.svg" />
    <span>{{ this.params.value.toFixed(1) }}</span>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "SearchVolume",
  setup() {
    const store = useStore();

    const openModal = (params) => {
      store.dispatch("setOpenModal", true);
      store.dispatch("setModalData", params.data.keyword);
    };

    return {
      openModal,
    };
  },
};
</script>
