<template>
    <li class="item">
        <span class="item__color" :style="setDotColor"></span>
        <template v-if="mode === 'show'">
            <p class="item__title">{{ data.title }}</p>
            <Actions
                :actions-labels="['Editar', 'Borrar']"
                @on-first="changeMode('edit')"
                @on-second="changeMode('delete')"
            />
        </template>
        <template v-if="mode === 'edit'">
            <input type="text" v-model="newTitle">
            <Actions
                :actions-labels="['Guardar', 'Cancelar']"
                @on-first="updateTag"
                @on-second="changeMode('show')"
            />
        </template>
        <template v-if="mode === 'delete'">
            <p class="item__title">⚠️ ¿Quieres eliminar la etiqueta <strong>{{ data.title }}</strong>?</p>
            <Actions
                :actions-labels="['¡Si, seguro!', 'Cancelar']"
                @on-first="deleteTag"
                @on-second="changeMode('show')"
            />
        </template>
    </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import Actions from "./Actions.vue";

@Component({
    components: {
        Actions
    }
})
export default class Item extends Vue {
    @Prop() private data: any;

    mode =  "show";
    title?: string;

    get newTitle(): string {
        return this.data.title;
    }

    set newTitle(newValue: string) {
        this.title = newValue;
    }

    get setDotColor() {
        return { backgroundColor: this.data.color }
    }

    @Action("UPDATE_TAG") actionUpdateTag: any;
    @Action("DELETE_TAG") actionDeleteTag: any;

    changeMode(newMode: string) {
        this.mode = newMode;
    }

    updateTag() {
        this.actionUpdateTag({
            id: this.data._id,
            title: this.title
        });
        this.changeMode("show");
    }

    deleteTag() {
        this.actionDeleteTag(this.data._id);
    }
}
</script>

<style scoped lang="scss">
    .item{
        display: grid;
        grid-template-columns: auto auto 1fr;
        align-items: center;
        grid-gap: 10px;
        padding: 15px 20px;

        &__color {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: #EEE;
        }

        input {
            padding: 5px;
            border-radius: 4px;
            outline: none;
            border: 1px solid #EEE;
            font-size: 14px;
        }

        &:hover {
            background-color: rgb(244, 247, 253);
        }
    }
</style>