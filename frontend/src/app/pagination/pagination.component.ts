import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Result } from "../models/result/result";
import { PageChangedEvent } from "ngx-bootstrap/pagination";
import { CommunicationService } from "../services/local/communication.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements OnChanges, OnInit, OnDestroy {
  @Input() result!: Result;
  @Output() paginationClicked = new EventEmitter<any>();
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItemCount: number = 1;

  items = [];
  pageOfItems: Array<any>;
  private subscriptions: Subscription[] = [];

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    // Subscribe to the centralized current page state
    this.subscriptions.push(
      this.communicationService.getCurrentPage().subscribe(page => {
        this.currentPage = page;
      })
    );
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Update the total count when results change
    if (
      changes?.result?.currentValue?.getTotalNumber() !==
      changes?.result?.previousValue?.getTotalNumber()
    ) {
      if (!isNaN(changes?.result?.currentValue?.getTotalNumber())) {
        this.totalItemCount = changes?.result?.currentValue?.getTotalNumber();
      }
    }
  }

  onChangePage(event: PageChangedEvent): void {
    // Calculate the new from value
    let from = (event.page - 1) * this.itemsPerPage;
    from = Math.min(from, Math.max(0, this.totalItemCount - this.itemsPerPage));
    
    // Update the centralized pagination state
    this.communicationService.setCurrentPage(event.page, from);
    
    // Emit the event to trigger a search with the new pagination
    this.paginationClicked.emit(from);
  }
}
