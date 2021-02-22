import {
  Input,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "app-accordian",
  templateUrl: "./accordian.component.html",
  styleUrls: ["./accordian.component.scss"]
})
export class AccordianComponent implements OnInit {
  @ViewChild("expandWrapper", { read: ElementRef, static: true })
  expandWrapper: ElementRef;

  @Input("expanded") accordionExapanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "500px";

  icon: string = "chevron-forward-outline";
 
  @Input("title") title: string;

  constructor(public renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.title.includes("Day"))
    if(this.title.includes("Day"))
    {
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "max-height",
        "0px"
      );
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "padding",
        "0px 16px"
      );
    }
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "max-height",
        "0px"
      );
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "padding",
        "0px 16px"
      );
    } else {
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "max-height",
        "400px"
      );
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "padding",
        "10px 14px"
      );
    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon =
      this.icon == "chevron-down-outline"
        ? "chevron-forward-outline"
        : "chevron-down-outline";
        console.log(this.accordionExapanded)
  }
  
}
