import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {DestinationId} from '../../../../model/IDestination';

@Component({
  selector: 'app-actions',
  templateUrl: './destination-actions.component.html',
  styleUrls: ['./destination-actions.component.scss'],
})
export class DestinationActionsComponent implements OnInit {

  constructor(
    private popoverController: PopoverController,
  ) {
  }

  ngOnInit() {
  }

  goToDestinationActivities() {
    this.popoverController.dismiss('/activities').then();
  }

  goToDestinationEats() {
    this.popoverController.dismiss('/eats').then();
  }

}
