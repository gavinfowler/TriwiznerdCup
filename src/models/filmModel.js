export class film{
  constructor(film){
    this.characters = film.characters;
    this.created = film.created;
    this.director = film.director;
    this.edited = film.edited;
    this.episode_id = film.episode_id;
    this.opening_crawl = film.opening_crawl;
    this.planets = film.planets;
    this.producer = film.producer;
    this.release_date = film.release_date;
    this.species = film.species;
    this.starships = film.starships;
    this.title = film.title;
    this.url = film.url;
    this.vehicles = film.vehicles;
  }
  getData(){
    return this;
  }
}