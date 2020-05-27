<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        {{ title }}
                    </h1>
                </header>
                <div class="card-content">
                    <form @submit.prevent="submit">
                        <input class="input" type="text" v-model="message" placeholder="Enter animal ...">
                        <button class="button is-primary" type="submit">Create</button>
                    </form>
                    <div class="content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let form = new Form({

        }
    )

    export default {
        props: ['title'],

        data() {
            return {
                message: []
            }
        },

        mounted() {
            console.log('CreateAnimal mounted.')
        },

        methods: {
            submit() {
                this.form.put(this.url)
            }
        }
    }
</script>
