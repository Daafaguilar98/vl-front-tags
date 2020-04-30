<template>
  <div id="app" class="app">
    <img alt="Valiu logo" src="./assets/valiu-logo.png" class="app__logo"/>
    <Tags msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tags from "@/components/Tags/index.vue";

@Component({
  components: {
    Tags
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 15px;

  &__logo {
    width: 100px;
    margin-bottom: 40px;
  }
}
ul {
  list-style: none;
  padding-inline-start: 0;
}
.error_msg{
  margin-left: 15px;
  color: rgb(194, 7, 7);
  font-size: 14px;
  font-weight: 600;
}
</style>
