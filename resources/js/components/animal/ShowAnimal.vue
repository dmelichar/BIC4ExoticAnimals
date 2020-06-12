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
                            <div class="media-content">
                                <strong>
                                    <div>ID</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="animal.id"></div>
                                </small>
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
                                    <div>Species ID</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="animal.species_id"></div>
                                </small>
                            </div>
                            <br/>
                            <div class="media-content">
                                <strong>
                                    <div>Created at</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="animal.created_at"></div>
                                </small>
                            </div>
                            <br/>
                            <div class="media-content">
                                <strong>
                                    <div>Last updated at</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="animal.updated_at"></div>
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
    export default {
        props: ['title'],
        mounted() {
            console.log('ShowAnimal mounted.')
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
            }
        },

        methods : {
            editAnimal(){
                window.location.href = '/animal/' + this.animal.slug + '/edit';
            },

            deleteAnimal(){
                if (confirm("Do you really want to delete this animal?")) {
                    axios.delete('/animal/' + this.animal.slug).then(response => {
                            console.log(response);
                            window.location.href = '/animal';
                        }).catch(error => {
                            console.log(error)
                        });
                }
            }
        },

        created() {
            let url  =  window.location.pathname.split('/');
            let animal = url[2];

            axios.get('/list/animal').then(response => {
                    for (let i = 0; i < response.data.length; i++) {
                        if (animal == response.data[i].slug){
                            console.log(response)
                            this.animal = response.data[i];
                        }
                    }
                }).catch(error => {
                    console.log(error)
                });
        }
    }
</script>
