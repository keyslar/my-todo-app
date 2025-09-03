<template>
  <div>
    <h2>Tamamlanan Görevler</h2>
    <ul>
      <li v-for="(task, index) in taskStore.completedTasks" :key="index">
        {{ task }}
        <input type="checkbox" checked @change="taskStore.undoTask(index)" />
      </li>
    </ul>
    <router-link to="/todos">Görevlerime Dön</router-link>
  </div>
</template>

<script setup>
import { useTaskStore } from "../stores/taskStore";

const taskStore = useTaskStore();
</script>

<style scoped>
div {
  padding: 20px;
}

h2 {
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

input[type="checkbox"] {
  margin-left: 10px;
}

router-link {
  display: inline-block;
  margin-top: 20px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
