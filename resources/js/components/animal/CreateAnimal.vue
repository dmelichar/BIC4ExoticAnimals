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
                            <input type="text" name="name" id="name" required="" v-model="name">
                        </div>
                        <div>
                            <input type="submit" value="Send Form">
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
    export default {
        data: function() {
            return {
                name: "Animal",

            };
        },
        methods: {
            // submit form handler
            submit: function() {
                this.submitted = true;

            },


        },
    }
</script>
