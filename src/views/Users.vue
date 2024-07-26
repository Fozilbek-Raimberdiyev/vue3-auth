<template>
  <div>users page</div>
  <pre>
    {{ users }}
  </pre>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useGet } from "../api/index";

const users = ref<any>(null);
async function getUsers() {
  try {
    const res = await useGet("/api/users");
    users.value = res.data;
  } catch (e) {
    console.log(e);
  }
}
onMounted(() => {
  getUsers();
});
</script>

<style scoped></style>
