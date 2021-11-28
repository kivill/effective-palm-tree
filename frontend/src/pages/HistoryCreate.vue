<template>
  <q-page class="q-pa-md">
    <div class="row q-pa-md">
      <div class="col">
        <q-input
          v-model="currentHistory.history"
          outlined
          label="Введите анамнез"
          autogrow
        />
      </div>
    </div>
    <div v-if="currentHistory.diagnoses.length != 0" class="row q-pa-md">
      <div class="col">
        <Diagnoses :diagnoses="currentHistory.diagnoses" />
      </div>
    </div>
    <div v-if="currentHistory.deathRisk" class="row q-pa-md">
      <div class="col">
        Риск смертельного исхода - {{ currentHistory.deathRisk.toFixed(2) }}%
      </div>
    </div>
    <div class="row q-pa-md">
      <div class="col" v-if="currentHistory.diagnoses.length == 0">
        <q-btn
          color="primary"
          label="определить диагнозы"
          dense
          @click="createHistory"
        />
      </div>
      <div class="col" v-else>
        <q-btn
          color="primary"
          label="вернуться ко всем историям"
          dense
          @click="setCurrentHistoryEmpty()"
          to="/history"
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
    const {
      createHistory,
      currentHistory,
      setCurrentHistoryEmpty,
      isCurrentLoading,
    } = useHistory();
    return {
      currentHistory,
      isCurrentLoading,
      setCurrentHistoryEmpty,
      createHistory,
    };
  },
});
</script>
