<template>
    <div class="container">
        <header class="card-header">
            <h1 class="card-header-title">
                Animals
            </h1>
        </header>
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Species</th>
                <th>Created</th>
                <th>Last Update</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="animal in animals" :key="animal.id">
                <td>{{animal.name}}</td>
                <td>{{animal.description}}</td>
                <td v-for="specie in species" v-if="specie.id == animal.species_id"><a @click="showSpecies(specie)">{{specie.name}}</a></td>
                <td>{{moment(animal.created_at).fromNow()}}</td>
                <td>{{moment(animal.updated_at).fromNow()}}</td>
                <td>
                    <button class="button is-primary" @click="showAnimal(animal)">Show</button>
                </td>
                <td>
                    <button class="button is-primary" @click="editAnimal(animal)">Edit</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {

        data() {
            return {
                animals: [],
                animal: {
                    name: '',
                    description: '',
                    species_id: '',
                    created_at: '',
                    updated_at: ''
                },
                species: []
            }
        },

        methods : {
            moment,
            showAnimal(animal){
                window.location.href = '/animal/' + animal.slug;
            },
            editAnimal(animal){
                window.location.href = '/animal/' + animal.slug + '/edit';
            },
            showSpecies(specie){
                window.location.href = '/species/' + specie.slug;
            }
        },

        created() {
            axios.get('/list/animal').then((response) => {
                this.animals = response.data;
            }).catch(error => {
                console.log(error)
            });

            axios.get('/list/species').then((response) => {
                this.species = response.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>
<style scoped></style>
