<template>
  <div class="task-count-block">
    <h1 v-if="taskCount" class="task-count-title">You have {{ taskCount }} undone tasks.</h1>
    <h1 v-else class="task-count-title">Add your first task ;3</h1>
  </div>
</template>

<script>

export default {
  name: 'TaskCountView',
  props: {
    taskCount: {
      type: Number,
      default: 0
    },
  },
}

</script>

<style scoped>

.task-count-block {
  color: #4b4b4b;
}

.task-count-title {
  font-size: 18px;
}

</style>

