<template>
  <main>
    <HeaderComponents />
    <section class="container" id="main-content">
      <NavigationComponent />
      <MainComponent />
    </section>
    <section class="container" id="main-content-bottom">
      <MainComponentBottom />
    </section>
  </main>
</template>

<script>
import HeaderComponents from './components/HeaderComponents.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import MainComponent from './components/MainComponent.vue';
import MainComponentBottom from './components/MainComponentBottom.vue'

export default {
  name: 'App',
  components: {
    HeaderComponents,
    NavigationComponent,
    MainComponent,
    MainComponentBottom
  }
}
</script>

<style lang="scss" scoped>
body {
  box-sizing: border-box;
}

main {
  height: 100vh;
  width: 100vw;
  background-color: #465ABB;
  /* Base color */
  background-image: linear-gradient(to bottom, transparent 0%, #00BCD4 100%);
}

#main-content {
  /* Use percentages for width and margin */
  width: 70%;
  /* Adjust as needed */
  margin: 2% auto;
  /* 10% margin on all sides, centered horizontally */
  background-color: #0E1630;
  background-image: linear-gradient(to bottom, transparent 0%, #465ABB 100%);
}

.debug {
  border: 2px solid red;
}
</style>