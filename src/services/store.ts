/* eslint-disable no-unused-vars */
import { SERIESMODEL } from '../models/data.js';
import { iSeries } from '../interfaces/iseries.js';

export class Store {
  store: string;
  constructor() {
    this.store = 'Series';
  }

  getSeries(): Array<iSeries> {
    return localStorage.getItem(this.store)
      ? JSON.parse(<string>localStorage.getItem(this.store))
      : SERIESMODEL;
  }

  setSeries(tasks: Array<iSeries>) {
    localStorage.setItem(this.store, JSON.stringify(tasks));
  }

  deleteSeries() {
    localStorage.removeItem(this.store);
  }
}
