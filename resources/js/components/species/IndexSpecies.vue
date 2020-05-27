<template>
    <div class="container">
        <div v-for="x in species" :key="x.id" class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <div class="box">
                    <header class="card-header">
                        <strong>
                            <h1 class="card-header-title" v-text="x.name"></h1>
                        </strong>
                    </header>
                    <div class="media-content">
                        <small>
                            <div class="content" v-text="x.description"></div>
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
