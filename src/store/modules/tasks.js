import types from '../types';

const state = {
  tasks: [],
};

const getters = {
  all({ tasks }) {
    return tasks;
  },
};

const actions = {
  add({ commit }, description) {
    commit(types.ADD_TASK, { description });
  },
  checkTask({ commit }, taskIndex) {
    commit(types.CHECK_TASK, { taskIndex });
  },
  removeOne({ commit }, taskIndex) {
    commit(types.REMOVE_ONE, { taskIndex });
  },
  removeChecked({ commit }) {
    commit(types.REMOVE_CHECKED);
  },
  removeAll({ commit }) {
    commit(types.REMOVE_ALL);
  }
};

const mutations = {
  [types.ADD_TASK](state, { description }) {
    state.tasks.push({ description, done: false });
  },
  [types.CHECK_TASK](state, { taskIndex }) {
    state.tasks[taskIndex].done = !state.tasks[taskIndex].done;
  },
  [types.REMOVE_ONE](state, { taskIndex }) {
    state.tasks.splice(taskIndex, 1);
  },
  [types.REMOVE_CHECKED](state) {
    const removedTasks = state.tasks.filter(({ done }) => !done);

    state.tasks = removedTasks;
  },
  [types.REMOVE_ALL](state) {
    state.tasks = [];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
