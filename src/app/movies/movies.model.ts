import { Actors } from "./actors.model";
import { Producers } from "./producers.model";

export class Movies {


    public name: string;
    public releaseYear: number;
    public plot: string;
    public poster: string;
    public actors: Actors[];
    public producers: Producers;

    constructor(name: string, year: number, plot: string, poster: string, actors: Actors[], producers: Producers ) {

        this.name=name;
        this.releaseYear = year;
        this.plot = plot;
        this.poster = poster;
        this.actors = actors;
        this.producers = producers;
    }





}