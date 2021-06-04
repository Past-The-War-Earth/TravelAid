import {Component, OnInit} from '@angular/core';
import {DestinationsService} from '../../services/destinations.service';
import {IDestinationFilter} from '../../model/filters/IDestinationFilter';
import {IDestinationSummary} from '../../model/IDestination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.page.html',
  styleUrls: ['./destinations.page.scss'],
})
export class DestinationsPage implements OnInit {

  destinationSummaries: IDestinationSummary[] = [];

  filter: IDestinationFilter = {
    nameLike: null
  };

  lastFilter: IDestinationFilter = {
    nameLike: null
  };

  constructor(
    private destinationService: DestinationsService,
  ) {
  }

  async ngOnInit() {
    this.destinationSummaries = await this.destinationService.getDestinationSummaries(this.filter);
  }

}
