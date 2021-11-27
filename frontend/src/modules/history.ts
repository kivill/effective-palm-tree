import { reactive, toRefs } from 'vue';
import { api } from 'boot/axios';
import { AxiosError } from 'axios';
import { Notify } from 'quasar';
interface Diagnosis {
  diagnosis: string;
  influence: number;
  actions: string;
}
interface History {
  _id?: string;
  history: string;
  deathRisk: number;
  diagnoses: [Diagnosis];
}

interface HistoryState {
  isHistoryLoading: boolean;
  isCurrentLoading: boolean;
  histories: History[];
  currentHistory: Partial<History>;
}

const state = reactive<HistoryState>({
  isHistoryLoading: true,
  isCurrentLoading: false,
  histories: [],
  currentHistory: {
    history: '',
  },
});

export const useHistory = () => {
  const getAllHistory = (): void => {
    state.isHistoryLoading = true;
    api
      .get<Array<History>>('/medical-histories')
      .then((data) => {
        state.histories = data.data;
      })
      .catch((error: AxiosError) => {
        Notify.create({
          type: 'negative',
          message: `${error?.message || 'Неожиданная ошибка'}`,
        });
        console.error(error);
      })
      .finally(() => {
        state.isHistoryLoading = false;
      });
  };
  const addHistory = () => {
    state.isCurrentLoading = true;
    api
      .post('/medical-histories', state.currentHistory)
      .then(() => {
        Notify.create({
          type: 'positive',
          message: 'История добавлена',
          position: 'bottom-right',
        });
        getAllHistory();
      })
      .catch((error: AxiosError) => {
        Notify.create({
          type: 'negative',
          message: `${error?.message || 'Неожиданная ошибка'}`,
        });
        console.log(error);
      })
      .finally(() => {
        state.isCurrentLoading = false;
      });
  };
  return {
    getAllHistory,
    addHistory,
    ...toRefs(state),
  };
};
