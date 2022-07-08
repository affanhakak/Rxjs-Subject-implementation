import { Component, OnInit } from '@angular/core';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component implements OnInit {
  userName: string = 'affanH';
  constructor(private utilityService: UtilityServiceService) {
    this.utilityService.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }

  ngOnInit(): void {}

  updateUserName(uname: any) {
    // this.userName = uname.value;
    this.utilityService.userName.next(uname.value);
  }
}
