<template>
  <b-container fluid id="app">
    <app-header></app-header>
    <section class="task-container">
      <task-count-view :taskCount="tasks.length"></task-count-view>
      <add-task-view></add-task-view>
      <remove-task-view></remove-task-view>
      <task-view :tasks="tasks"></task-view>
    </section>
  </b-container>
</template>

<script>  
import { mapGetters } from "vuex";

import AppHeader from "./AppHeader";
import TaskCountView from "./tasks/TaskCountView";
import AddTaskView from "./tasks/AddTaskView";
import RemoveTaskView from "./tasks/RemoveTaskView";
import TaskView from "./tasks/TaskView";

export default {
  name: "AppMain",
  components: {
    AppHeader,
    TaskCountView,
    AddTaskView,
    RemoveTaskView,
    TaskView,
  },
  computed: {
    ...mapGetters(
      {
        tasks: 'tasks/all',
      }),
  },
};
</script>

<style scoped>

.task-container {
  margin-top: 150px;
  margin-left: 470px;
  padding: 20px;
  width: 960px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
}

</style>

