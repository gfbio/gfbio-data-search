import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { AboutComponent } from "./about.component";

describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
      // The template renders <app-mermaid> and FontAwesome markup; ignore those
      // unknown elements/attributes so this stays a focused smoke test.
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("provides an architecture diagram centred on the Search portal", () => {
    expect(component.architectureDiagram).toContain("GFBio Search portal");
    expect(component.architectureDiagram).toContain("search.gfbio.org");
  });

  it("lists the Search portal as the primary service component", () => {
    const portal = component.components.find(
      (c) => c.tag === "This service",
    );
    expect(portal?.name).toBe("GFBio Search portal");
  });
});
