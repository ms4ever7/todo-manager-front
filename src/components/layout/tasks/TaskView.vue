<template>
  <section v-if="tasks.length" :style="{ marginTop: '20px' }">
    <b-list-group>
      <b-list-group-item v-for="({ description, done }, index) in tasks"
                          :key="index" 
                          class="task-block"
                          :class="{ active: done }">
        <b-container>
          <b-row>
            <b-col cols="9">
              {{ description }}
            </b-col>
            <b-col cols="3">
              <div>
                <b-button-group>
                  <b-button size="sm" @click="checkTask(index)">Check task</b-button>
                  <b-button size="sm" variant="danger" @click="removeTask(index)">Remove task</b-button>
                </b-button-group>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-list-group-item>
    </b-list-group>
  </section>
</template>
<script>

export default {
  name: 'TaskView',
  props: {
    tasks: {
      type: Array,
    },
  },
  methods: {
    removeTask(taskIndex) {
      this.$store.dispatch('tasks/removeOne', taskIndex);
    },
    checkTask(taskIndex) {
      this.$store.dispatch('tasks/checkTask', taskIndex)
    }
  }
};

</script>

<style type="postcss" scoped>

.task-block.active {
  background-color: rgba(60, 6, 122, 0.35);
  border: none;
}

</style>

