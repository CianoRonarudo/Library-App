<template>
    <div>
        Library
    </div>
</template>

<script setup>
import axios from 'axios';
axios.get('http://127.0.0.1:8000/library/books/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

</script>

<style scoped>


</style>