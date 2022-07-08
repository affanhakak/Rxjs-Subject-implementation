import { Component } from '@angular/core';
import { UtilityServiceService } from './utility-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'subject';
  userName: string = 'affanH'

  constructor(private utilityService: UtilityServiceService) {
    this.utilityService.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }

  updateUserName(uname: any) {
    // this.userName = uname.value;
    this.utilityService.userName.next(uname.value);
  }
}
