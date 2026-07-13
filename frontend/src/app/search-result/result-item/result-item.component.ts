import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from "@angular/core";
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
import { Validation } from "../../models/result/validation";
import { ViewEncapsulation } from "@angular/core";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-result-item",
  templateUrl: "./result-item.component.html",
  styleUrls: ["./result-item.component.css"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  /**
   * Colour class for the data-quality badge.
   *
   * A schema-INVALID dataset is always red, regardless of its field-quality
   * score: a dataset can fail ABCD schema validation (is_valid=false) yet still
   * have high mandatory/recommended field coverage, and we must not paint that
   * reassuringly green. Otherwise colour by the weighted quality score (0..100);
   * no score (not-yet / never validated) is neutral grey.
   */
  qualityBadgeClass(validation: Validation): string {
    if (!validation) {
      return "badge-quality-unknown";
    }
    if (validation.isValid === false) {
      return "badge-quality-low";
    }
    if (!validation.hasQualityScore()) {
      return "badge-quality-unknown";
    }
    if (validation.qualityScore >= 80) {
      return "badge-quality-high";
    }
    if (validation.qualityScore >= 50) {
      return "badge-quality-medium";
    }
    return "badge-quality-low";
  }

  /** Short status word shown on the badge when there is no numeric score. */
  validationStatusLabel(validation: Validation): string {
    switch (validation?.status) {
      case "pending":
      case "running":
        return "pending";
      case "failed":
        return "failed";
      default:
        return "not validated";
    }
  }

  /** Tooltip detail: mandatory / recommended percentages, file counts, date. */
  validationTooltip(validation: Validation): string {
    if (!validation) {
      return "";
    }
    const parts: string[] = [];
    if (typeof validation.qualityScore === "number") {
      parts.push(`Quality ${Math.round(validation.qualityScore)}%`);
    }
    if (typeof validation.mandatoryPercentage === "number") {
      parts.push(`Mandatory ${Math.round(validation.mandatoryPercentage)}%`);
    }
    if (typeof validation.recommendedPercentage === "number") {
      parts.push(`Recommended ${Math.round(validation.recommendedPercentage)}%`);
    }
    if (
      typeof validation.validFiles === "number" &&
      typeof validation.totalFiles === "number"
    ) {
      parts.push(`${validation.validFiles}/${validation.totalFiles} files valid`);
    }
    if (validation.lastValidatedAt) {
      parts.push(`validated ${validation.lastValidatedAt.substring(0, 10)}`);
    }
    return parts.join(" · ");
  }
}
