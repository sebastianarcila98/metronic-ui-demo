import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-data-display-card',
  templateUrl: './data-display-card.component.html',
  styleUrl: './data-display-card.component.scss'
})
export class DataDisplayCardComponent implements OnInit {
  @Input() cssClass: string = '';
  @Input() description: string = '';
  @Input() color: string = '';
  @Input() img: string = '';
  @Input() amount: number;
  
  constructor(
    public userService: UserService,
    ) {
      console.log('DataDisplayCardComponent');
    
  }
  ngOnInit(): void {

  }

}
