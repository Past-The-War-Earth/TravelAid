import {Injectable} from '@angular/core';
import {DestinationId, IDestination, IDestinationSummary} from '../model/IDestination';
import {IDestinationFilter} from '../model/filters/IDestinationFilter';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  destinations: IDestination[] = [{
    country: 'USA',
    id: 2,
    name: 'Seattle',
    pictureId: null,
    region: 'Washington',
    thumbNail: null,
  }, {
    country: 'USA',
    id: 1,
    name: 'Billings',
    pictureId: null,
    region: 'Montana',
    thumbNail: null,
  }];

  constructor() {
  }

  async getDestinationSummaries(
    filter: IDestinationFilter
  ): Promise<IDestinationSummary[]> {
    return this.destinations;
  }

  async getDestinationById(
    destinationId: DestinationId
  ): Promise<IDestination> {
    return this.destinations.filter(destination => destination.id === destinationId)[0];
  }

}
