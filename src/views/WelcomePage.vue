<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToTodos() {
  router.push("/todos");
}
</script>

<template>
  <div class="welcome">
    <h1>Hoş Geldiniz 👋</h1>
    <p>Devam etmek için butona basın.</p>
    <button @click="goToTodos">Başla</button>
  </div>
</template>
