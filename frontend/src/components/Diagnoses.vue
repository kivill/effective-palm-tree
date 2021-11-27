<template>
  <div>
    <div v-if="props.diagnoses.length != 0">
      <div class="row">
        <div class="col">
          <div v-for="diagnosis in props.diagnoses" :key="diagnosis._id">
            {{ diagnosis.diagnosis }} - {{ diagnosis.influence }}%
          </div>
        </div>
        <div class="col">
          <apexchart
            type="donut"
            height="150"
            :options="computedChartOptions"
            :series="computedSeries"
          ></apexchart>
        </div>
      </div>
    </div>
    <div v-else>Диагнозы пока не найдены</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Component, computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
interface Diagnosis {
  diagnosis: string;
  influence: number;
  actions: string;
}
export default defineComponent({
  components: {
    apexchart: VueApexCharts as Component,
  },
  props: {
    diagnoses: {
      type: Array as PropType<Array<Diagnosis>>,
      default: () => [],
      required: true,
    },
  },
  setup(props) {
    const computedSeries = computed(() => {
      return props.diagnoses.map((x) => x.influence);
    });
    const computedChartOptions = computed(() => {
      const labels = props.diagnoses.map((x) => x.diagnosis);
      return { labels };
    });
    return {
      props,
      computedSeries,
      computedChartOptions,
    };
  },
});
</script>

<style>
</style>