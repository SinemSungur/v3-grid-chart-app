<template>
  <div>
    <div v-if="openModal" id="modal" class="modal__container">
      <div class="modal-content">
        <h2 class="modal-title">
          Search Volume
          <span @click="closeModal()" class="close">
            <i class="fas fa-times close"></i>
          </span>
        </h2>
        <p class="modal-keyword">{{ getModalInfo }}</p>
        <chart></chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { computed, watch } from "vue";
import Chart from "./Chart.vue";

export default {
  name: "Modal",
  components: {
    Chart,
  },
  setup() {
    const store = useStore();

    let getModalInfo = computed(() => store.getters.getModalData);
    let openModal = computed(() => store.getters.setOpenModal);


    watch(() => {
      if (openModal.value) {
        fetchData();
      }
    });

    const fetchData = () => {
      axios
        .post(
          "https://jupiter.seo.do/front-interview/get_specific_search_volume",
          {
            keyword: getModalInfo.value,
            country: "tr",
            lang: "tr",
          }
        )
        .then((response) => {
          store.dispatch("setVolumeChart", response.data);
        });
    };

    const closeModal = () => {
      store.dispatch("setOpenModal", false);
    };

    return { closeModal, openModal, getModalInfo };
  },
};
</script>
