import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DestinationsService} from '../../../services/destinations.service';
import {IDestination} from '../../../model/IDestination';
import {PopoverController} from '@ionic/angular';
import {DestinationActionsComponent} from './destination-actions/destination-actions.component';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {

  destination: IDestination;

  constructor(
    private activatedRoute: ActivatedRoute,
    private destinationService: DestinationsService,
    private popoverController: PopoverController,
    private router: Router,
  ) {
  }

  async ngOnInit() {
    const destinationId = Number(this.activatedRoute.snapshot.paramMap.get('destinationId'));
    this.destination = await this.destinationService.getDestinationById(destinationId);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: DestinationActionsComponent,
      event: ev,
      translucent: true
    });
    await popover.present();

    const result = await popover.onDidDismiss();

    this.router.navigate(['/tabs' + result.data, this.destination.id])
      .then();
  }

}
