<template>
  <div>
    <table>
      <tr>
        <th>Id</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user._id }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  </div>
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

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 5px;
}

th,
td {
  text-align: left;
  padding: 8px;
  border: 1px solid #000;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr {
  border-radius: 5px;
}
 

</style>
