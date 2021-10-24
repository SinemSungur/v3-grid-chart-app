<template>
  <div class="chart-container">
    <apexchart
      width="700px"
      height="300px"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
 
<script>
import VueApexCharts from "vue3-apexcharts";
import ApexCharts from "apexcharts";
import { ref, onMounted, reactive, computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "Chart",
  components: {
    apexchart: VueApexCharts,
  },

  setup() {
    let volumeSeries = ref([]);
    let volumeCategories = ref([]);
    let series = reactive([
      {
        name: "value",
        data: "",
      },
    ]);

    let options = reactive({
      type: "bar",
      dataLabels: {
        enabled: false,
      },
      colors: ["#9999CC"],
      chart: {
        foreColor: "#9999CC",
        id: "searchVolumeChart",
      },
      xaxis: {
        labels: {
          style: {
            colors: ["#9999CC"],
            fontFamily: "Barlow, sans-serif",
          },
        },
        categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
      },
      yaxis: [
        {
          labels: {
            formatter: (value) => value,
            style: {
              colors: "#9999CC",
              fontFamily: "Barlow, sans-serif",
              fontSize: "12",
            },
          },
        },
      ],
      responsive: [
        {
          breakpoint: 1024,
          options: {
            dataLabels: {
              enabled: false,
            },
          },
        },
      ],
    });

    const store = useStore();

    let volumeData = reactive({})

    volumeData = computed(() => store.getters.getVolumeChart);

    watch(() => {
      console.log("watchchart", volumeData.value);
    });

    const setChart = () => {
      if (volumeData.value) {
        series.value = [
          {
            data: volumeSeries.value,
          },
        ];
        ApexCharts.exec("searchVolumeChart", {
          xaxis: {
            categories: volumeCategories.value,
          },
        });
      }
    };

    onMounted(() => {
      console.log("volumeData", volumeData);
      setChart();
    });

    return {
      options,
      series,
    };
  },
};
</script>