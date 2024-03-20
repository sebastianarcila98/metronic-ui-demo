import { Component } from '@angular/core';

@Component({
  selector: 'app-saved-properties-widget',
  templateUrl: './saved-properties-widget.component.html',
  styleUrl: './saved-properties-widget.component.scss'
})
export class SavedPropertiesWidgetComponent {
savedProperties= ['1', '2', '3', '4', '5'];

  constructor() {
    console.log('SavedPropertiesWidgetComponent')
  }

}
