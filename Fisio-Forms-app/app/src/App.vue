<template>
  <v-app>
    <v-main>
      <v-container fluid class="main-container">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
