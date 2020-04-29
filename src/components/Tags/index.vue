<template>
    <div class="tags">
        <h3 class="tags__title">Etiquetas</h3>
        <Create placeholder="Añadir etiqueta"/>
        <List />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Create from "./Create.vue";
import List from "./List.vue";

@Component({
  components: {
    Create,
    List
  }
})
export default class Tags extends Vue {}

</script>

<style scoped lang="scss">
    .tags{
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        box-shadow: 0px 2px 1px 1px rgb(228, 228, 228);
        border-top: 1px solid rgb(228, 228, 228);
        border-radius: 2px;

        &__title{
            width: 100%;
            text-align: left;
            padding: 10px 30px;
            border-bottom: 1px solid rgb(228, 228, 228);
            font-weight: normal;
        }
    }
</style>