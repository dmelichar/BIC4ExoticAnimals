<template>
    <div class="container">
        <div v-for="animal in animals" :key="animal.id" class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <div class="box">
                    <header class="card-header">
                        <strong>
                            <h1 class="card-header-title" v-text="animal.name"></h1>
                        </strong>
                    </header>
                    <div class="media-content">
                        <small>
                            <div class="content" v-text="animal.description"></div>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title'],
        mounted() {
            console.log('IndexAnimal mounted.')
        },
        data() {
            return {
                animals: []
            }
        },
        created() {
            axios.get('/list/animal').then((response) => {
                this.animals = response.data;
            });
        }
    }
</script>
