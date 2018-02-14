<template>
  <b-container class="remove-buttons-wrapper">
    <b-row class="justify-content-end">
      <b-button-group>
        <b-button variant="danger" @click="removeAll">Remove all tasks</b-button>
        <b-button @click="removeChecked">Remove checked tasks</b-button>
      </b-button-group>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'RemoveTaskVue',
  methods: {
    removeAll() {
      this.$store.dispatch('tasks/removeAll');
    },
    removeChecked() {
      this.$store.dispatch('tasks/removeChecked');
    }
  }
};
</script>

<style type="postcss" scoped>

.remove-buttons-wrapper {
  margin-top: 20px;
}
</style>
