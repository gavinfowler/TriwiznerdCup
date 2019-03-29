import ApiService from './api.service';
import {people} from '../models/peopleModel';
import {film} from '../models/filmModel';
import {planetsModel} from '../models/planetsModel';

let SwapiService = class SwapiService {
    constructor() {
    }

    getPeople(url=ApiService.getPeople()) {
        //if (url == '') {
        //    url = ApiService.getPeople();
        //}

        //we actually only need names and URLs.
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                response.results.forEach(person => {
                    //items.push(new People(stuff here))
                    items.push(new people(person));
                });
                let result = {
                    items: items,
                    next: response.next,
                };
                resolve(result);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getPlanets(url=ApiService.getPlanets()) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                response.results.forEach(item => {
                    items.push(new planetsModel(item));
                });

                let result = {
                    items: items,
                    next: response.next,
                };
                resolve(result);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getFilms(url=ApiService.getFilms()) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                response.results.forEach(item => {
                    items.push(new film(item));
                });

                let result = {
                    items: items,
                    next: response.next,
                };
                resolve(result);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getPeopleArray(urls) {
        return new Promise((resolve, reject) => {
            let items = [];

            for (let i = 0; i < urls.length; i++) {
                fetch(urls[i])
                .then((response) => response.json())
                .then((response) => {
                    items.push(new people(response));
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                })
            }

            resolve(items);
        });
    }

    getPlanetsArray(urls) {
        return new Promise((resolve, reject) => {
            let items = [];

            for (let i = 0; i < urls.length; i++) {
                fetch(urls[i])
                .then((response) => response.json())
                .then((response) => {
                    items.push(new planetsModel(response));
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                })
            }

            resolve(items);
        });
    }

    getFilmsArray(urls) {
        return new Promise((resolve, reject) => {
            let items = [];

            for (let i = 0; i < urls.length; i++) {
                fetch(urls[i])
                .then((response) => response.json())
                .then((response) => {
                    items.push(new film(response));
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                })
            }

            resolve(items);
        });
    }

    getPerson(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
                resolve(new people(response));
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            })
        });
    }

    getPlanet(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
                resolve(new planetsModel(response));
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            })
        });
    }

    getFilm(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
                resolve(new film(response));
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            })
        });
    }
};

let swapiService = new SwapiService();
export default swapiService;