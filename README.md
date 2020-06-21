# BIC4 Project: Exotic animals

- Florian Dienesch  (ic18b509@technikum-wien.at)
- Marco Judt        (ic18b039@technikum-wien.at)
- Daniel Melichar   (ic18b503@technikum-wien.at)

This software lists exotic animals and species belongs to them.
It is possible to search for animals by various parameters.

![Demo](./demo.gif)

## API Routes

 * **GET** ```/animal``` &rarr; Lists all animals
 * **GET** ```/list/animal``` &rarr; Returns JSON of all animals
 * **GET** ```/list/species``` &rarr; Returns JSON of all species
 * **POST** ```/animal``` &rarr; Stores new animals
 * **GET** ```/animal/{slug}``` &rarr; Show animal
 * **PUT** ```/animal/{slug}``` &rarr; Update animal
 * **DELETE** ```/animal/{slug}``` &rarr; Delete animal
 * **GET** ```/animal/{slug}/edit``` &rarr; Edit animal
 * **GET** ```/search/animal``` &rarr; Search animals
 * **POST** ```/search/animal``` &rarr; Query animals
 * **GET** ```/species``` &rarr; Lists all species
 * **GET** ```/list/species``` &rarr; Returns JSON of all species
 * **POST** ```/species``` &rarr; Stores new species
 * **GET** ```/species/{slug}``` &rarr; Show species
 * **PUT** ```/species/{slug}``` &rarr; Update species
 * **DELETE** ```/species/{slug}``` &rarr; Delete species
 * **GET** ```/species/{slug}/edit``` &rarr; Edit species

## Development Setup and Requirements

We are using the following stack:
+ VueJS
+ Laravel
+ Bulma

You can get started with a local development environment by firstly cloning this
repository, secondly installing the NodeJS and Composer dependencies, and then
compiling the VueJS views and starting a development server through artisan.

``` bash
git clone https://github.com/dmelichar/BIC4ExoticAnimals
cd BIC4ExoticAnimals
npm i && composer install
npm run dev
php artisan serve
```


