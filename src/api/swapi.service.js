import ApiService from './api.service';
import {people} from '../models/peopleModel';
import {film} from '../models/filmModel';

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
            });
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
};

let swapiService = new SwapiService();
export default swapiService;