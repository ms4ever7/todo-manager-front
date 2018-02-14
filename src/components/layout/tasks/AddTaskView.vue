<template>
  <b-input-group>
    <b-form-input v-model="taskDescription"
                  @keyup.enter="addTask" 
                  placeholder="For example, play with your cat"
                  aria-describedby="inputLiveFeedback">
    </b-form-input>
    <b-input-group-append>
      <b-btn variant="success" class="add-task-button" @click="addTask">Add task</b-btn>
    </b-input-group-append>
  </b-input-group>
</template>

<script>

export default {
  name: 'AddTaskView',
  data() {
    return {
      taskDescription: ''
    }
  },
  methods: {
    addTask() {
      this.$store.dispatch('tasks/add', this.taskDescription);
      this.taskDescription = "";
    },
  }
}

</script>

<style scoped>

.add-task-button {
  background-color: #673AB7;
}

</style>
