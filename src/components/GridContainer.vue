<template>
  <ag-grid-vue
    id="gridContainer"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData.value"
    :defaultColDef="defaultColDef"
    :frameworkComponents="frameworkComponents"
    @grid-ready="onGridReady"
    rowSelection="multiple"
    rowHeight="56"
    headerHeight="48"
  >
  </ag-grid-vue>

  <pagination />
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import SearchVolume from "./SearchVolume.vue";
import Rank from "./Rank.vue";
import RankChange from "./RankChange.vue";
import UrlPage from "./UrlPage.vue";
import Keyword from "./Keyword.vue";
import PixelRankChange from "./PixelRankChange.vue";
import Cpc from "./Cpc.vue";
import PixelRank from "./PixelRank.vue";
// import Header from "./Header.vue";
import Pagination from "./Pagination.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    AgGridVue,
    Pagination,
  },
  setup() {
    let rowData = reactive([]);
    let api = ref();
    let columnApi = ref();

    const store = useStore();

    const onGridReady = (params) => {
      api.value = params.api;
      columnApi.value = params.columnApi;
    };

    onMounted(() => {
      axios
        .post(
          `https://jupiter.seo.do/front-interview/list_keyword_info_for_domain`,
          {
            firstDate: "2020-02-20",
            lastDate: "2020-02-25",
            domain: "akakce.com",
            limit: 10,
            page: 3,
          }
        )
        .then((result) => {
          rowData.value = result.data;
          store.dispatch("setRowData", rowData);
        });
    });

    return {
      rowData,
      columnDefs: [
        {
          headerName: "KEYWORDS",
          field: "keyword",
          cellRendererFramework: Keyword,
          width: 300,
        },
        {
          headerName: "SEARCH VOLUME",
          field: "avgSearchVolume",
          cellRendererFramework: SearchVolume,
          width: 200,
        },
        {
          headerName: "RANK",
          field: "rank",
          cellRendererFramework: Rank,
          width: 150,
        },
        {
          headerName: "CHANGE",
          field: "diffRank",
          cellRendererFramework: RankChange,

          width: 150,
        },
        {
          headerName: "PX RANK",
          field: "pixelRank",
          cellRendererFramework: PixelRank,
        },
        {
          headerName: "CHANGE",
          field: "diffPixelRank",
          cellRendererFramework: PixelRankChange,
        },
        {
          headerName: "URL-PAGE",
          field: "landingPage",
          cellRendererFramework: UrlPage,
          width: 400,
        },
        {
          headerName: "CPC-$",
          field: "cpc",
          cellRendererFramework: Cpc,
          width: 280,
        },
      ],
      frameworkComponents: {
        searchVolume: SearchVolume,
        rank: Rank,
        rankChange: RankChange,
        urlPage: UrlPage,
        keyword: Keyword,
        PixelRankChange: PixelRankChange,
        cpc: Cpc,
        pixelRank: PixelRank,
        // Header: Header,
      },
      onGridReady,
      defaultColDef: {
        sortable: true,
        minWidth: 150,
        maxWidth: 400,
        filter: true,
        resizable: true,
      },
    };
  },
};
</script>
