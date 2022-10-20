export class SerieModel {
    constructor(public id: number, public name: string, public creator: string, public year: number, public poster: string, public watched: boolean, public score: number, public emmies: number) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.year = year;
        this.poster = poster;
        this.watched = watched;
        this.score = score;
        this.emmies = emmies;
    }
}
