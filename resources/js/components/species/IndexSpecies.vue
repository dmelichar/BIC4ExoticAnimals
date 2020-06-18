<template>
    <div class="container">
        <header class="card-header">
            <h1 class="card-header-title">
                Species
            </h1>
        </header>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Slug</th>
                <th>Name</th>
                <th>Description</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="specie in species" :key="specie.id">
                <td>{{specie.id}}</td>
                <td>{{specie.slug}}</td>
                <td>{{specie.name}}</td>
                <td>{{specie.description}}</td>
                <td>{{specie.created_at}}</td>
                <td>{{specie.updated_at}}</td>
                <td>
                    <button class="button is-primary" @click="showSpecies(specie)">Show</button>
                </td>
                <td>
                    <button class="button is-primary" @click="editSpecies(specie)">Edit</button>
                </td>
            </tr>
            </tbody>
        </table>
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
                species: [],
                specie: {
                    id: '',
                    slug: '',
                    name: '',
                    description: '',
                    created_at: '',
                    updated_at: ''
                },
            }
        },
        methods : {
            showSpecies(specie){
                window.location.href = '/species/' + specie.slug;
            },

            editSpecies(specie){
                window.location.href = '/species/' + specie.slug + '/edit';
            }
        },
        created() {
            axios.get('/list/species').then((response) => {
                console.log(response)
                this.species = response.data;
            }).catch(error => {
                console.log(error)
            });
        },
    }
</script>
<style scoped></style>
