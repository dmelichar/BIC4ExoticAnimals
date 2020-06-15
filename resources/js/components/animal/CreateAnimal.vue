<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        {{ title }}
                    </h1>
                </header>
                <div class="card-content">
                    <form class="vue-form" @submit.prevent="submit">
                        <div>
                            <label class="label" for="name">Name</label>
                            <input type="text" class="input" name="name" id="name" required="" v-model="form.name">

                            <label class="label" for="description">description</label>
                            <input type="text" class="input" name="description" id="description" required="" v-model="form.description">

                            <label class="label" for="species_id">Name</label>
                            <input type="text" class="input" name="species_id" id="species_id" required="" v-model="form.species_id">
                        </div>
                        <div>
                            <input type="submit" class="button is-primary" value="Send Form">
                        </div>
                    </form>
                    <div class="debug">
                        <pre><code>{{ $data }}</code></pre>
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
        'species_id': '',
        'noReset': ['animal_id']
    });

    export default {
        name: "CreateAnimalComponent",
        components: {
            QueryMessage
        },

        data: function() {
            return {
                form: form,
                url: ''
            };
        },
        methods: {
            // submit form handler
            submit() {
                this.form
                    .post(this.url)
                    .then((response) => {
                        this.url = '/animal/' + response.slug;
                        this.form.name = response.name;
                        this.form.description = response.description;
                        this.form.species_id = response.species_id;
                        this.form.noReset = ['name', 'description', 'species_id'];
                    });
            },

            created() {
                this.url = '/animal';
            }

        },
    }
</script>
