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
                <th>Name</th>
                <th>Description</th>
                <th>Created</th>
                <th>Last Update</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="specie in species" :key="specie.id">
                <td>{{specie.name}}</td>
                <td>{{specie.description}}</td>
                <td>{{moment(specie.created_at).fromNow()}}</td>
                <td>{{moment(specie.updated_at).fromNow()}}</td>
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
    import moment from 'moment'

    export default {
        props: ['title'],
        mounted() {
            console.log('IndexSpecies mounted.')
        },
        data() {
            return {
                species: [],
                specie: {
                    name: '',
                    description: '',
                    created_at: '',
                    updated_at: ''
                },
            }
        },
        methods : {
            moment,
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
