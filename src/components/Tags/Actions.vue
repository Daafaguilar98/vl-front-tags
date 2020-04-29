<template>
  <div class="actions">
      <button @click="onFirst">{{ actionsLabels[0] }}</button>
      <button @click="onSecond">{{ actionsLabels[1] }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component
export default class Actions extends Vue {
    
    @Prop() private "actions-labels": string[];

    @Emit()
    onFirst() { return null; }

    @Emit()
    onSecond() { return null; }
    
}
</script>

<style scoped lang="scss">
    .actions {
        justify-self: end;
        display: grid;
        align-content: center;
        grid-auto-flow: column;
        grid-gap: 10px;

        button {
            cursor: pointer;
            border-style: none;
            background-color: transparent;
            outline: none;
            font-size: 13px;
            color: gray;

            &:hover {
                color: initial;
            }

            &:active {
                color: #4082db;
            }
        }
    }
</style>