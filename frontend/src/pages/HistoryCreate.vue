<template>
  <q-page class="q-pa-md">
    <div class="row q-pa-md">
      <div class="col">
        <q-input v-model="currentHistory.history" filled autogrow />
      </div>
    </div>
    <div v-if="currentHistory.diagnoses.length != 0" class="row q-pa-md">
      <div class="col">
        <Diagnoses :diagnoses="currentHistory.diagnoses" />
      </div>
    </div>
    <div v-if="currentHistory.deathRisk" class="row q-pa-md">
      <div class="col">
        Риск смертельного исхода - {{ currentHistory.deathRisk }}%
      </div>
    </div>
    <div class="row q-pa-md">
      <div class="col">
        <q-btn
          color="primary"
          label="определить диагнозы"
          dense
          @click="createHistory"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHistory } from '../modules/history';
import Diagnoses from '../components/Diagnoses.vue';

export default defineComponent({
  name: 'history',
  components: {
    Diagnoses,
  },
  setup() {
    const { createHistory, currentHistory, isCurrentLoading } = useHistory();
    return {
      currentHistory,
      isCurrentLoading,
      createHistory,
    };
  },
});
</script>
