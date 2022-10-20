/* eslint-disable no-unused-vars */
import { SERIESMODEL } from '../models/data.js';
export class Store {
    constructor() {
        this.store = 'Series';
    }
    getSeries() {
        return localStorage.getItem(this.store)
            ? JSON.parse(localStorage.getItem(this.store))
            : SERIESMODEL;
    }
    setSeries(tasks) {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }
    deleteSeries() {
        localStorage.removeItem(this.store);
    }
}
