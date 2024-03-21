import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PropertyAnalysis } from 'src/app/models/PropertyAnalysis';

@Component({
  selector: 'app-saved-properties-widget',
  templateUrl: './saved-properties-widget.component.html',
  styleUrl: './saved-properties-widget.component.scss'
})
export class SavedPropertiesWidgetComponent implements OnInit {
  @Input() savedProperties: PropertyAnalysis[] | undefined;

  constructor(
  ) {
    console.log('SavedPropertiesWidgetComponent')
  }
  ngOnInit(): void {
    // if (this.savedProperties) {
    //   this.savedProperties.forEach(property => {
    //     if (property.formattedAddress) {
    //       property.formattedAddress = property.formattedAddress.split(',')[0];
    //     }
    //   });
    // }
  }

}
