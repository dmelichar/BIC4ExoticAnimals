# BIC4 Project: Exotic animals

### Authors

- Florian Dienesch  (ic18b509@technikum-wien.at)
- Marco Judt        (ic18b039@technikum-wien.at)
- Daniel Melichar   (ic18b503@technikum-wien.at)

### Brief Description

This software lists exotic animals and species belongs to them.
It is possible to search for animals by various parameters.
Additionally one can create new or edit existing animals/species. 

### Support
This software was tested with following browser:
 - Google Chrome Version 83.0.4103.116
 - Mozilla Firefox Version 77.0.1
 
### Description

When accessing the website it is possible to register or when already done to login. Once logged in the dashboard is displayed with three tabs: Home, Animals, Species.
Home always forwards back to the dashboard.
Under Animals it is possible to list all existings animals, search for them or create new ones. In the animals list it is also possible to show each specific animal, edit them or show the corresponding species.
Under Species it is possible to list all existing species or create new ones. In the species list it is also possible to show each specific specie or edit them.
When displaying one specific species the corresponding animals are also shown and it is possible to access them directly.

### Demo

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


