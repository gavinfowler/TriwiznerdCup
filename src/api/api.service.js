let ApiService = class ApiService{
    constructor() {
        this.apiProtocol = 'https:';
        this.apiHost = 'swapi.co/api';
    }

    get apiLocation() {
        return `${this.apiProtocol}//${this.apiHost}`;
    }

    getPeople() {
        return `${this.apiLocation}/people`;
    }

    getPlanets() {
        return `${this.apiLocation}/planets`;
    }

    getFilms() {
        return `${this.apiLocation}/films`;
    }

    getSpecies() {
        return `${this.apiLocation}/species`;
    }

    getVehicles() {
        return `${this.apiLocation}/vehicles`;
    }

    getStarships() {
        return `${this.apiLocation}/starships`;
    }
};

const apiService = new ApiService();
export default apiService;