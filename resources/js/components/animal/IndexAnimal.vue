<template>
    <div class="container">
        <header class="card-header">
            <h1 class="card-header-title">
                {{ title }}
            </h1>
        </header>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Slug</th>
                <th>Name</th>
                <th>Description</th>
                <th>Species ID</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="animal in animals" :key="animal.id">
                <td>{{animal.id}}</td>
                <td>{{animal.slug}}</td>
                <td>{{animal.name}}</td>
                <td>{{animal.description}}</td>
                <td>{{animal.species_id}}</td>
                <td>{{animal.created_at}}</td>
                <td>{{animal.updated_at}}</td>
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
    export default {
        props: ['title'],
        mounted() {
            console.log('IndexAnimal mounted.')
        },
        data() {
            return {
                animals: [],
                animal: {
                    id: '',
                    name: '',
                    slug: '',
                    species: '',
                    description: '',
                    species_id: '',
                    created_at: '',
                    updated_at: ''
                },
                animal_id: ''
            }
        },
        methods : {
            showAnimal(animal){
                window.location.href = '/animal/' + animal.slug;
            },

            editAnimal(animal){
                window.location.href = '/animal/' + animal.slug + '/edit';
            }
        },
        created() {
            axios.get('/list/animal').then((response) => {
                console.log(response)
                this.animals = response.data;
            }).catch(error => {
                console.log(error)
            });
        },
    }
</script>
