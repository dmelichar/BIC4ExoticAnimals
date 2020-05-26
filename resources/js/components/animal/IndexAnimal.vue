<template>
    <div class="container">
        <div v-for="animal in animals" :key="animal.id" class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4" v-text="animal.name"/>
                        </div>
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
