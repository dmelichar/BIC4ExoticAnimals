<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        Edit species
                    </h1>
                </header>
                <div class="card-content">
                    <form class="vue-form" @submit.prevent="submit">
                        <div class="field">
                            <label class="label" for="name">Name</label>
                            <div class="control">
                                <input type="text" class="input" name="name" id="name" required="" v-model="form.name">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label" for="description">Description</label>
                            <div class="control">
                                <textarea class="textarea" name="description" id="description" required="" v-model="form.description"></textarea>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <input type="submit" class="button is-primary" value="Update">
                        </div>
                    </form>
                    <br/>
                    <div>
                        <button class="button is-primary" @click="deleteSpecies()">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let form = new Form({
        'name': '',
        'description': '',
        'noReset': ['species_id']
    });

    export default {

        methods: {
            // submit form handler
            submit() {
                this.form.put('/species/' + this.specie.slug).then((response) => {
                    alert("Successfully updated species")
                }).catch(error => {
                    console.log(error),
                        alert("ERROR:\nSpecies name already exists")
                });
            },

            deleteSpecies() {
                if (confirm("Are you sure you want to delete this species?\nIt cannot be restored")) {
                    axios.delete('/species/' + this.specie.slug).then(response => {
                        window.location.href = '/species';
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        },

        data() {
            return {
                form: form,
                species: [],
                specie: {
                    slug: '',
                },
            }
        },

        created() {
            let url = window.location.pathname.split('/');
            let specie = url[2];

            axios.get('/list/species').then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    if (specie == response.data[i].slug) {
                        this.specie.slug = response.data[i].slug;
                        this.form.name = response.data[i].name;
                        this.form.description = response.data[i].description;
                        this.form.noReset = ['name', 'description',];
                    }
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>
<style scoped></style>
