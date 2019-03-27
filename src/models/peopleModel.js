export class people{
  constructor(person){
    this.birth_year = person.birth_year;
    this.eye_color = person.eye_color;
    this.films = person.films;
    this.gender = person.gender;
    this.hair_color = person.hair_color;
    this.height = person.height;
    this.homeworld = person.homeworld;
    this.name = person.name;
    this.skin_color = person.skin_color;
    this.created = person.created;
    this.edited = person.edited;
    this.species = person.species;
    this.starships = person.starships;
    this.url = person.url;
    this.vehicles = person.vehicles;
  }
  getData(){
    return this;
  }
}