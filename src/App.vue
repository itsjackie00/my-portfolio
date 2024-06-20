
<template>
 <header>
  <NavigationComponent/>
 </header>
</template>

<script>
  import NavigationComponent from './components/NavigationComponent.vue'
  export default {
    name: 'App',
    components: {
      NavigationComponent
    }
  }
</script>

<style lang="scss" scoped>
header{
height: 100vh;
width: 100vw;
background-color: #211036;
}
.debug{
  border: 2px solid red;
}
</style>