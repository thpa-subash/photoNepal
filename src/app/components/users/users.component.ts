import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  editId: number | null = null;
  listOfData: User[] = [];
  constructor() {
    this.listOfData = this.data;
  }

  ngOnInit(): void {}
  startEdit(id: number): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }
  deleteRow(id: number): void {
    // this.listOfData = this.listOfData.filter((d) => d.id !== id);
  }
  userStatus = [
    {
      status: 'Pending',
    },
    { status: 'Approve' },
  ];
  data = [
    { id: 1, name: 'subash', status: 'Pending' },
    { id: 2, name: 'subash', status: 'Pending' },
  ];
  size: NzSelectSizeType = 'default';
}
