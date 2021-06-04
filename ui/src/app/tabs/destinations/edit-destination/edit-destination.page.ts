import {Component, OnInit} from '@angular/core';
import {DestinationId, IDestination} from '../../../model/IDestination';
import {ActivatedRoute} from '@angular/router';
import {DestinationsService} from '../../../services/destinations.service';

@Component({
  selector: 'app-edit-destination',
  templateUrl: './edit-destination.page.html',
  styleUrls: ['./edit-destination.page.scss'],
})
export class EditDestinationPage implements OnInit {

  destinationId: DestinationId;
  destination: IDestination;

  constructor(
    private activatedRoute: ActivatedRoute,
    private destinationService: DestinationsService,
  ) {
  }

  async ngOnInit() {
    const destinationId = Number(this.activatedRoute.snapshot.paramMap.get('destinationId'));
    this.destination = await this.destinationService.getDestinationById(destinationId);
  }

}
