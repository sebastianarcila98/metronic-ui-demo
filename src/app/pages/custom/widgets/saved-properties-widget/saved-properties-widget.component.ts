import { Component, Input } from '@angular/core';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';

@Component({
  selector: 'app-saved-properties-widget',
  templateUrl: './saved-properties-widget.component.html',
  styleUrl: './saved-properties-widget.component.scss'
})
export class SavedPropertiesWidgetComponent {
  @Input() savedProperties: PropertyAnalysis[] | undefined;


  constructor() {
    console.log('SavedPropertiesWidgetComponent')
  }

}
