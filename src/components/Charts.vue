<template>
  <div>
    <canvas height="250" id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
// import Utils from "../assets/helpers/Utils";
export default {
  props: ["labels", "data"],
  data() {
    return {
      myChart: "",
    };
  },
  methods: {
    createChart() {
      var ctx = document.getElementById("myChart");
      this.myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["1", "2", "3", "4", "5", 6, 7, 8, 9],
          datasets: [
            {
              data: this.data || [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
        },
      });
    },
    updateChart(labels, values) {
      this.myChart.data.labels = labels;
      this.myChart.data.datasets[0].data = values;
      this.myChart.update();
    },
  },
  mounted() {
    this.createChart();
  },
};
</script>

<style lang="scss" scoped>
#myChart {
  width: 100%;
}
</style>
