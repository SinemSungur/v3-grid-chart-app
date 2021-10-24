<template>
  <div class="pagination__container" v-show="pageNumbers > 0">
    <div class="pagination-list" @click="selectedPage($event)">
      <a class="pagination-list-item previous">Previous</a>

      <div
        class="pagination-list-numbers"
        v-for="(number, index) in pageNumbers"
        :key="index"
      >
        <span>
          {{ number }}
        </span>
      </div>

      <a class="pagination-list-item next">Next</a>
    </div>
  </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const rowList = computed(() => store.getters.getRowData);

    watch(() => console.log("rowlist", rowList.value));
    // const pageNumbers = computed(()=> Math.ceil(rowList.value.length / 20)
  },
};
</script>


