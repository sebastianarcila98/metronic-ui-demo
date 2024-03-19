import { Component, ElementRef, Input, OnInit } from '@angular/core';
declare var bootstrap: any;


@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrl: './info-icon.component.scss'
})
export class InfoIconComponent implements OnInit {
  @Input() title: string;
  content: string;
  contentMap = new Map<string, string>([
    ['Purchase Price', 'The amount the property is listed for.'],
    ['Total Cash Needed', 'The cash needed to purchase the property.'],
    // Add the rest of the popovers
  ]);

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.content = this.contentMap.get(this.title) || 'No content available';
  }

  ngAfterViewInit(): void {
    const popoverTriggerList = this.el.nativeElement.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach((popoverTriggerEl: HTMLElement) => {
      const popover = new bootstrap.Popover(popoverTriggerEl, {
        delay: { show: 0, hide: 250 }
      });
    });
  }
}
