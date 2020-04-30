<template>
    <div class="create">
        <div class="create__input--wrapper">
            <input
                class="create__input"
                type="text"
                :placeholder="placeholder"
                v-on:keyup.enter="createTag"
                v-model="title">
            <button class="create__action" @click="createTag">Guardar</button>
        </div>
        <span class="create__error">{{ errors[0] }}</span>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import { State, Action } from "vuex-class";

@Component
export default class Create extends Vue {
    @Prop() private placeholder?: string;

    title?: string = "";
    errors: string[] = [];
    
    @State availableColors: any;

    @Action("CREATE_TAG") actionCreateTag: any;
    @Action("GET_TAGS") actionGetTags: any;

    mounted() {
        this.actionGetTags();
    }

    public randomColor(): string {
        return this.availableColors[Math.floor(Math.random() * this.availableColors.length)]
    }

    public handleError(msg: string): void {
        this.errors = [msg, ...this.errors];
        setTimeout(() => {
            this.errors.pop();
        }, 3000)
    }

    public createTag(): void {
        if (this.title) {
            this.actionCreateTag({
                title: this.title,
                color: this.randomColor()
            })
            this.title = "";
        } else {
            this.handleError("El campo no puede estar vacío");
        }
    }
}
</script>

<style scoped lang="scss">
    .create {
        width: 100%;
        margin: 15px  0;

        &__input {
            width: 100%;
            border-style: none;
            font-size: 20px;
            padding: 15px 20px;
            outline: none;
            border-radius: 4px;

            &--wrapper {
                width: 100%;
                position: relative;
                display: flex;
                align-items: center;
            }

            &:focus {
                background-color: rgb(248, 250, 255);
            }
        }

        &__action {
            opacity: 0;
            position: absolute;
            right: 15px;
            padding: 10px;
            border-radius: 5px;
            outline: none;
            cursor: pointer;
            border: 1px solid #EEE;
            margin-top: 40px;
            transition: all .3s;
        }

        &__input:focus + &__action,
        &__action:hover {
            opacity: 1;
            margin-top: 0px !important;
        }

        &__error {
            margin-left: 15px;
            color: rgb(194, 7, 7);
            font-size: 14px;
            font-weight: 600;
        }
    }
</style>