import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { CitationComponent } from "../../citation/citation.component";
import { CommunicationService } from "../../services/local/communication.service";
import { MatomoService } from "../../services/local/matomo.service";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog } from "@angular/material/dialog";
import { Hit } from "../../models/result/hit";
import { ViewEncapsulation } from "@angular/core";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-result-item",
  templateUrl: "./result-item.component.html",
  styleUrls: ["./result-item.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ResultItemComponent implements OnInit {
  @Input() item: Hit;
  @Input() itemId;
  faVolumeUp = faVolumeUp;
  faDownload = faDownload;
  faVideo = faVideo;
  faImage = faImage;
  faQuoteLeft = faQuoteLeft;

  vatImg: string = environment.imagePath + environment.vatImg;
  imagePath: string = environment.imagePath;

  @Output() checkBoxItem = new EventEmitter<any>();

  constructor(
    private communicationService: CommunicationService,
    private matomoService: MatomoService,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  // ============ Tracking Methods ============

  /**
   * Track View More link click
   */
  trackViewMore(): void {
    const position = this.itemId + 1; // Convert to 1-indexed
    const title = this.item.getTitle();
    const datasetType = this.item.getType()?.join(', ') || '';
    this.matomoService.trackViewMore(title, position, datasetType);
  }

  /**
   * Track Download button click
   */
  trackDownload(): void {
    const position = this.itemId + 1;
    const title = this.item.getTitle();
    const datasetType = this.item.getType()?.join(', ') || '';
    this.matomoService.trackDownload(title, position, datasetType);
  }

  openDialog(i): void {
    // Track citation view
    const position = i + 1;
    const title = this.item.getTitle();
    this.matomoService.trackCitationView(title, position);

    this.communicationService.setCitation(i);
    const dialogRef = this.dialog.open(CitationComponent, {
      data: this.item,
    });
  }

  sanitize(url: string): any {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getSanitizedTitle(): any {
    return this.sanitizer.bypassSecurityTrustHtml(this.item.getTitle());
  }

  checkBox(key, value): void {
    this.item.setCheckbox(value.checked);
    this.checkBoxItem.emit(this.item);
  }

  toggleCheckbox(key, value) {
    const wasInBasket = this.item.getCheckBox();
    this.item.setCheckbox(!wasInBasket); // Toggle the checkbox state

    // Track basket add/remove
    const position = key + 1;
    const title = this.item.getTitle();
    this.matomoService.trackBasketAction(wasInBasket ? 'Remove' : 'Add', title, position);

    this.checkBoxItem.emit(this.item);
  }
}
