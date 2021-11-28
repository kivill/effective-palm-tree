<template>
  <q-page class="q-pa-md">
    <q-table
      :loading="isHistoryLoading"
      title="Истории"
      :rows="histories"
      :columns="columns"
      row-key="_id"
      :pagination="initialPagination"
    >
      <template v-slot:top-right>
        <q-btn color="primary" label="Добавить" dense to="/history/create" />
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">{{
            col.label
          }}</q-th>
          <!-- <q-th auto-width /> -->
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm"
              color="primary"
              round
              dense
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'expand_more' : 'chevron_right'"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">{{
            col.value
          }}</q-td>
          <!-- <q-td auto-width>
            <q-btn
              size="sm"
              color="primary"
              round
              dense
              @click="edit(props.row)"
              icon="create"
            />
          </q-td> -->
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <div class="row q-pa-md">
                <div class="col">
                  <q-input v-model="props.row.history" outlined autogrow />
                </div>
              </div>
              <div class="row q-pa-md">
                <div class="col">
                  <Diagnoses :diagnoses="props.row.diagnoses" />
                </div>
              </div>

              <div class="row q-pa-md">
                <div class="col">
                  Риск смертельного исхода -
                  {{ props.row.deathRisk.toFixed(2) }}%
                </div>
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
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
    const { getAllHistory, histories, isHistoryLoading } = useHistory();
    getAllHistory();
    const columns = [
      {
        name: 'id',
        field: '_id',
        label: 'id',
        align: 'left',
      },
      {
        name: 'deathRisk',
        field: 'deathRisk',
        format: (val: number) => `${val.toFixed(2)} %`,
        label: 'Риск смерти',
        align: 'left',
      },
    ];
    return {
      isHistoryLoading,
      histories,
      columns,
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 0,
      },
    };
  },
});
</script>
