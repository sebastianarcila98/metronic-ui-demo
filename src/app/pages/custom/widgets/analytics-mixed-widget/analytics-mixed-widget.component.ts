import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-mixed-widget',
  templateUrl: './analytics-mixed-widget.component.html',
  styleUrl: './analytics-mixed-widget.component.scss'
})
export class AnalyticsMixedWidgetComponent implements OnInit {
  
  constructor() {
    console.log('AnalyticsMixedWidgetComponent');
  }
  
  ngOnInit(): void {
    
  }

}
