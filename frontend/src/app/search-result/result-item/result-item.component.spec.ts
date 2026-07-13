import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { ResultItemComponent } from "./result-item.component";
import { CommunicationService } from "../../services/local/communication.service";
import { Hit } from "../../models/result/hit";
import { Citation } from "../../models/result/citation";
import { Validation } from "../../models/result/validation";

// A minimally-populated Hit so the card template renders without a live backend.
function makeHit(validation: Validation | null): Hit {
  const hit = new Hit();
  hit.setTitle("A dataset");
  hit.setDescription([]);
  hit.setMultimediaObjs([]);
  hit.setUpperLabels([]);
  hit.setVat(false);
  hit.setTitleUrl("https://example.org/dataset");
  hit.setType([]); // no ABCD download button
  hit.setCitation(new Citation());
  hit.setValidation(validation);
  return hit;
}

describe("ResultItemComponent", () => {
  let component: ResultItemComponent;
  let fixture: ComponentFixture<ResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: CommunicationService, useValue: { setCitation: () => {} } },
        { provide: MatDialog, useValue: { open: () => ({}) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultItemComponent);
    component = fixture.componentInstance;
    component.item = makeHit(null);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("qualityBadgeClass", () => {
    it("is green for a high score, amber for medium, red for low", () => {
      expect(component.qualityBadgeClass(Validation.fromApi({ quality_score: 90 }))).toBe(
        "badge-quality-high"
      );
      expect(component.qualityBadgeClass(Validation.fromApi({ quality_score: 60 }))).toBe(
        "badge-quality-medium"
      );
      expect(component.qualityBadgeClass(Validation.fromApi({ quality_score: 30 }))).toBe(
        "badge-quality-low"
      );
    });

    it("is neutral grey when there is no score", () => {
      const v = Validation.fromApi({ validation_status: "not_validated" });
      expect(component.qualityBadgeClass(v)).toBe("badge-quality-unknown");
    });

    it("is red for a schema-invalid dataset even with a high quality score", () => {
      // A dataset can fail schema validation yet have high field coverage; it
      // must NOT be painted green. This is the live dataset-4 case (0/1 files
      // valid, quality 91%).
      const v = Validation.fromApi({ is_valid: false, quality_score: 91 });
      expect(component.qualityBadgeClass(v)).toBe("badge-quality-low");
    });
  });

  describe("validationStatusLabel", () => {
    it("maps in-flight and failed states to short words", () => {
      expect(component.validationStatusLabel(Validation.fromApi({ validation_status: "pending" }))).toBe("pending");
      expect(component.validationStatusLabel(Validation.fromApi({ validation_status: "failed" }))).toBe("failed");
      expect(component.validationStatusLabel(Validation.fromApi({ validation_status: "not_validated" }))).toBe("not validated");
    });
  });

  describe("validationTooltip", () => {
    it("summarises mandatory/recommended/files/date, omitting missing parts", () => {
      const v = Validation.fromApi({
        mandatory_percentage: 100,
        recommended_percentage: 57.1,
        total_files: 2,
        valid_files: 1,
        last_validated_at: "2026-06-24T09:06:56",
      });
      expect(component.validationTooltip(v)).toBe(
        "Mandatory 100% · Recommended 57% · 1/2 files valid · validated 2026-06-24"
      );
    });
  });

  describe("data-quality trust chip", () => {
    it("renders a colour-coded 'Quality checked' chip for a conformant aggregator hit", () => {
      component.item = makeHit(Validation.fromApi({ quality_score: 90, validation_status: "completed" }));
      fixture.detectChanges();

      const chip = fixture.nativeElement.querySelector(".validation-badge");
      expect(chip).toBeTruthy();
      expect(chip.textContent).toContain("Quality checked");
      expect(chip.classList).toContain("badge-quality-high");
    });

    it("renders no chip for a non-aggregator hit (no validation)", () => {
      component.item = makeHit(null);
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector(".quality-chip")).toBeNull();
    });

    it("renders a red 'Needs attention' chip for a schema-invalid dataset", () => {
      component.item = makeHit(
        Validation.fromApi({ is_valid: false, quality_score: 91, validation_status: "completed" })
      );
      fixture.detectChanges();

      const chip = fixture.nativeElement.querySelector(".validation-badge");
      expect(chip).toBeTruthy();
      expect(chip.textContent).toContain("Needs attention");
      expect(chip.classList).toContain("badge-quality-low");
    });

    it("shows a plain-words standards line and the required/recommended breakdown in the popover", () => {
      component.item = makeHit(
        Validation.fromApi({
          is_valid: false,
          mandatory_percentage: 100,
          recommended_percentage: 71,
          validation_status: "completed",
        })
      );
      fixture.detectChanges();

      const pop = fixture.nativeElement.querySelector(".quality-pop");
      expect(pop).toBeTruthy();
      expect(pop.textContent).toContain("Format issues");
      expect(pop.textContent).toContain("Required");
      expect(pop.textContent).toContain("Recommended");
    });
  });
});
