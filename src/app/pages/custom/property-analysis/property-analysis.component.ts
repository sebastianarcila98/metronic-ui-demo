import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-analysis',
  templateUrl: './property-analysis.component.html',
  styleUrl: './property-analysis.component.scss'
})
export class PropertyAnalysisComponent implements OnInit {
  id: string;
  rentalComps: string[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.rentalComps = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5'];
    this.route.params.subscribe(params => {
      this.id = params['id']; // Capturing the dynamic id from the URL
    });
    console.log(`PropertyAnalysisComponent - id: ${this.id}`)
  }
}
