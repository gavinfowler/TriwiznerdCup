export class planetsModel {
  constructor(planet){
    this.climate = planet.climate;
    this.diameter = planet.diameter;
    this.gravity = planet.gravity;
    this.name = planet.name;
    this.orbital_period = planet.orbital_period;
    this.population = planet.population;
    this.residents = planet.residents;
    this.rotation_period = planet.rotation_period;
    this.surface_water = planet.surface_water;
    this.terrain = planet.terrain;
    this.url = planet.url;
  }
  getData(){
    return this;
  }
}