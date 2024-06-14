<template>
    <div>
        <h1 class="pb-5">Welcome to our library</h1>
        <div>
            <form @submit.prevent="fileSubmitted" class="pl-3">
                <label for="name" class="block">Name</label>
                <input type="text" class="border border-2 block" v-model="bookName">
                <label for="book" class="block">Upload your book</label>
                <input type="file" class="block">
                <input type="submit" value="Upload" class="block mt-2 text-white bg-slate-500 shadow-md px-4 rounded-md py-1">
            </form>
        </div>
    </div>
</template>

<script setup>
    import axios from 'axios';
  import { ref } from 'vue';

  const bookName = ref('');

  const fileSubmitted = (e) => {
    console.log(bookName.value);
    console.log(e.target[1].files[0]);

    const formData = new FormData();
    formData.append('name', bookName.value);
    formData.append('file', e.target[1].files[0]);

    axios.post('http://127.0.0.1:8000/library/books/', formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

</script>

<style scoped>

    

</style>