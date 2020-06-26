<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <div class="card-content">
                    <div class="content">
                        <div>
                            <div class="box">
                                <header class="card-header">
                                    <strong>
                                        <h1 class="card-header-title" v-text="animal.name"></h1>
                                    </strong>
                                </header>
                            </div>
                            <br/>
                            <div class="media-content">
                                <strong>
                                    <div>Description</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="animal.description"></div>
                                </small>
                            </div>
                            <br/>
                            <div class="media-content">
                                <strong>
                                    <div>Species</div>
                                </strong>
                                <small>
                                    <div class="content" v-for="specie in species" v-if="specie.id == animal.species_id"><a @click="showSpecies(specie)">{{specie.name}}</a></div>
                                </small>
                            </div>
                            <br/>
                            <div class="media-content">
                                <strong>
                                    <div>Created</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="moment(animal.created_at).fromNow()"></div>
                                </small>
                            </div>
                            <br/>
                            <div class="media-content">
                                <strong>
                                    <div>Last Update</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="moment(animal.updated_at).fromNow()"></div>
                                </small>
                            </div>
                            <br/>
                            <div>
                                <button class="button is-primary" @click="editAnimal()">Edit</button>
                                <button class="button is-primary" @click="deleteAnimal()">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                species:[]
            }
        },

        methods : {
            moment,

            editAnimal(){
                window.location.href = '/animal/' + this.animal.slug + '/edit';
            },

            deleteAnimal(){
                if (confirm("Are you sure you want to delete this animal?\nIt cannot be restored")) {
                    axios.delete('/animal/' + this.animal.slug).then(response => {
                            window.location.href = '/animal';
                        }).catch(error => {
                            console.log(error)
                        });
                }
            },

            showSpecies(specie){
                window.location.href = '/species/' + specie.slug;
            }
        },

        created() {
            let url  =  window.location.pathname.split('/');
            let animal = url[2];

            axios.get('/list/animal').then(response => {
                    for (let i = 0; i < response.data.length; i++) {
                        if (animal == response.data[i].slug){
                            this.animal = response.data[i];
                        }
                    }
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
