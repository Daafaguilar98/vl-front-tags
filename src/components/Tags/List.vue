<template>
  <ul v-if="tags">
      <Item
        v-for="tag in tags"
        :key="tag._id"
        :data="tag"
        />
  </ul>
  <div v-else>
      <p>No tienes <strong>etiquetas</strong> creadas</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import Item from "./Item.vue";

@Component({
    components: {
        Item
    },
    computed: {
        ...mapState(["tags"])
    }
})
export default class List extends Vue{

}
</script>

<style>

</style>