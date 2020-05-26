<template>
    <div class="container">
        <div v-for="x in species" :key="x.id" class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4" v-text="x.name"/>
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
            console.log('IndexSpecies mounted.')
        },
        data() {
            return {
                species: []
            }
        },
        created() {
            axios.get('/list/species').then((response) => {
                this.species = response.data;
            });
        }
    }
</script>
