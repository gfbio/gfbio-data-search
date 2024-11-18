import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/local/communication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  basketValues: any[] = [];

  constructor(private communicationService: CommunicationService) {
    // Subscribe to basket updates
    this.communicationService.getBasket().subscribe((basket) => {
      this.basketValues = basket || [];
    });
  }

  ngOnInit(): void {}

  basketClick(): void {
    // TODO: Implement basket dialog
  }
}
