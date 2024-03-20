import { Component, Input, OnInit } from '@angular/core';
import { Analytics } from 'src/app/models/Analytics';

@Component({
  selector: 'app-analytics-mixed-widget',
  templateUrl: './analytics-mixed-widget.component.html',
  styleUrl: './analytics-mixed-widget.component.scss'
})
export class AnalyticsMixedWidgetComponent implements OnInit {
  @Input() analytics: Analytics | undefined;
  
  constructor() {
    console.log('AnalyticsMixedWidgetComponent');
  }
  
  ngOnInit(): void {
    
  }

}
