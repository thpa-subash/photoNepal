import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;
  data = [
    'Subash Thapa change Profile Picture',
    'Subash Thapa Added 20 New Photo',
    'Zookti comment in subash Photos',
    'Subash Thapa follow Zookti',
  ];
  constructor(public msg: NzMessageService) {}
}
