<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        Create new Species
                    </h1>
                </header>
                <div class="card-content">
                    <form class="vue-form" @submit.prevent="submit">
                        <div>
                            <label class="label" for="name">Name</label>
                            <input type="text" class="input" name="name" id="name" required="" v-model="form.name">

                            <label class="label" for="description">Description</label>
                            <input type="text" class="input" name="description" id="description" required="" v-model="form.description">
                        </div>
                        <br/>
                        <div>
                            <input type="submit" class="button is-primary" value="Create Species">
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
    });

    export default {
        props: ['title'],
        mounted() {
            console.log('CreateSpecies mounted.')
        },

        name: "CreateSpeciesComponent",
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

                axios.post('/species', {
                    name,
                    description,
                }).then((response) => {
                    console.log(response);
                    this.form.name = '';
                    this.form.description = '';
                    alert("Successfully created species.")
                }).catch(error => {
                    console.log(error),
                        alert("ERROR:\nSpecies name already exists.\nPlease try again!")
                });
            }
        }
    }
</script>
