/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import vue from 'vue';

window.Vue = vue;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('query-message', require('./components/base/QueryMessage.vue').default);
Vue.component('create-animal', require('./components/animal/CreateAnimal.vue').default);
Vue.component('edit-animal', require('./components/animal/EditAnimal.vue').default);
Vue.component('index-animal', require('./components/animal/IndexAnimal.vue').default);
Vue.component('search-animal', require('./components/animal/SearchAnimal.vue').default);
Vue.component('show-animal', require('./components/animal/ShowAnimal.vue').default);
Vue.component('create-species', require('./components/species/CreateSpecies.vue').default);
Vue.component('edit-species', require('./components/species/EditSpecies.vue').default);
Vue.component('index-species', require('./components/species/IndexSpecies.vue').default);
Vue.component('show-species', require('./components/species/ShowSpecies.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
