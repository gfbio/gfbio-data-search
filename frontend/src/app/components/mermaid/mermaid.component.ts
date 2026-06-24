import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

/**
 * Thin wrapper that renders a Mermaid diagram from a definition string.
 *
 * Mermaid is imported lazily on first render so it stays out of the initial
 * application bundle, and a failed render degrades gracefully to a short note
 * rather than breaking the host page.
 */
@Component({
  selector: "app-mermaid",
  template: `<div #host class="mermaid-host"></div>`,
  styles: [
    `
      .mermaid-host {
        display: flex;
        justify-content: center;
        width: 100%;
        overflow-x: auto;
      }
      .mermaid-host svg {
        max-width: 100%;
        height: auto;
      }
      .mermaid-host .mermaid-error {
        color: #6c757d;
        font-style: italic;
        margin: 0;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class MermaidComponent implements AfterViewInit {
  @Input() chart = "";

  @ViewChild("host", { static: true }) host!: ElementRef<HTMLElement>;

  private static counter = 0;

  async ngAfterViewInit(): Promise<void> {
    if (!this.chart) {
      return;
    }

    try {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "neutral",
        // The diagram definition is a developer-controlled constant, so "loose"
        // is safe and lets the node labels use simple HTML formatting.
        securityLevel: "loose",
        flowchart: { useMaxWidth: true, htmlLabels: true },
      });

      const id = `mermaid-diagram-${MermaidComponent.counter++}`;
      const { svg } = await mermaid.render(id, this.chart);
      this.host.nativeElement.innerHTML = svg;
    } catch (error) {
      console.error("Mermaid diagram failed to render", error);
      this.host.nativeElement.innerHTML =
        '<p class="mermaid-error">Diagram could not be displayed.</p>';
    }
  }
}
