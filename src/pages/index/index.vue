<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">myIndex</router-link> |
      <router-link to="/myInfo">myInfo</router-link>
    </div>
    <router-view />
  </div>
</template>
 
<script>
 
export default {
  name: 'app',
  data() {
    return {
      
    }
  },
}
</script>
 
<style>
</style>