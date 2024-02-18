<template>
  <div id="app">
    <router-link to="/register">Registrate</router-link>
    <router-link to="/users">Ver usuarios</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>


<style>
body {
  background: rgb(206,145,255);
  background: linear-gradient(90deg, rgba(206,145,255,1) 0%, rgba(180,166,245,1) 3%, rgba(250,181,252,1) 35%, rgba(0,212,255,1) 100%);
  color:black
}
</style>
