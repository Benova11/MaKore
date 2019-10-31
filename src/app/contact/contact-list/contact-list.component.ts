import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/user.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {

  user: User[];
  constructor() { }

  ngOnInit() {
    this.user = [
      {name: 'test1', profileImage: 'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png'},
      {name: 'test2', profileImage: 'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png'}
    ];
  }

  onSelectionChange(eventData) {
    console.log(eventData.value);
  }

}
