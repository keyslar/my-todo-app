<template>
  <div class="todo">
    <h1>Görevlerim</h1>

    <input
      v-model="newTodo"
      placeholder="Bir şey yaz..."
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">Ekle</button>

    <ul>
      <li v-for="(todo, index) in taskStore.tasks" :key="index">
        {{ todo }}
        <input type="checkbox" @change="completeTodo(index)" />
      </li>
    </ul>

    <router-link to="/completed">Tamamlanan Görevler</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/taskStore";

const taskStore = useTaskStore();
const newTodo = ref("");

function addTodo() {
  if (newTodo.value.trim() !== "") {
    taskStore.addTask(newTodo.value.trim());
    newTodo.value = "";
  }
}

function completeTodo(index) {
  taskStore.completeTask(index);
}
</script>

<style scoped>
.todo {
  padding: 20px;
}

h1 {
  margin-bottom: 15px;
}

input[type="text"] {
  padding: 5px;
  margin-right: 5px;
  width: 200px;
}

button {
  padding: 5px 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
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
  color: rgb(195, 0, 255);
  text-decoration: underline;
  cursor: pointer;
}
</style>
