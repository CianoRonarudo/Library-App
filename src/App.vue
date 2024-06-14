<template>
  <div>
    <header class="pb-4">
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink to="/library">Library</RouterLink>
    </header>
    <main class="">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup>
  import { RouterView, RouterLink } from "vue-router";
  import HomePage from "./pages/HomePage.vue"
</script>