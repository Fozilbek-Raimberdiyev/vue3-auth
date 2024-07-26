<script setup lang="ts">
import { reactive } from "vue";
import { usePost } from "../api/index";
const form = reactive({ username: "", email: "", password: "" });
async function signUp() {
  try {
    const response = await usePost("/api/auth/signup", form);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <div class="font-sans antialiased bg-grey-lightest">
    <!-- Top Nav -->
    <div class="w-full bg-green fixed shadow z-1">
      <div class="container mx-auto">
        <div class="w-full flex justify-between items-center py-4 px-8">
          <!-- Brand -->
          <router-link to="/" class="text-center text-black font-bold"
            >Your Company</router-link
          >
          <!-- Navigation -->
          <div class="items-center hidden sm:flex">
            <a
              href="#"
              class="text-black hover:text-green-lightest no-underline mx-2 px-2 py-2"
              >Link 1</a
            >
            <a
              href="#"
              class="text-black hover:text-green-lightest no-underline mx-2 px-2 py-2"
              >Link 2</a
            >
            <a
              href="#"
              class="bg-green-dark hover:bg-green-darker rounded-full text-black no-underline mx-2 px-4 py-2"
              >Link 3</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="w-full bg-grey-lightest" style="padding-top: 4rem">
      <div class="container mx-auto py-8">
        <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div
            class="py-4 px-8 text-black text-xl border-b border-grey-lighter"
          >
            Register for a free account
          </div>
          <div class="py-4 px-8">
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="email"
                >Username</label
              >
              <input
                v-model="form.username"
                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="text"
                type="text"
                placeholder="Your username"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="email"
                >Email Address</label
              >
              <input
                v-model="form.email"
                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="Your email address"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="password"
                >Password</label
              >
              <input
                v-model="form.password"
                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="password"
                type="password"
                placeholder="Your secure password"
              />
              <p class="text-grey text-xs mt-1">At least 6 characters</p>
            </div>
            <div class="flex items-center justify-between mt-8">
              <button
                @click="signUp"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <p class="text-center my-4">
          <router-link
            to="/auth/login"
            class="text-grey-dark text-sm no-underline hover:text-grey-darker"
            >I already have an account</router-link
          >
        </p>
      </div>
    </div>
    <!-- Footer -->
    <footer class="w-full bg-grey-lighter py-8">
      <div class="container mx-auto text-center px-8">
        <p class="text-grey-dark mb-2 text-sm">
          This is a product of <span class="font-bold">Your Company</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
