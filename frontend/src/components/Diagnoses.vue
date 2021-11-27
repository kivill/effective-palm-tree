<template>
  <div>
    <div v-if="props.diagnoses.length != 0">
      <div v-for="diagnosis in props.diagnoses" :key="diagnosis._id">
        {{ diagnosis.diagnosis }} - {{ diagnosis.influence }}%
      </div>
    </div>
    <div v-else>Диагнозы пока не найдены</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
interface Diagnosis {
  diagnosis: string;
  influence: number;
  actions: string;
}
export default defineComponent({
  props: {
    diagnoses: {
      type: Array as PropType<Array<Diagnosis>>,
      default: () => [],
      required: true,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style>
</style>