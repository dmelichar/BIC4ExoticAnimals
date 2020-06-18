<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        Search for Animals
                    </h1>
                </header>
                <div class="card-content">
                    <div class="media-content">
                        <label class="label">Type information of the animal:</label>
                        <div class="content">
                            <input class="input" type="text" placeholder="e.g. ankunding-stanton" v-model="userInput">
                        </div>
                    </div>
                </div>
                <div v-if="userInput">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Species ID</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="animal in animals">
                            <td>{{animal.id}}</td>
                            <td>{{animal.name}}</td>
                            <td>{{animal.description}}</td>
                            <td>{{animal.description}}</td>
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
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['title'],
        mounted() {
            console.log('SearchAnimal mounted.')
        },

        data() {
          return {
              animals: [],
              animal: {
                  id: '',
                  slug: '',
                  name: '',
                  description: '',
                  species_id: '',
                  created_at: '',
                  updated_at: ''
              },
              userInput: null
          }
        },

        watch: {
            userInput: function () {
                this.search();
            }
        },

        methods: {
            search(){
                axios.post('/search/animal?q='+this.userInput).then(response => {
                    console.log(response);
                    this.animals = response.data
                }).catch(error => {
                    console.log(error);
                })
            },

            showAnimal(animal){
                window.location.href = '/animal/' + animal.slug;
            },

            editAnimal(animal){
                window.location.href = '/animal/' + animal.slug + '/edit';
            }
        }
    }
</script>
