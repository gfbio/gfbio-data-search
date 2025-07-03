import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Result } from "../models/result/result";
import { PageChangedEvent } from "ngx-bootstrap/pagination";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements OnChanges {
  @Input() result!: Result;
  @Output() paginationClicked = new EventEmitter<any>();
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItemCount: number = 1;

  items = [];
  pageOfItems: Array<any>;

  ngOnChanges(changes: SimpleChanges): void {
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
    this.currentPage = event.page;
    let from = (this.currentPage - 1) * this.itemsPerPage;
    from = Math.min(from, Math.max(0, this.totalItemCount - this.itemsPerPage));
    this.paginationClicked.emit(from);
  }
}
