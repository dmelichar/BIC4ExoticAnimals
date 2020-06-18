<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        Create new Animal
                    </h1>
                </header>
                <div class="card-content">
                    <form class="vue-form" @submit.prevent="submit">
                        <div>
                            <label class="label" for="name">Name</label>
                            <input type="text" class="input" name="name" id="name" required="" v-model="form.name">

                            <label class="label" for="description">Description</label>
                            <input type="text" class="input" name="description" id="description" required="" v-model="form.description">

                            <label class="label" for="species_id">Species ID</label>
                            <input type="text" class="input" name="species_id" id="species_id" required="" v-model="form.species_id">
                        </div>
                        <br/>
                        <div>
                            <input type="submit" class="button is-primary" value="Create Animal">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let form = new Form({
        'name': '',
        'description': '',
        'species_id': '',
    });

    export default {
        props: ['title'],
        mounted() {
            console.log('CreateAnimal mounted.')
        },

        name: "CreateAnimalComponent",
        components: {
            QueryMessage
        },

        data: function () {
            return {
                form: form,
            };
        },
        //TODO: Assign correct ID and delete from DB if error
        methods: {
            // submit form handler
            submit() {
                let name = this.form.name;
                let description = this.form.description;
                let species_id = this.form.species_id;

                axios.post('/animal', {
                    name,
                    description,
                    species_id
                }).then((response) => {
                    console.log(response);
                    this.form.name = '';
                    this.form.description = '';
                    this.form.species_id = '';
                    alert("Successfully created animal.")
                }).catch(error => {
                    console.log(error),
                        alert("ERROR:\nAnimal name already exists or species ID not valid.\nPlease try again!")
                });
            }
        }
    }
</script>
