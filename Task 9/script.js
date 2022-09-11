/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget > 100000000 === true;
    }

    wasExspensive() {
        return `${this.title} | ${this.director} | ${this.budget}`;
    }
}

const titanikas = new Movie('Titanikas', 'James Cameron', "300000000");
const marsietis = new Movie('Marsietis', 'Ridley Scott', "70000000");
const stigmos = new Movie('Stigmos', 'Clive Exton', "150000000");


console.log(titanikas.wasExspensive());
console.log(marsietis.wasExspensive());
console.log(stigmos.wasExspensive());
