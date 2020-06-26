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
                                        <h1 class="card-header-title" v-text="specie.name"></h1>
                                    </strong>
                                </header>
                            </div>
                            <br/>
                            <div class="media-content">
                                <strong>
                                    <div>Description</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="specie.description"></div>
                                </small>
                            </div>
                            <br/>
                            <div class="media-content">
                                <strong>
                                    <div>Created</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="moment(specie.created_at).fromNow()"></div>
                                </small>
                            </div>
                            <br/>
                            <div class="media-content">
                                <strong>
                                    <div>Last Update</div>
                                </strong>
                                <small>
                                    <div class="content" v-text="moment(specie.updated_at).fromNow()"></div>
                                </small>
                            </div>
                            <br/>
                            <div>
                                <button class="button is-primary" @click="editSpecies()">Edit</button>
                                <button class="button is-primary" @click="deleteSpecies()">Delete</button>
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
        props: ['title'],
        mounted() {
            console.log('ShowSpecies mounted.')
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
            editSpecies(){
                window.location.href = '/species/' + this.specie.slug + '/edit';
            },

            deleteSpecies(){
                if (confirm("Are you sure you want to delete this species?\nIt cannot be restored")) {
                    axios.delete('/species/' + this.specie.slug).then(response => {
                        console.log(response);
                        window.location.href = '/species';
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        },

        created() {
            let url  =  window.location.pathname.split('/');
            let specie = url[2];

            axios.get('/list/species').then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    if (specie == response.data[i].slug){
                        console.log(response)
                        this.specie = response.data[i];
                    }
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>
<style scoped></style>
